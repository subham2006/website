import ParticleAnimation from "./particle-animation"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative w-full">
      <div className="h-40">
        <ParticleAnimation text={title} height={160} />
      </div>
      {/* Remove the text overlay */}
    </div>
  )
}

