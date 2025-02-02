import { useState, useRef, useEffect } from "react";
import { Navbar,Typography } from "@material-tailwind/react";

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const menuItems = ["スキル", "ログイン", "新規登録"] || [];

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  return (
    <Navbar className="max-w-full px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="flex items-center justify-between text-blue-gray-900 max-w-7xl mx-auto w-full">
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
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                className="px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] text-gray-700 hover:text-gray-900"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (index === 0) {
                    const skillsSection = document.querySelector('#skills-section');
                    skillsSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Navbar>
  );
}