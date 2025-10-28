
const bashkim = "/videos/bashkim.webm";
const c = "/videos/c.webm";
const recuva = "/videos/recuva.webm";


const hinansho = "/images/hinansho.webp";
const EUPHORIA = "/images/EUPHORIA.webp";
const ALARABARA = "/images/ALARABARA.webp";
const instagram = "/images/instagram.webp";
const weightx = "/images/weightx.webp";
const atinude = "/images/atinude.webp";
const couture = "/images/couture.webp";
const fresh = "/images/fresh.webp";

// Discriminated union for Project type
type VideoProject = {
  id: number;
  category: string;
  year: string;
  mediaType: "video";
  media: string;
  poster: string; // Required for videos
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
  poster?: never; // Not allowed for images
  featured: boolean;
  link: string;
  description?: string;
};

export type Project = VideoProject | ImageProject;

/**
 * All portfolio projects
 */
export const PROJECTS: Project[] = [
  { 
    id: 1, 
    category: "Brand Identity Design", 
    year: "2024", 
    media: c, 
    mediaType: "video", 
    featured: true, 
    poster: "/images/posters/c-poster.webp",
    link: "https://www.behance.net/gallery/219575507/CULTURE-COUTURE", 
    description: "Complete brand transformation" 
  },
  { 
    id: 2, 
    category: "Motion Graphics", 
    year: "2023", 
    media: recuva, 
    mediaType: "video", 
    featured: false, 
    poster: "/images/posters/recuva-poster.webp",
    link: "https://www.behance.net/gallery/208206583/MOTION-DESIGN-PROJECTS", 
    description: "Dynamic motion design" 
  },
  { 
    id: 3, 
    category: "Brand Identity Design", 
    year: "2025", 
    media: EUPHORIA, 
    mediaType: "image", 
    featured: true, 
    link: "https://www.behance.net/gallery/234878731/Euphoria", 
    description: "Creative brand solution" 
  },
  { 
    id: 4, 
    category: "Brand Identity Design", 
    year: "2025", 
    media: hinansho, 
    mediaType: "image", 
    featured: false, 
    link: "#", 
    description: "Real estate brand design" 
  },
  { 
    id: 5, 
    category: "Brand Identity Design", 
    year: "2025", 
    media: ALARABARA, 
    mediaType: "image", 
    featured: false, 
    link: "https://www.behance.net/gallery/234884483/Alarabara-wears", 
    description: "Cultural brand design" 
  },
  { 
    id: 6, 
    category: "Motion Graphics", 
    year: "2025", 
    media: bashkim, 
    mediaType: "video", 
    featured: true, 
    poster: "/images/posters/bashkim-poster.webp",
    link: "https://www.behance.net/gallery/208206583/MOTION-DESIGN-PROJECTS", 
    description: "Engaging motion graphics" 
  },
  { 
    id: 7, 
    category: "Digital Design", 
    year: "2024", 
    media: instagram, 
    mediaType: "image", 
    featured: false, 
    link: "https://www.behance.net/gallery/234882355/Product-Convoy", 
    description: "Social media design" 
  },
  { 
    id: 8, 
    category: "Digital Design", 
    year: "2024", 
    media: weightx, 
    mediaType: "image", 
    featured: false, 
    link: "#", 
    description: "App interface design" 
  },
  { 
    id: 9, 
    category: "Brand Identity Design", 
    year: "2025", 
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
    link: "https://www.behance.net/gallery/219575507/CULTURE-COUTURE", 
    description: "Luxury brand design" 
  },
  { 
    id: 11, 
    category: "Digital Design", 
    year: "2024", 
    media: fresh, 
    mediaType: "image", 
    featured: false, 
    link: "https://www.behance.net/gallery/202185349/Grocery-Store-Branding-Project", 
    description: "E-commerce visuals" 
  }
];

/**
 * Filter categories
 */
export const FILTERS = ["All", "Brand Identity Design", "Motion Graphics", "Digital Design"] as const;

/**
 * Number of projects to show per page
 */
export const PROJECTS_PER_PAGE = 3;