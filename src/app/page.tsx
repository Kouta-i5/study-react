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
import { Home } from "@/app/components/Home";
import { PersonalProject } from "@/app/components/PersonalProject";
import { LabProject } from "@/app/components/LabProject";
import { Qualifications } from "@/app/components/Qualifications"

export default function Page() {
  return (
    <ThemeProvider>
      <main
        className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24"
        role="main"
        id="main-content"
      >
        <Header />
        <Home />
        <Career />
        <TechSkill />
        <Qualifications />
        <LabProject/>
        <PersonalProject  />
      </main>
    </ThemeProvider>
  );
}
  
