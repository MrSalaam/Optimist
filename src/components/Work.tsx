import { 
  ArrowUpRight,
  Workflow, 
  LoaderCircle,
} from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Optimized video paths with WebM format
const bashkim = "/videos/bashkim.webm";
const c = "/videos/c.webm";
const recuva = "/videos/recuva.webm";

// Optimized image paths with WebP format
const hinansho = "/images/hinansho.webp";
const EUPHORIA = "/images/EUPHORIA.webp";
const ALARABARA = "/images/ALARABARA.webp";
const instagram = "/images/instagram.webp";
const weightx = "/images/weightx.webp";
const atinude = "/images/atinude.webp";
const couture = "/images/couture.webp";
const fresh = "/images/fresh.webp";

interface ImageWithLoaderProps {
  src: string;
  className: string;
  alt?: string;
}

// Simplified image component
const ImageWithLoader = ({ src, className, alt = "Project image" }: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 bg-background/5">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <LoaderCircle className="w-8 h-8 text-foreground/30 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

interface Project {
  id: number;
  category: string;
  year: string;
  media: string;
  mediaType: "video" | "image";
  featured: boolean;
  poster?: string;
  link: string;
  description?: string;
}

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const filters = ["All", "Brand Identity Design", "Motion Graphics", "Digital Design"];

  const projects: Project[] = [
    { 
      id: 1, 
      category: "Brand Identity Design", 
      year: "2024", 
      media: c, 
      mediaType: "video", 
      featured: true, 
      poster: "/images/posters/c-poster.webp",
      link: "#", 
      description: "Complete brand transformation" 
    },
    { 
      id: 2, 
      category: "Motion Graphics", 
      year: "2024", 
      media: recuva, 
      mediaType: "video", 
      featured: false, 
      poster: "/images/posters/recuva-poster.webp",
      link: "#", 
      description: "Dynamic motion design" 
    },
    { 
      id: 3, 
      category: "Brand Identity Design", 
      year: "2023", 
      media: hinansho, 
      mediaType: "image", 
      featured: true, 
      link: "#", 
      description: "Modern brand identity" 
    },
    { 
      id: 4, 
      category: "Brand Identity Design", 
      year: "2024", 
      media: EUPHORIA, 
      mediaType: "image", 
      featured: false, 
      link: "#", 
      description: "Creative brand solution" 
    },
    { 
      id: 5, 
      category: "Brand Identity Design", 
      year: "2024", 
      media: ALARABARA, 
      mediaType: "image", 
      featured: false, 
      link: "#", 
      description: "Cultural brand design" 
    },
    { 
      id: 6, 
      category: "Motion Graphics", 
      year: "2024", 
      media: bashkim, 
      mediaType: "video", 
      featured: true, 
      poster: "/images/posters/bashkim-poster.webp",
      link: "#", 
      description: "Engaging motion graphics" 
    },
    { 
      id: 7, 
      category: "Digital Design", 
      year: "2023", 
      media: instagram, 
      mediaType: "image", 
      featured: false, 
      link: "#", 
      description: "Social media design" 
    },
    { 
      id: 8, 
      category: "Digital Design", 
      year: "2023", 
      media: weightx, 
      mediaType: "image", 
      featured: false, 
      link: "#", 
      description: "App interface design" 
    },
    { 
      id: 9, 
      category: "Brand Identity Design", 
      year: "2024", 
      media: atinude, 
      mediaType: "image", 
      featured: false, 
      link: "#", 
      description: "Minimal brand identity" 
    },
    { 
      id: 10, 
      category: "Brand Identity Design", 
      year: "2024", 
      media: couture, 
      mediaType: "image", 
      featured: true, 
      link: "#", 
      description: "Luxury brand design" 
    },
    { 
      id: 11, 
      category: "Digital Design", 
      year: "2024", 
      media: fresh, 
      mediaType: "image", 
      featured: false, 
      link: "#", 
      description: "E-commerce visuals" 
    }
  ];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  const handleVideoHover = (projectId: number, shouldPlay: boolean) => {
    const video = videoRefs.current.get(projectId);
    if (!video) return;

    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="portfolio" ref={containerRef} className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header - Remove whileInView animations */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Workflow className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Featured Works
          </h2>

          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A selection of projects showcasing strategic thinking and creative execution
          </p>
        </div>

        {/* Filter Tabs - Remove animations */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap gap-2 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-2xl">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl ${
                    activeFilter === filter 
                      ? 'bg-accent text-white shadow-lg' 
                      : 'text-foreground-secondary hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid - Simplified animations */}
        <motion.div 
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative ${
                project.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div 
                className={`relative overflow-hidden rounded-2xl bg-background/50 border border-border ${
                  project.featured ? 'h-[500px] md:h-full' : 'h-[400px]'
                }`}
                onMouseEnter={() => {
                  setHoveredProject(project.id);
                  handleVideoHover(project.id, true);
                }}
                onMouseLeave={() => {
                  setHoveredProject(null);
                  handleVideoHover(project.id, false);
                }}
              >
                {/* Media */}
                <div className="absolute inset-0">
                  {project.mediaType === "video" ? (
                    <video 
                      ref={(el) => {
                        if (el) videoRefs.current.set(project.id, el);
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      muted
                      loop
                      playsInline 
                      preload="auto"
                      poster={project.poster}
                    >
                      <source src={project.media} type="video/webm" />
                      Your browser does not support the video tag.
                    </video> 
                  ) : (
                    <ImageWithLoader 
                      src={project.media} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt={project.category}
                    />
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top badges */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md text-xs font-medium text-foreground rounded-full border border-border">
                      {project.category}
                    </span>
                    <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md text-xs font-medium text-foreground-secondary rounded-full border border-border">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <p className={`text-white/90 text-sm mb-4 transition-all duration-300 ${
                      hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex-1" />
                      <a
                        href={project.link}
                        className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;