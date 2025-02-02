import { motion } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

export function HomeSection() {
  const titleWords = ["私の", "ポートフォリオ"];

  const AnimatedTitle = () => (
    <Typography variant="h1" className="text-4xl font-bold mb-4" {...({} as any)}>
      {titleWords.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </Typography>
  );

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between py-20">
      <div className="md:w-1/2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedTitle />
          <Typography className="text-gray-700 mb-6" {...({} as any)}>
            エンジニアを目指す学生です。技術への情熱と学習意欲を持って日々成長しています。
          </Typography>
        </motion.div>
      </div>
      
      <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-80 w-full rounded-lg overflow-hidden"
        >
          <Image
            src="/images/rabbit.png"
            alt="プロフィール画像"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}