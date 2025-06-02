import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";

interface ZoomBlurCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  link?: string;
  className?: string;
}

interface TextRevealProps {
  children: string;
  isHovered: boolean;
  duration?: number;
  stagger?: number;
  hoverColor?: string;
  lineHeight?: number | string;
  easing?: string | number[];
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  isHovered,
  duration = 0.35,
  stagger = 0.015,
  hoverColor = "text-white",
  lineHeight = 1.1,
  easing = [0.65, 0, 0.35, 1],
  className,
}) => {
  return (
    <motion.div
      className={clsx(
        "relative block overflow-hidden whitespace-nowrap",
        className
      )}
      style={{ lineHeight }}
      aria-hidden="true"
    >
      <motion.div>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={isHovered ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration,
              ease: easing,
              delay: isHovered
                ? stagger * index
                : stagger * (children.length - index),
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className="absolute inset-0">
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={isHovered ? { y: 0 } : { y: "100%" }}
            transition={{
              duration,
              ease: easing,
              delay: isHovered
                ? stagger * index
                : stagger * (children.length - index),
            }}
            className={clsx("inline-block", hoverColor)}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const ZoomBlurCard: React.FC<ZoomBlurCardProps> = ({
  title,
  description,
  imageUrl,
  tags = [],
  link,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <motion.div
      className={clsx(
        "relative w-full h-52 rounded-2xl overflow-hidden group border border-white/10 shadow-sm",
        "transition-all duration-500 ease-out",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      role="article"
      aria-labelledby={`card-title-${title}`}
    >
      {/* Imagen de fondo con efecto de zoom y blur */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl">
        <Image
          src={imageUrl}
          alt={`Imagen del proyecto ${title}`}
          fill
          className={clsx(
            "object-cover transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] rounded-2xl",
            isHovered
              ? "scale-110 opacity-70 blur-[1px]"
              : "scale-100 opacity-60 blur-0"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl" aria-hidden="true" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-between p-3 text-white">
        {/* Sección superior - ícono flecha */}
        <motion.div
          className="self-end"
          animate={{
            rotate: isHovered ? 45 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          aria-hidden="true"
        >
          <FaArrowRightLong className="w-4 h-4 opacity-80" />
        </motion.div>

        {/* Sección inferior - texto */}
        <div className="space-y-1">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1" role="list" aria-label="Tecnologías utilizadas">
              {tags.slice(0, 3).map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.7, scale: 0.9 }}
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                    scale: isHovered ? 1 : 0.9,
                  }}
                  transition={{ delay: index * 0.05 }}
                  className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-black/40 backdrop-blur-sm border border-white/10"
                  role="listitem"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
          {/* Título con animación */}
          <h3 className="overflow-hidden" id={`card-title-${title}`}>
            <TextReveal
              isHovered={true}
              className="text-base font-bold mb-0.5 tracking-tight text-white drop-shadow-sm"
              hoverColor="text-white drop-shadow"
              stagger={0.018}
            >
              {title}
            </TextReveal>
          </h3>
          {/* Descripción con fade-in */}
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0.7, y: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                y: isHovered ? 0 : 0,
              }}
              transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              className="text-[11px] text-indigo-50/80 leading-tight line-clamp-2 mt-0"
            >
              {description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Overlay hover */}
      <motion.div
        className="absolute inset-0 bg-indigo-500/10 pointer-events-none rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
    </motion.div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 rounded-xl"
      aria-label={`Ver proyecto ${title}`}
    >
      {cardContent}
    </a>
  ) : (
    <div className="hover:cursor-pointer">{cardContent}</div>
  );
};

export default ZoomBlurCard;
