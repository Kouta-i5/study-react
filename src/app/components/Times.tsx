import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "フロントエンド",
    items: "React, Next.js, TypeScript, Tailwind CSS"
  },
  {
    title: "バックエンド",
    items: "Node.js, Express, Python, SQL"
  },
  {
    title: "その他",
    items: "Git, Docker, AWS"
  }
];

const experiences = [
  {
    period: "2020年 - 現在",
    company: "株式会社XXX",
    position: "フロントエンドエンジニア",
    description: "React/Next.jsを用いたWebアプリケーション開発"
  },
  {
    period: "2018年 - 2020年",
    company: "株式会社YYY",
    position: "バックエンドエンジニア",
    description: "Node.jsとExpressを使用したAPIの設計・開発"
  },
  {
    period: "2016年 - 2018年",
    company: "株式会社ZZZ",
    position: "システムエンジニア",
    description: "基幹システムの保守・運用"
  }
];

export function Times() {
  return (
    <div className="py-20">
      <div className="mb-20">
        <Typography variant="h2" className="text-3xl font-bold mb-8 text-center">
          経歴
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <Typography variant="h5" className="mb-4">{skill.title}</Typography>
                <Typography className="text-gray-700">
                  {skill.items}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <Typography variant="h2" className="text-3xl font-bold mb-8 text-center">
          経歴
        </Typography>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <Typography variant="h6" color="blue" className="mb-2">
                  {exp.period}
                </Typography>
                <Typography variant="h5" className="mb-2">
                  {exp.company}
                </Typography>
                <Typography variant="lead" className="mb-2">
                  {exp.position}
                </Typography>
                <Typography className="text-gray-700">
                  {exp.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 