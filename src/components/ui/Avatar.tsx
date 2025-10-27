import { memo } from "react";

interface AvatarProps {
  name: string;
  initials: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar = memo(({ name, initials, imageUrl, size = "md", className = "" }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 sm:w-14 sm:h-14 text-base sm:text-lg",
    lg: "w-16 h-16 sm:w-20 sm:h-20 text-lg sm:text-xl"
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) fallback.style.display = 'flex';
  };

  return (
    <div className={`${sizeClasses[size]} rounded-2xl overflow-hidden border-2 border-accent/20 relative ${className}`}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={`${name} profile`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={handleImageError}
        />
      )}
      {/* Fallback initials */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center"
        style={{ display: imageUrl ? 'none' : 'flex' }}
      >
        <span className="font-bold text-white dark:text-black">{initials}</span>
      </div>
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;
