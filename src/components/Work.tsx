import { 
  ArrowUpRight,
  Workflow,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { PROJECTS, FILTERS, PROJECTS_PER_PAGE } from "../constants/projects";

interface ImageWithLoaderProps {
  src: string;
  className: string;
  alt?: string;
}

/**
 * Optimized image component with Intersection Observer for lazy loading
 */
const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ src, className, alt = "Project image" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={imgRef} className="absolute inset-0">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-background/10" />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/10">
          <p className="text-xs text-foreground/50">Failed to load</p>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        loading="eager"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

// Discriminated union for Project type
type VideoProject = {
  id: number;
  category: string;
  year: string;
  mediaType: "video";
  media: string;
  poster: string;
  featured: boolean;
  link: string;
  description?: string;
};

type ImageProject = {
  id: number;
  category: string;
  year: string;
  mediaType: "image";
  media: string;
  poster?: never;
  featured: boolean;
  link: string;
  description?: string;
};

type Project = VideoProject | ImageProject;

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  onVideoRef: (id: number, el: HTMLVideoElement | null) => void;
}

/**
 * Individual project card component with hover interactions
 * Memoized to prevent unnecessary re-renders
 */
const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, isHovered, onHover, onVideoRef }) => {
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Responsive aspect ratio classes
  const ratioClass = project.featured
    ? 'pb-[70%] sm:pb-[60%] md:pb-[45%] lg:pb-[40%]'
    : 'pb-[100%] sm:pb-[80%] md:pb-[70%] lg:pb-[66%]';

  // Intersection Observer for card visibility
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { 
        rootMargin: "100px",
        threshold: 0.1
      }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  // Debounced hover handler (300ms delay for better performance)
  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      onHover(project.id);
    }, 300);
  }, [project.id, onHover]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    onHover(null);
  }, [onHover]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div 
        className="card-hover relative rounded-2xl bg-background/50 border border-border will-change-transform"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Ratio box to control height responsively */}
        <div className={`${ratioClass} block`} />

        {/* Media */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {project.mediaType === "video" ? (
            isVisible && (
              <video
                ref={(el) => onVideoRef(project.id, el)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                poster={project.poster}
              >
                <source src={project.media} type="video/webm" />
              </video>
            )
          ) : (
            <ImageWithLoader
              src={project.media}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
              alt={project.category}
            />
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 rounded-2xl" />

        {/* Content */}
        <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
          {/* Top badges */}
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <span className="badge">
              {project.category}
            </span>
            <span className="badge-secondary">
              {project.year}
            </span>
          </div>

          {/* Bottom content */}
          <div>
            <p className={`text-white/90 text-sm sm:text-base mb-3 sm:mb-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex-1" />
              <a
                href={project.link}
                className="btn-icon text-white dark:text-black"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View ${project.category} project`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for memo - only re-render if these change
  return (
    prevProps.project.id === nextProps.project.id &&
    prevProps.isHovered === nextProps.isHovered
  );
});

ProjectCard.displayName = 'ProjectCard';

/**
 * Pagination button component
 */
interface PaginationButtonProps {
  page: number;
  currentPage: number;
  onClick: (page: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = React.memo(({ page, currentPage, onClick }) => {
  const isActive = currentPage === page;
  
  return (
    <button
      onClick={() => onClick(page)}
      className={`btn-pagination ${
        isActive
          ? 'bg-white dark:bg-white text-white dark:text-black border-accent shadow-lg'
          : 'border-border bg-background/80 backdrop-blur-sm hover:border-accent hover:bg-accent/10 text-foreground'
      }`}
      style={isActive ? { color: 'white' } : undefined}
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {page}
    </button>
  );
});

PaginationButton.displayName = 'PaginationButton';

/**
 * Main Work component with portfolio projects
 */
const Work: React.FC = () => {
  // State management
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Refs
  const containerRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const transitionTimeoutRef = useRef<NodeJS.Timeout>();
  const previousPageRef = useRef(1);

  /**
   * Filter projects based on active filter
   */
  const filteredProjects = useMemo(
    () => activeFilter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  /**
   * Calculate total pages for pagination
   */
  const totalPages = useMemo(
    () => Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE),
    [filteredProjects.length]
  );

  /**
   * Get current page projects with memoization
   */
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage]);

  /**
   * Memoize pagination page numbers
   */
  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  /**
   * Throttled filter change handler
   */
  const handleFilterChange = useCallback((filter: string) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveFilter(filter);
    
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  /**
   * Reset to page 1 when filter changes
   */
  useEffect(() => {
    setCurrentPage(1);
    previousPageRef.current = 1;
  }, [activeFilter]);

  /**
   * Scroll to top when page changes
   */
  useEffect(() => {
    if (previousPageRef.current === currentPage) {
      return;
    }

    previousPageRef.current = currentPage;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (containerRef.current) {
        const yOffset = -100;
        const y = containerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentPage]);

  /**
   * Update video refs callback
   */
  const handleVideoRef = useCallback((id: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(id, el);
      // Auto-play when video is mounted
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.debug('Video autoplay prevented:', error);
        });
      }
    } else {
      videoRefs.current.delete(id);
    }
  }, []);

  /**
   * Handle project hover state (only for description visibility now)
   */
  const handleProjectHover = useCallback((id: number | null) => {
    setHoveredProject(id);
  }, []);

  /**
   * Handle pagination page change with transition lock
   */
  const handlePageChange = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(page);
      
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [totalPages, isTransitioning]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={containerRef} 
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div className="section-pattern" style={{ willChange: 'auto' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 md:mb-16 lg:mb-16">
          <div className="inline-flex items-center gap-2  backdrop-blur-sm border border-accent/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6">
            <Workflow className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Featured Works
          </h2>

          <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto">
            A selection of projects showcasing strategic thinking and creative execution
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="w-full overflow-x-auto">
            <div 
              className="min-w-max mx-auto inline-flex gap-2 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-full"
              role="tablist"
              aria-label="Project filters"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  disabled={isTransitioning}
                  className={`btn-filter ${
                    activeFilter === filter 
                      ? 'bg-accent text-white dark:text-black shadow-lg' 
                      : 'text-foreground-secondary hover:text-foreground hover:bg-background/50'
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                  role="tab"
                  aria-selected={activeFilter === filter}
                  aria-controls="projects-grid"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          id="projects-grid"
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-h-[400px] ${
            isTransitioning ? 'pointer-events-none' : ''
          }`}
          style={{
            opacity: isTransitioning ? 0.7 : 1,
            transition: 'opacity 0.2s ease-in-out',
          }}
          role="tabpanel"
        >
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={handleProjectHover}
              onVideoRef={handleVideoRef}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav 
            className="flex items-center justify-center gap-2 mt-10 sm:mt-12"
            aria-label="Pagination navigation"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || isTransitioning}
              className="btn-nav"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {pageNumbers.map((page) => (
                <PaginationButton
                  key={page}
                  page={page}
                  currentPage={currentPage}
                  onClick={handlePageChange}
                />
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || isTransitioning}
              className="btn-nav"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        )}

        {/* Project Count */}
        <div 
          className="text-center mt-6"
          role="status"
          aria-live="polite"
        >
          <p className="text-sm text-foreground-secondary">
            Showing {currentProjects.length} of {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;