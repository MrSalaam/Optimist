import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight,
  Sparkles,
  Layers,
  Workflow, 
  LoaderCircle,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
// Video is now in public folder, so we reference it directly
const bashkim = "/videos/bashkim.mp4";
const c = "/videos/c.mp4";
const recuva = "/videos/recuva.mp4";
const hinansho = "/images/hinansho.png";
const EUPHORIA = "/images/EUPHORIA.png";
const ALARABARA = "/images/ALARABARA.png";
const instagram = "/images/instagram.png";
const weightx = "/images/weightx.jpg";
const atinude = "/images/atinude.png";
const couture = "/images/couture.png";
const fresh = "/images/fresh.png";


const ImageWithLoader = ({ src, className }: { src: string, className: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 bg-background/10 flex items-center justify-center">
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute z-10"
        >
          <LoaderCircle className="w-8 h-8 text-foreground/50 animate-spin" />
        </motion.div>
      )}
      <motion.img
        src={src}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        onError={(e) => {
          console.error('Image failed:', src);
          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23fff"%3EImage%3C/text%3E%3C/svg%3E';
        }}
      />
    </div>
  );
};

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [videoStates, setVideoStates] = useState<Record<number, { loaded: boolean; playing: boolean }>>({});
  const [isGridLoading, setIsGridLoading] = useState(true);

  const filters = ["All", "Brand Identity Design", "Illustrations", "Digital Design", "Printing", "Motion Graphics"];

  const projects = [
    {
      id: 1,
      category: "Brand Identity Design",
      year: "2024",
      media: c,
      mediaType: "video",
      featured: true, 
      poster: "/images/posters/c-poster.jpg",
      link: "#"
    },
    {
      id: 2,
      category: "Motion Graphics",
      year: "2024",
      media: recuva,
      mediaType: "video",
      featured: false, 
      poster: "/images/posters/recuva-poster.jpg",
      link: "#"
    },
    {
      id: 3,
      category: "Brand Identity Design",
      year: "2023",
      media: hinansho,
      mediaType: "image",
      featured: true,
      link: "#"
    },
    {
      id: 4,
      category: "Brand Identity Design",
      year: "2024",
      media: EUPHORIA,
      mediaType: "image",
      featured: false,
      link: "#"
    },
    {
      id: 5,
      category: "Brand Identity Design",
      year: "2024",
      media: ALARABARA,
      mediaType: "image",
      featured: false,
      link: "#"
    },
    {
      id: 6,
      category: "Motion Graphics",
      year: "2024",
      media: bashkim,
      mediaType: "video",
      featured: true, 
      poster: "/images/posters/bashkim-poster.jpg",
      link: "#"
    },
    {
      id: 7,
      category: "Brand Identity Design",
      year: "2023",
      media: instagram,
      mediaType: "image",
      featured: false,
      link: "#"
    },
    {
      id: 8,
      category: "Brand Identity Design",
      year: "2023",
      media: weightx,
      mediaType: "image",
      featured: false,
      link: "#"
    },
    {
      id: 9,
      category: "Brand Identity Design",
      year: "2024",
      media: atinude,
      mediaType: "image",
      featured: false,
      link: "#"
    },
    {
      id: 10,
      
      category: "Brand Identity Design",
      year: "2024",
      media: couture,
      mediaType: "image",
      featured: true,
      link: "#"
    },
    {
      id: 11,
      category: "Brand Identity Design",
      year: "2024",
      description: "Stunning product visuals for e-commerce excellence.",
      media: fresh,
      mediaType: "image",
      featured: false,
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerRef = useRef(null);

  const handleVideoClick = (e: React.MouseEvent, projectId: number) => {
    e.stopPropagation();
    const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
    
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement.muted = true;
      videoElement.play()
        .then(() => {
          setVideoStates(prev => ({
            ...prev,
            [projectId]: { loaded: true, playing: true }
          }));
        })
        .catch(err => {
          console.error('Video play failed:', err);
          // Try unmuting and playing again
          videoElement.muted = false;
          videoElement.play().catch(e => console.error('Second play attempt failed:', e));
        });
    } else {
      videoElement.pause();
      setVideoStates(prev => ({
        ...prev,
        [projectId]: { ...prev[projectId], playing: false }
      }));
    }
  };

  const handleVideoHover = (projectId: number, videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;
    setHoveredProject(projectId);
    
    videoElement.muted = true;
    const playPromise = videoElement.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setVideoStates(prev => ({
            ...prev,
            [projectId]: { loaded: true, playing: true }
          }));
        })
        .catch(() => {
          // Autoplay failed - user needs to click
          setVideoStates(prev => ({
            ...prev,
            [projectId]: { loaded: true, playing: false }
          }));
        });
    }
  };

  const handleVideoLeave = (projectId: number, videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;
    setHoveredProject(null);
    videoElement.pause();
    videoElement.currentTime = 0;
    setVideoStates(prev => ({
      ...prev,
      [projectId]: { ...prev[projectId], playing: false }
    }));
  };

  useEffect(() => {
    // Show loader while we check for asset loading status
    setIsGridLoading(true);

    const assetsToLoad = filteredProjects
      .map(project => (project.mediaType === 'video' ? project.poster : project.media))
      .filter(Boolean); // Filter out any null/undefined paths

    if (assetsToLoad.length === 0) {
      setIsGridLoading(false);
      return;
    }

    let loadedCount = 0;
    const totalAssets = assetsToLoad.length;

    const handleAssetLoad = () => {
      loadedCount++;
      if (loadedCount === totalAssets) {
        // Add a small delay to prevent a jarring flash if loading is very fast
        setTimeout(() => setIsGridLoading(false), 300);
      }
    };

    assetsToLoad.forEach(src => {
      const img = new Image();
      img.src = src as string; // Assuming project.media and project.poster are strings
      img.onload = handleAssetLoad;
      img.onerror = handleAssetLoad; // Count errors as "loaded" to avoid getting stuck
    });

  }, [activeFilter]); // Re-run this effect when the filter changes

  return (
    <section id="portfolio" ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>
      
      <div className="container-portfolio relative z-10 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm"
            >
              <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-xs sm:text-sm font-medium text-foreground-secondary">Work</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground px-4"
            >
              Featured Work
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="text-base sm:text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto px-4"
            >
              A selection of projects that showcase strategic thinking and creative execution
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
            }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="flex justify-center px-4">
              <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 p-1 sm:p-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className="relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full whitespace-nowrap"
                  >
                    {activeFilter === filter && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-accent rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 ${
                      activeFilter === filter ? 'text-white dark:text-black' : 'text-foreground-secondary hover:text-foreground'
                    }`}>
                      {filter}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          {isGridLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <LoaderCircle className="w-12 h-12 text-foreground/50 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 px-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={(e) => {
                    if (project.mediaType === "video") {
                      const videoElement = e.currentTarget.querySelector('video');
                      handleVideoHover(project.id, videoElement);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (project.mediaType === "video") {
                      const videoElement = e.currentTarget.querySelector('video');
                      handleVideoLeave(project.id, videoElement);
                    }
                  }}
                  className={`group relative ${project.featured ? 'md:row-span-2' : ''}`}
                >
                  <div 
                    className="relative h-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden bg-background/50 border border-border backdrop-blur-sm cursor-pointer"
                    onClick={(e) => project.mediaType === "video" && handleVideoClick(e, project.id)}
                  >
                    {/* Media */}
                    <div className="absolute inset-0">
                      {project.mediaType === "video" ? (
                        <>
                          <video 
                            src={project.media} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            muted
                            loop
                            playsInline 
                            preload="none"
                            poster={project.poster}
                          
                          /> 
                          {/* Play button overlay */}
                          <div 
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                              videoStates[project.id]?.playing ? 'opacity-0' : 'opacity-100'
                            }`}
                          >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white hover:bg-accent hover:scale-110 transition-all shadow-2xl">
                              <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <ImageWithLoader src={project.media} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                      {/* Top badges */}
                      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 flex items-start justify-between gap-2">
                        <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-background/90 backdrop-blur-md text-xs font-medium text-foreground rounded-full border border-border">
                          {project.category}
                        </span>
                        <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-background/90 backdrop-blur-md text-xs font-medium text-foreground-secondary rounded-full border border-border">
                          {project.year}
                        </span>
                      </div>

                      {/* Description on hover */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: hoveredProject === project.id ? 0 : 20,
                          opacity: hoveredProject === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="mb-3 sm:mb-4 hidden sm:block"
                      >
                        <p className="text-xs sm:text-sm text-foreground-secondary">
                          {project.description}
                        </p>
                      </motion.div>

                      <div className="flex items-end justify-between gap-3">
                    
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-shrink-0"
                        >
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent text-white dark:bg-black dark:text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                          >
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </motion.button>
                        </a>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-accent/5 pointer-events-none"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
            }}
            className="relative px-4"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-4 sm:mb-6"
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent" />
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
                  Let's Create Something Extraordinary
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  Ready to elevate your brand with design that drives results? Let's start a conversation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                  <Button 
                    size="lg"
                    className="group shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Start Your Project
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-background/50 backdrop-blur-sm border-border hover:bg-background transition-all duration-300 w-full sm:w-auto"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Layers className="w-4 h-4 mr-2" />
                    View Process
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;