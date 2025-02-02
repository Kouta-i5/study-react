import { useState, useRef, useEffect } from "react";
import { Navbar,Typography } from "@material-tailwind/react";

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const menuItems = [
    { id: 'home', label: 'Home', sectionId: 'home-section' },
    { id: 'skills', label: 'Skills', sectionId: 'skills-section' },
    { id: 'qualifications', label: 'Qualifications', sectionId: 'qualifications-section' },
    { id: 'lab-projects', label: 'LabProjects', sectionId: 'lab-projects-section' },
    { id: 'personal-projects', label: 'PersonalProjects', sectionId: 'personal-projects-section' }
  ];

  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (hoveredIndex !== null && tabRefs.current[hoveredIndex]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[hoveredIndex]!;
      setHoverStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [hoveredIndex]);

  return (
    <Navbar className="max-w-full px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200" {...({} as any)}>
      <div className="flex items-center justify-center text-blue-gray-900 max-w-7xl mx-auto w-full">
        <div className="relative">
          <div
            className="absolute h-[30px] transition-all duration-300 ease-out bg-gray-100 rounded-[6px] flex items-center"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />
          <div className="relative flex space-x-[6px] items-center">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) {
                    tabRefs.current[index] = el;
                  }
                }}
                className="px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] text-gray-700 hover:text-gray-900"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleScroll(item.sectionId)}
              >
                <div className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Navbar>
  );
}