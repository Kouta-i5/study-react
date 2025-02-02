import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "フロントエンド",
    items: "JavaScript, TypeScript, React, Next.js, React Native, Tailwind CSS,MUI"
  },
  {
    title: "バックエンド",
    items: "Node.js, Python, SQL"
  },
  {
    title: "DevOps",
    items: "GitHub,Hugging Face, Docker, AWS"
  }
];

export function TechSkill() {
  return (
    <div className="py-20">
      <Typography 
        variant="h2" 
        className="text-3xl font-bold mb-8 text-center" 
        {...({} as any)}
      >
        技術スキル
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6" {...({} as any)}>
              <Typography variant="h5" className="mb-4" {...({} as any)}>{skill.title}</Typography>
              <Typography className="text-gray-700" {...({} as any)}>
                {skill.items}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 