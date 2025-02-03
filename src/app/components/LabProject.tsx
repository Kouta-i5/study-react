import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { CardProps, CardBodyProps, CardFooterProps } from "@material-tailwind/react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

const projectsData: ProjectCardProps[] = [
  {
    title: "ポートフォリオウェブサイト",
    description: "Next.js、TypeScript、Tailwind CSSを使用して作成した個人ポートフォリオサイト。レスポンシブデザインと最新のウェブ技術を実装。",
    image: "/portfolio.png",
    link: "https://github.com/yourusername/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"]
  },
  {
    title: "AI チャットボット",
    description: "OpenAI APIを活用したチャットボットアプリケーション。リアルタイムの会話機能とメッセージ履歴管理を実装。",
    image: "/chatbot.png",
    link: "https://github.com/yourusername/ai-chatbot",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"]
  },
  {
    title: "タスク管理アプリ",
    description: "ドラッグ＆ドロップ機能を備えたモダンなタスク管理アプリ。ユーザー認証とリアルタイムデータ同期を実装。",
    image: "/task-manager.png",
    link: "https://github.com/yourusername/task-manager",
    tags: ["React", "Firebase", "TypeScript", "Material-UI"]
  }
];

export function LabProject() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">研究室での取り組み</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>     
  )
}

export function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden" variant="filled" {...({} as any)}>
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} project thumbnail`}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardBody className="p-4" {...({} as any)}>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardBody>
      <CardFooter className="p-4 pt-0" {...({} as any)}>
        {link && (
          <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}