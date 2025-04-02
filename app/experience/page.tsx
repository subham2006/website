import PageHeader from "@/components/page-header"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Oracle",
      type: "Internship",
      period: "Jan 2025 - Present",
      location: "Redwood City, California, United States",
      description: "",
    },
    {
      title: "MLOps Engineer",
      company: "Sensigo",
      type: "Contract",
      period: "Jan 2025 - Present",
      location: "San Francisco, California, United States",
      description: "",
    },
    {
      title: "Vice President of Projects",
      company: "MDB",
      period: "Jan 2025 - Present",
      location: "Berkeley, California, United States",
      description: "",
    },
    {
      title: "Research Assistant",
      company: "ICSI - International Computer Science Institute",
      period: "Aug 2024 - Feb 2025",
      location: "Berkeley, California, United States · Hybrid",
      description: "Advised by Dr. Alisa Frik",
    },
  ]

  return (
    <main className="min-h-screen pt-16 pb-8">
      <PageHeader title="Experience" />

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black border border-[#45BBF1]/20 rounded-lg p-6 hover:border-[#45BBF1]/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#45BBF1]/10 flex items-center justify-center mr-4 text-[#45BBF1] text-xl font-bold">
                  {exp.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#45BBF1]">{exp.title}</h3>
                  <div className="flex items-center text-gray-300">
                    <span className="font-medium">{exp.company}</span>
                    {exp.type && <span className="mx-2">·</span>}
                    {exp.type && <span className="text-gray-400">{exp.type}</span>}
                  </div>
                </div>
              </div>

              <div className="ml-16">
                <p className="text-sm text-gray-400">{exp.period}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.location}</p>
                {exp.description && (
                  <p className="text-gray-300 border-l-2 border-[#45BBF1]/30 pl-3">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

