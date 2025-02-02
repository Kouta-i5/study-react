'use client'
import {
  Button,
  Card,
  Typography,
  Navbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from 'react';
import { ThemeProvider } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Career } from "@/app/components/Career";
import { TechSkill } from "@/app/components/TechSkill";
import { Header } from "@/app/components/Header";
import { HomeSection } from "@/app/components/Home";
import { PersonalProject } from "@/app/components/PersonalProject";
import { LabProject } from "@/app/components/LabProject";
import { Qualifications } from "@/app/components/Qualifications";
import { FloatingPaths } from "@/app/styles/Flow";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <ThemeProvider>
      <main>
        <Header />
        <HomeSection />
        <TechSkill />
        <Career />
        <Qualifications />
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PersonalProject
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <PersonalProject
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <LabProject
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <LabProject
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
  
