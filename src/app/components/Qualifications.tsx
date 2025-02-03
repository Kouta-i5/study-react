import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "G検定",
    items: "2024年3月"
  },
  {
    title: "ITパスポート",
    items: "2024年8月"
  },
];


export function Qualifications() {
  return (
    <div id="qualifications-section" className="py-20">
      <div className="mb-20">
        <Typography variant="h2" className="text-3xl font-bold mb-8 text-center" {...({} as any)}>
          資格
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualifications.map((qualification, index) => (
            <motion.div
              key={qualification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6" {...({} as any)}>
                <Typography variant="h5" className="mb-4" {...({} as any)}>{qualification.title}</Typography>
                <Typography className="text-gray-700" {...({} as any)}>
                  {qualification.items}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 