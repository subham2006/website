import PageHeader from "@/components/page-header"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  // const projects = [
  //   {
  //     title: "Athena",
  //     description:
  //       "Interactive learning platform that allows users to add lecture links, which get ingested into AWS Bedrock Knowledge Bases for Retrieval-Augmented Generation (RAG).",
  //     technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Supabase", "AWS S3", "AWS Bedrock"],
  //     link: "https://lnkd.in/gTWmXuYu",
  //   },
  //   {
  //     title: "Offroad Vehicle Renting App",
  //     description: "Creating an app for a startup to facilitate offroad vehicle rentals.",
  //     technologies: ["React Native", "Firebase", "HTML/CSS"],
  //     link: "#",
  //   },
  //   {
  //     title: "Portfolio Website",
  //     description: "Personal portfolio website with interactive particle animations.",
  //     technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  //     link: "#",
  //   },
  // ]

  return (
    <main className="min-h-screen pt-16 pb-8">
      <PageHeader title="Projects" />

      <div className="container mx-auto px-4 mt-8">
        <div className="flex items-center justify-center min-h-[50vh]">
          <h2 className="text-2xl text-[#45BBF1] font-semibold">Coming Soon</h2>
        </div>
        {/* Original grid layout preserved in comments
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-black border border-[#45BBF1]/20 hover:border-[#45BBF1]/50 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-[#45BBF1]">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-[#45BBF1]/10 text-[#45BBF1] px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#45BBF1] hover:underline"
                >
                  View Project →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        */}
      </div>
    </main>
  )
}

