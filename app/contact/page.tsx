import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 pb-8">
      <PageHeader title="Contact" />

      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-[#45BBF1] mb-4">Get In Touch</h2>
              <p className="text-gray-300 mb-6">
                Feel free to reach out if you have any questions!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#45BBF1]/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#45BBF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:subham.mitra@berkeley.edu" className="text-[#45BBF1] hover:underline">
                      subham.mitra [at] berkeley.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#45BBF1]/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#45BBF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/subham--mitra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#45BBF1] hover:underline"
                    >
                      linkedin.com/in/subham--mitra
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#45BBF1]/10 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#45BBF1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a
                      href="https://github.com/subham-mitra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#45BBF1] hover:underline"
                    >
                      github.com/subham-mitra
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#45BBF1] mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-black border-[#45BBF1]/20 focus:border-[#45BBF1] focus:ring-[#45BBF1]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-black border-[#45BBF1]/20 focus:border-[#45BBF1] focus:ring-[#45BBF1]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-black border-[#45BBF1]/20 focus:border-[#45BBF1] focus:ring-[#45BBF1]"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="bg-[#45BBF1] text-black hover:bg-[#c4ff00]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

