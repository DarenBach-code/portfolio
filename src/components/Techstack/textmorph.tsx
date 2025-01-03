import MorphingText from "@/components/ui/morphing-text";
import React from 'react'


const texts = [
    "React",
    "Next",
    "Nuxt",
    "MongoDB",
    "Vue",
    "Typescript",
    "Python",
    "Go",
    "Javascript",
    "Tailwind",
    "Express",
    "Java"
  ];


const textmorph = () => {
  return (
    <>
        <MorphingText texts={texts} />
    </>
  )
}

export default textmorph