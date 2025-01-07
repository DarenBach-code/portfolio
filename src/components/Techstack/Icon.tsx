'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


const IconCloud = dynamic(() => import('@/components/ui/icon-cloud'), { ssr: false });

const Icon = () => {


    useEffect(() => {
        const isMobile: boolean = /Mobi|Android/i.test(window.navigator.userAgent);
    
        if (isMobile) {
          // Select the canvas element used by IconCloud
          const canvas = document.querySelector('.myclass') as HTMLElement | null;
          if (canvas) {
            // Disable drag events
            canvas.style.pointerEvents = 'none';
          }
        }
      }, []);






    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
      ];

  return (
    <>
        <div className="myclass flex size-full max-w-lg items-center justify-center overflow-hidden bg-inherit">
            <IconCloud iconSlugs={slugs}/>
        </div>
    </>
  )
}

export default Icon