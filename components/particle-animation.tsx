"use client"

import { useRef, useEffect, useState } from "react"

interface ParticleAnimationProps {
  text: string
  fullScreen?: boolean
  height?: number
}

export default function ParticleAnimation({ text, fullScreen = false, height = 200 }: ParticleAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      life: number
    }[] = []

    let textImageData: ImageData | null = null

    const updateCanvasSize = () => {
      const width = window.innerWidth || 1000
      const calculatedHeight = fullScreen ? window.innerHeight || 800 : height || 200
      canvas.width = width
      canvas.height = calculatedHeight
      setIsMobile(width < 768) // Set mobile breakpoint
    }

    updateCanvasSize()

    function createTextImage() {
      if (!ctx || !canvas) return 0

      // Ensure canvas has proper dimensions
      if (canvas.width === 0 || canvas.height === 0) {
        canvas.width = window.innerWidth || 1000
        canvas.height = fullScreen ? window.innerHeight || 800 : height || 200
      }

      ctx.fillStyle = "#99b2dd" // NVIDIA green color
      ctx.save()

      const fontSize = isMobile ? (fullScreen ? 60 : 30) : fullScreen ? 100 : 50
      ctx.font = `bold ${fontSize}px 'Arial', sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Draw the text
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)

      ctx.restore()

      // Get image data only if canvas has valid dimensions
      if (canvas.width > 0 && canvas.height > 0) {
        textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      return fontSize / 100 // Return scale factor
    }

    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        const index = (y * canvas.width + x) * 4
        if (index >= 0 && index < data.length && data[index + 3] > 128) {
          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 2 + 1,
            color: "#3FA7D6",
            scatteredColor: "#45BBF1",
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    function createInitialParticles(scale: number) {
      // Adjust particle count based on canvas size and whether it's fullscreen
      const baseParticleCount = fullScreen ? 7000 : 2000
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))

      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale)
        if (particle) particles.push(particle)
      }
    }

    // Create background dots pattern
    function createBackgroundDots() {
      if (!ctx || !canvas) return []

      const dots = []
      const spacing = isMobile ? 20 : 30
      const size = isMobile ? 1 : 1.5

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Add some randomness to the grid
          const offsetX = Math.random() * 5 - 2.5
          const offsetY = Math.random() * 5 - 2.5

          dots.push({
            x: x + offsetX,
            y: y + offsetY,
            size: size,
          })
        }
      }

      return dots
    }

    const backgroundDots = createBackgroundDots()

    let animationFrameId: number

    function animate(scale: number) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw background dots
      ctx.fillStyle = "#9ade00"
      ctx.globalAlpha = 0.2
      for (const dot of backgroundDots) {
        ctx.fillRect(dot.x, dot.y, dot.size, dot.size)
      }
      ctx.globalAlpha = 1.0

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = fullScreen ? 240 : 120

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          // Stronger repulsion effect
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * (fullScreen ? 80 : 40)
          const moveY = Math.sin(angle) * force * (fullScreen ? 80 : 40)
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
        } else {
          // Faster return to original position
          p.x += (p.baseX - p.x) * 0.15
          p.y += (p.baseY - p.y) * 0.15
          ctx.fillStyle = p.color
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = fullScreen ? 7000 : 2000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)),
      )
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile, fullScreen, text, height])

  return (
    <canvas
      ref={canvasRef}
      className="w-full touch-none"
      style={{ height: fullScreen ? "100vh" : `${height}px` }}
      aria-label={`Interactive particle effect with ${text} text`}
    />
  )
}

