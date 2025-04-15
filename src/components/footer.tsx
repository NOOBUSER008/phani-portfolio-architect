
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gradient">Phani Mathangi</h2>
            <p className="mt-2 text-muted-foreground">Senior DevOps Engineer</p>
            <div className="mt-4 flex flex-col space-y-2 text-sm">
              <a href="https://maps.google.com/?q=India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India</span>
              </a>
              <a href="tel:+917989009317" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 7989009317</span>
              </a>
              <a href="mailto:phanimathangi98@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                <span>phanimathangi98@gmail.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Connect With Me</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://linkedin.com/in/phani-mathangi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:phanimathangi98@gmail.com"
                className="text-muted-foreground hover:text-red-600 dark:hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Phani Mathangi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
