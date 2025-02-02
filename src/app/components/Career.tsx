import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FloatingPaths } from "../styles/Flow";

const experiences = [
  {
    period: "2024年10月〜現在",
    company: "テッシュエンジニアリング研究室　ICT班",
    position: "AIに興味を持ち、医療課題に対してAIやソフトウエアでアプローチしている班に所属",
    description: [
      "プログラミングは初心者ながら、積極的に様々な開発を行い、研究室の開発以外にも個人でも開発を行っている。",
    ]
  },
  {
    period: "2021年4月",
    company: "同志社大学　生命医科学部　医工学科",
    position: "高校時代に医学と工学の融合分野である「医工学」に興味があり、医工学科に入学。",
    description: [
      "CAD (Computer Aided Design) を使用した3Dモデリング技術を使用して人工心臓のポンプを設計",
    ]
  },
  {
    period: "2015年 - 2021年",
    company: "東山中学校・東山高等学校",
    position: "中高6年間を男子校で過ごす。",
    description: [
      "中学時代はバスケットボール部に所属。",
      "高校時代は担任が数学研究会の顧問であり、数学が好きであったので数学研究会に所属。",
    ]
  }
];

export function Career() {
  return (
    <div className="py-20 max-w-3xl mx-auto">
      <Typography variant="h2" className="text-3xl font-bold mb-12 text-center" {...({} as any)}>
        Career
      </Typography>
      
      <div className="relative">
        <FloatingPaths position={10} />
        <FloatingPaths position={-10} />
        {/* タイムラインの縦線 */}
        <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-blue-100"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* タイムラインのドット */}
              <div className={`absolute left-0 w-8 h-8 rounded-full border-2 
                ${index === 0 ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'}`}>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <Typography className="text-gray-600 mb-1" {...({} as any)}>
                  {exp.period}
                </Typography>
                <Typography variant="h5" className="font-bold mb-2" {...({} as any)}>
                  {exp.company}
                </Typography>
                {exp.position && (
                  <Typography className="text-gray-700 mb-2" {...({} as any)}>
                    {exp.position}
                  </Typography>
                )}
                <Typography className="text-gray-600" {...({} as any)}>
                  {exp.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 