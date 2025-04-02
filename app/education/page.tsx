import PageHeader from "@/components/page-header"

export default function EducationPage() {
  const education = [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science, Electrical Engineering & Computer Science",
      year: "2027",
      semesters: [
        {
          term: "Fall 2023",
          courses: [
            "CS 61A - Structure and Interpretation of Computer Programs",
            "EECS 16A - Designing Information Devices and Systems I",
          ],
        },
        {
          term: "Spring 2024",
          courses: [
            "CS 61B - Data Structures and Algorithms",
            "EECS 16B - Designing Information Devices and Systems II",
          ],
        },
        {
          term: "Fall 2024",
          courses: [
            "CS 188 - Artificial Intelligence",
            "CS 170 - Efficient Algorithms and Intractable Problems",
            "CS 61C - Machine Structures",
          ],
        },
        {
          term: "Spring 2025",
          courses: [
            "CS 186 - Database Systems",
            "EECS 151/LA - Digital Design and Integrated Circuits",
            "EE 105 - Microelectronic Devices and Circuits",
          ],
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen pt-16 pb-8">
      <PageHeader title="Education" />

      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="border border-[#45BBF1]/20 rounded-lg p-6 bg-black">
              <h3 className="text-2xl font-semibold text-[#45BBF1]">{edu.school}</h3>
              <p className="text-lg text-gray-300 mt-1">{edu.degree}</p>
              <p className="text-sm text-gray-400 mt-1 mb-6">Graduating: {edu.year}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {edu.semesters.map((semester, semIndex) => (
                  <div key={semIndex} className="bg-black/50 border border-[#45BBF1]/10 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-[#45BBF1] mb-3">{semester.term}</h4>
                    <ul className="space-y-2">
                      {semester.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="text-gray-300 flex items-start">
                          <span className="text-[#45BBF1] mr-2">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

