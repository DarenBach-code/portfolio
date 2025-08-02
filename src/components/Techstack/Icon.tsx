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
        "openjdk",
        "react",
        "flutter",
        "android",
        "html5",
        "css",
        "googlecloud", 
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
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
        "androidstudio",
        "sonar",
        "figma",
    ];

    // Convert slugs to CDN image URLs with colors
    const imageArray = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}.svg`
    );

    return (
        <>
            <div className="myclass flex size-full max-w-lg items-center justify-center overflow-hidden bg-inherit">
                <IconCloud 
                    imageArray={imageArray} 
                />
            </div>
        </>
    )
}

export default Icon