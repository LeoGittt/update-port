'use client';

import { InfiniteSlider } from '@/components/core/infinite-slider';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiPython, 
  SiSpring,
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiGit, 
  SiRedux, 
  SiExpress, 
  SiFigma, 
  SiWordpress,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

export function TechnologiesSlider() {
  const technologies = [
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: '#ffffff'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6'
    },
    {
      name: 'Python',
      icon: SiPython,
      color: '#3776AB'
    },
    // {
    //   name: 'Java',
    //   icon: SiSpring,
    //   color: '#6DB33F'
    // },
    {
      name: 'HTML',
      icon: SiHtml5,
      color: '#E34F26'
    },
    {
      name: 'CSS',
      icon: SiCss3,
      color: '#1572B6'
    },
    {
      name: 'Tailwind',
      icon: SiTailwindcss,
      color: '#06B6D4'
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933'
    },
    {
      name: 'Express',
      icon: SiExpress,
      color: '#ffffff'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248'
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: '#336791'
    },
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032'
    },
    {
      name: 'Redux',
      icon: SiRedux,
      color: '#764ABC'
    },
    {
      name: 'Figma',
      icon: SiFigma,
      color: '#F24E1E'
    },
    {
      name: 'WordPress',
      icon: SiWordpress,
      color: '#21759B'
    }
  ];

  return (
    <div className="w-full py-8 mb-8 overflow-hidden">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold  text-white mb-2">
          Stack Tecnológico
        </h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Tecnologías que domino
        </p>
      </div>
      
      <div className="relative">
        <InfiniteSlider 
          gap={40} 
          reverse 
          duration={25}
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            
            // Verificar que el ícono existe
            if (!IconComponent) {
              console.error(`Icon not found for ${tech.name}`);
              return null;
            }
            
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <IconComponent 
                  size={48} 
                  style={{ color: tech.color }}
                />
                
                <span className="text-xs text-gray-500 font-normal">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </InfiniteSlider>
        
        {/* Progressive Blur Effects */}
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 left-0 h-full w-[150px]'
          direction='left'
          blurIntensity={1}
        />
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 right-0 h-full w-[150px]'
          direction='right'
          blurIntensity={1}
        />
      </div>
    </div>
  );
}
