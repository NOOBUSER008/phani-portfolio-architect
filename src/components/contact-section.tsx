
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Send, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/site-config";

export default function ContactSection() {
  // If the section is disabled in config, don't render anything
  if (!siteConfig.sections.showContact) return null;
  
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);
    
    // This would be replaced with your actual email service integration
    try {
      // Simulate sending email - in a real app, you'd use a service like EmailJS, Resend, etc.
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Email body for mailto link as fallback
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
      `;
      
      // Open the user's email client as a fallback method
      window.open(`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(emailBody)}`);
      
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success state after some time
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = siteConfig.contactSection;

  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-50/50 dark:bg-blue-900/10">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">{contactInfo.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            {contactInfo.subtitle}
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
            <h3 className="heading-sm mb-6 text-gradient">{contactInfo.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {contactInfo.formLabels.name}
                  </label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    className="border-blue-200 dark:border-blue-900" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {contactInfo.formLabels.email}
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Your email" 
                    className="border-blue-200 dark:border-blue-900" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {contactInfo.formLabels.subject}
                </label>
                <Input 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject" 
                  className="border-blue-200 dark:border-blue-900" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {contactInfo.formLabels.message}
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message" 
                  rows={5} 
                  className="border-blue-200 dark:border-blue-900" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSending || isSuccess}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group transition-all"
              >
                {isSuccess ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    <span>Message Sent</span>
                  </>
                ) : (
                  <>
                    <span>{isSending ? "Sending..." : contactInfo.formLabels.submitButton}</span>
                    <Send className={`ml-2 h-4 w-4 transition-transform ${!isSending && "group-hover:translate-x-1"}`} />
                  </>
                )}
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
              <h3 className="heading-sm mb-6 text-gradient">{contactInfo.contactInfo.title}</h3>
              <div className="space-y-6">
                <motion.a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-4 transition-all hover:text-primary"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                  </div>
                </motion.a>
                <motion.a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 transition-all hover:text-primary"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                  </div>
                </motion.a>
                <motion.a 
                  href={`https://${siteConfig.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 transition-all hover:text-primary"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-muted-foreground">{siteConfig.contact.linkedin}</p>
                  </div>
                </motion.a>
                <motion.a 
                  href={`https://${siteConfig.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 transition-all hover:text-primary"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Website</h4>
                    <p className="text-muted-foreground">{siteConfig.contact.website}</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Let's Connect Card - Fixed position to avoid collision */}
            <motion.div 
              className="mt-12 lg:mt-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="connect-card">
                <h4 className="font-semibold text-xl mb-2 text-gradient">{contactInfo.connectionCard.title}</h4>
                <p className="text-muted-foreground mb-4">
                  {contactInfo.connectionCard.description}
                </p>
                <Button variant="outline" asChild className="w-full bg-gradient-to-r hover:bg-gradient-to-r from-transparent to-transparent hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 border border-blue-300 dark:border-blue-800">
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center justify-center gap-2">
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
