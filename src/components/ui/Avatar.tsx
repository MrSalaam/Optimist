import { memo } from "react";

interface AvatarProps {
  name: string;
  initials?: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Avatar = memo(({ name, initials, imageUrl, size = "md", className = "" }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-16 h-16 sm:w-20 sm:h-20 text-lg sm:text-xl",
    lg: "w-20 h-20 sm:w-24 sm:h-24 text-xl sm:text-2xl",
    xl: "w-24 h-24 sm:w-28 sm:h-28 text-2xl sm:text-3xl"
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
        <span className="font-bold text-white dark:text-black">{initials || name.charAt(0).toUpperCase()}</span>
      </div>
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;
