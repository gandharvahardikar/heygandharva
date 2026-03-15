import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link: _link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        // Glassmorphism base
        "group relative flex flex-col h-full rounded-2xl overflow-hidden",
        // Glass effect - light mode
        "bg-white/60 border border-gray-200/60",
        // Glass effect - dark mode
        "dark:bg-white/[0.03] dark:border-white/[0.08]",
        // Backdrop blur
        "backdrop-blur-xl",
        // Shadow
        "shadow-lg shadow-black/[0.03] dark:shadow-black/20",
        // Hover effects
        "hover:bg-white/80 dark:hover:bg-white/[0.06]",
        "hover:border-gray-300/80 dark:hover:border-white/[0.15]",
        "hover:shadow-xl hover:shadow-black/[0.05] dark:hover:shadow-black/30",
        "hover:scale-[1.02]",
        // Transitions
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Media Section */}
      {(video || image) && (
        <Link href={href || "#"} className="block overflow-hidden">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-40 w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </Link>
      )}

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Title & Date */}
        <div>
          <Link href={href || "#"} className="group/title">
            <h3 className="font-semibold text-base leading-tight text-foreground group-hover/title:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          {dates && (
            <time className="text-xs text-muted-foreground/80">{dates}</time>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags - Glass style */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-2.5 py-1 text-[10px] font-medium rounded-full",
                  // Glass tag style
                  "bg-black/[0.04] dark:bg-white/[0.08]",
                  "border border-black/[0.06] dark:border-white/[0.1]",
                  "text-foreground/70 dark:text-foreground/80"
                )}
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span
                className={cn(
                  "px-2.5 py-1 text-[10px] font-medium rounded-full",
                  "bg-black/[0.04] dark:bg-white/[0.08]",
                  "border border-black/[0.06] dark:border-white/[0.1]",
                  "text-foreground/70 dark:text-foreground/80"
                )}
              >
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Links - Push to bottom */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-3 mt-auto border-t border-black/[0.04] dark:border-white/[0.06]">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className={cn(
                  "inline-flex items-center gap-1.5 text-xs font-medium",
                  "text-muted-foreground hover:text-foreground",
                  "transition-colors duration-200"
                )}
              >
                {link.icon}
                <span>{link.type}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
