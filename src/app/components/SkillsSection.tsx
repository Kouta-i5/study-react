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

export function SkillsSection() {
  return (
    <div className="py-20">
      <Typography variant="h2" className="text-3xl font-bold mb-8 text-center">
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
  );
} 