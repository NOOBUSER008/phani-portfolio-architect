
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-50/50 dark:bg-blue-900/10">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Feel free to reach out to discuss opportunities or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-card devops-card shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-sm mb-6 text-gradient">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" className="border-blue-200 dark:border-blue-900" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="border-blue-200 dark:border-blue-900" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" className="border-blue-200 dark:border-blue-900" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} className="border-blue-200 dark:border-blue-900" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                <span>Send Message</span>
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="heading-sm mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 7989009317</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">phanimathangi98@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin/phani-mathangi</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Website</h4>
                    <p className="text-muted-foreground">phani.mathangi.in</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Let's Connect Card - Fixed to avoid collision */}
            <motion.div 
              className="mt-8 lg:mt-0"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="connect-card">
                <h4 className="font-semibold text-xl mb-2 text-gradient">Let's Connect</h4>
                <p className="text-muted-foreground mb-4">
                  I'm always open to discussing new projects, opportunities, or partnerships.
                </p>
                <Button variant="outline" asChild className="w-full bg-gradient-to-r hover:bg-gradient-to-r from-transparent to-transparent hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 border border-blue-300 dark:border-blue-800">
                  <a href="mailto:phanimathangi98@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Me</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
