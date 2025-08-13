"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, Download,  Database, Server, Code, Cloud } from "lucide-react"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { useRouter } from "next/navigation"

export default function Portfolio() {
  const router = useRouter()
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="max-w-7xl   mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-white">{"def "}</span>
            <span className="text-blue-400">Mari</span>
            <span className="text-white">{"()"}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-3 md:p-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl bg-gray-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div {...fadeInUp}>
                <p className="text-gray-400 text-lg tracking-widest mb-4">h e l l o !</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  I'm <span className="text-white">Maria</span>
                </h1>
                <p className="text-blue-400 text-sm md:text-2xl tracking-wider"> b a c k e n d d e v e l o p e r</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <Button onClick={() => router.push("/mari.pdf")} className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button onClick={() => window.open("https://github.com/NnannaMari09033", "_blank")} variant="ghost" size="icon" className="text-white hover:text-blue-400">
                  <Github className="w-5 h-5" />
                </Button>
                <Button onClick={() => window.open("https://www.linkedin.com/in/maria-nnanna-53ab8b2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "_blank")} variant="ghost" size="icon" className="text-white hover:text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="  bg-gradient-to-br from-blue-500/20 to-gray-600/20 rounded-full blur-2xl"></div>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  className=" overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="Mari"
                  width={400}
                  height={400}
                  className="rounded-xl  relative z-10  transition-all duration-500"
                />
                </Tilt>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-8 text-center">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
               I’m Nnanna Maria, a backend developer who builds scalable, reliable systems using Python, Django, PostgreSQL, and Docker. I focus on crafting clean architectures, efficient databases, and well-structured APIs that power real-world applications. 
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
               Beyond development, I’m a technical writer who turns complex backend topics into clear, actionable content for developers and tech enthusiasts. I love sharing knowledge through articles, tutorials, contributions, and helping others navigate backend development with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 text-center">
            Work <span className="text-blue-400">Experience</span>
          </motion.h2>

          <motion.div variants={staggerContainer} animate="animate" className="space-y-8">
            {[
              {
                title: "Backend Developer",
                company: "Nuwell AI",
                period: "March 2025 - Present",
                description:
                  "Deployed and maintained backend services on Linux-based servers.  Integrated PostgreSQL database with optimized queries for faster data retrieval, Worked closely with frontend and data science teams to deliver high-performance features.",
                technologies: ["Python Django", "PostgreSQL", "Docker", "Redis"],
              },
              // {
              //   title: "Backend Developer",
              //   company: "StartupXYZ",
              //   period: "2020 - 2022",
              //   description:
              //     "Built RESTful APIs and GraphQL endpoints. Optimized database queries resulting in 40% performance improvement.",
              //   technologies: ["Python", "Django", "MongoDB", "GraphQL", "Kubernetes"],
              // },
              {
                title: "Backend Intern",
                company: "Univelcity",
                period: "June - August 2024",
                description:
                  "Developed web applications and learned best practices in software development. Contributed to multiple client projects.",
                technologies: ["Python", "Git", "Linux"],
              },
            ].map((job, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Taskverse (🚧)",
                description:
                  " A backend only scalable task orchestration engine, designed to manage, monitor, schedule and track background jobs at a scale.",
                technologies: ["Python", "Postgres", "Docker", "Django", "Redis"],
                github: "https://github.com/NnannaMari09033/TaskVerse",
                demo: "#",
              },
              {
                title: "Local community market API",
                description:
                  "A RESTful API for a local community market platform, featuring user authentication, product listings, and search functionality.",
                technologies: ["Python", "FastAPI", "WebSocket", "MongoDB"],
                github: "https://github.com/NnannaMari09033/localcommunitymarketAPI",
                demo: "#",
              },
              {
                title: "School API",
                description:
                  "A simple school API using GraphQL. in one entry point to manage school data.",
                technologies: ["Node.js", "ClickHouse", "GraphQL", "Docker"],
                github: "https://github.com/NnannaMari09033/school",
                demo: "#",
              },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 p-6 h-full hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => window.open(project.github, "_blank")} variant="ghost" size="sm" className="text-blue-400 hover:text-blue-50 hover:bg-blue-600">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {/* No demo yet */}
                    {/* <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button> */}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 text-center">
            Technical <span className="text-blue-400">Skills</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                category: "Languages",
                icon: <Code className="w-8 h-8 text-blue-400" />,
                skills: ["Python"],
              },
              {
                category: "Frameworks",
                icon: <Server className="w-8 h-8 text-blue-400" />,
                skills: [ "Django"],
              },
              {
                category: "Databases",
                icon: <Database className="w-8 h-8 text-blue-400" />,
                skills: ["PostgreSQL","Redis", "MySQL"],
              },
              {
                category: "DevOps & Cloud",
                icon: <Cloud className="w-8 h-8 text-blue-400" />,
                skills: ["Docker",  "Linux"],
              },
            ].map((skillGroup, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 p-6 text-center h-full">
                  <div className="flex justify-center mb-4">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <div key={skill} className="text-gray-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-8">
              Let's <span className="text-blue-400">Connect</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Mail className="w-5 h-5 mr-2" />
                 nnannamari@gmail.com
                </Button>
                <div className="flex gap-4">
                  <Button onClick={() => window.open("https://github.com/NnannaMari09033", "_blank")} variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <Github className="w-6 h-6" />
                  </Button>
                  <Button onClick={() => window.open("https://x.com/tech_girlll?s=21", "_blank")} variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <Twitter className="w-6 h-6" />
                  </Button>
                  <Button onClick={() => window.open("https://www.linkedin.com/in/maria-nnanna-53ab8b2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "_blank")} variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <Linkedin className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Mari Backend Developer.</p>
        </div>
      </footer>
    </div>
  )
}
