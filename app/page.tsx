"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Confetti from "react-confetti" 

export default function Home() {
  const [step, setStep] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
   
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize() // Set initial dimensions
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const onboardingSteps = [
    {
      character: "/characters/character-1.png",
      message: "Heyyyyy, pretty girl.",
      buttonText: "Next",
      alt: "Cute character waving",
    },
    {
       character: "/characters/character-2.png",
      message:
        "Happy Birthday, Mari! May your APIs always be RESTful and your databases never crash. Wishing you a day as perfectly optimized as your backend code!",
      buttonText: "Continue",
      alt: "Cute character with a birthday cake",
    },
    {
       character: "/characters/character-3.png",
      message:
        "I HAVE A JOKEEEEE!!! Why did the backend developer break up with the frontend developer? Because they had too many unresolved merge conflicts!",
      buttonText: "Continue!",
      alt: "Cute character laughing",
    },
    {
       character: "/characters/character-4.png",
      message:
        "May your life be filled with as much joy as a successful deployment on a Friday afternoon. And may your debugging sessions be short and sweet!",
      buttonText: "Almost there...",
      alt: "Cute character thinking",
    },
    {
       character: "/characters/character-5.png",
      message:
        "Here's to a year of robust codes, scalable architectures, and zero production bugs! You're the best, Mari!",
      buttonText: "See your surprise!",
      alt: "Cute character with a gift",
    },
    {
      character: "/mari.jpg", 
      message: "Happy Birthday, Mariiiii!!",
      buttonText: "Visit Twitter!",
      alt: "Mari's picture",
      isLastStep: true,
      twitterUrl: "https://twitter.com/tech_girlllll", 
    },
  ]

  const currentStep = onboardingSteps[step]

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1)
      if (step + 1 === onboardingSteps.length - 1) {
       
        setShowConfetti(true)
      }
    }

  }

  useEffect(() => {
    // Attempt to play music on component mount
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      audio.volume = 0.3
      audio.play().catch((error) => {
        console.log("Autoplay prevented:", error)
        
      })
    }
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-pink-200 p-4 text-center">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={200}
          recycle={false} 
          colors={["#FFC0CB", "#FFD700", "#ADFF2F", "#87CEEB", "#DA70D6"]} // Pink, Gold, GreenYellow, SkyBlue, Orchid
        />
      )}

      <audio id="background-music" src="/The One.mp3" loop autoPlay className="hidden" />
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        <Image
          src={currentStep.character || "/placeholder.svg"}
          alt={currentStep.alt}
          width={200}
          height={200}
          className="w-48 h-48 object-contain rounded-4xl"
          priority={true} 
        />
        <h1 className="text-xl md:text-3xl font-bold text-white drop-shadow-sm max-w-md leading-tight">
          {currentStep.message}
        </h1>
        {currentStep.isLastStep ? (
          <a
            href={currentStep.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs py-6 text-xl font-semibold rounded-full bg-white text-pink-500 hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center justify-center"
          >
            {currentStep.buttonText}
          </a>
        ) : (
          <Button
            onClick={handleNext}
            className="w-full max-w-xs py-6 text-xl font-semibold rounded-full bg-white text-pink-500 hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            {currentStep.buttonText}
          </Button>
        )}
      </div>
    </div>
  )
}
