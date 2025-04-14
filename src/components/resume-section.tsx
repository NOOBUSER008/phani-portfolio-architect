
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  // Replace this with your actual resume file path
  const resumePath = "/resume.pdf";
  
  return (
    <section id="resume" className="py-16 md:py-24 bg-primary/5">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Download my resume to learn more about my qualifications and experience
          </p>
        </div>
        
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <FileText className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Phani Mathangi</h3>
            <p className="text-muted-foreground mb-6">Senior DevOps Engineer</p>
            
            <Button 
              size="lg" 
              className="flex items-center gap-2"
              onClick={() => {
                // You can replace this with logic to track downloads
                window.open(resumePath, '_blank');
              }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
