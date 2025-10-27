// Utility to generate consistent placeholder avatars
export const generateAvatarUrl = (name: string, initials: string): string => {
  // Using a service that generates consistent avatars based on initials
  const encodedName = encodeURIComponent(name);
  const encodedInitials = encodeURIComponent(initials);
  
  // Using DiceBear API for consistent avatars
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodedInitials}&backgroundColor=random&textColor=ffffff&size=150`;
};

// Alternative: Using UI Avatars service
export const generateUIAvatarUrl = (initials: string, name: string): string => {
  const encodedInitials = encodeURIComponent(initials);
  const encodedName = encodeURIComponent(name);
  
  return `https://ui-avatars.com/api/?name=${encodedInitials}&background=random&color=fff&size=150&bold=true&format=png`;
};

// Fallback to initials-based colors
export const getInitialsColor = (initials: string): string => {
  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ];
  
  const index = initials.charCodeAt(0) % colors.length;
  return colors[index];
};
