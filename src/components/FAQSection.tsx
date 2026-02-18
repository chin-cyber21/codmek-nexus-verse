import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Codmek Softech?",
    answer:
      "Codmek Softech is an AI-native technology company headquartered in Jaipur, India. We operate across five verticals — Research, Studio, Learn, Solutions, and Nexus — to deliver cutting-edge artificial intelligence products, creative design, education programs, and enterprise solutions.",
  },
  {
    question: "What services does Codmek offer?",
    answer:
      "We offer AI research and development, creative design and branding through Codmek Studio, AI education and mentorship via Codmek Learn, enterprise AI solutions and automation through Codmek Solutions, and strategic partnerships via Codmek Nexus.",
  },
  {
    question: "Does Codmek work with startups or only enterprises?",
    answer:
      "We work with organizations of all sizes — from early-stage startups to large enterprises. Our Solutions division tailors AI systems and automation to fit your scale, while our Nexus platform connects you with the right partners and resources.",
  },
  {
    question: "What technologies does Codmek specialize in?",
    answer:
      "Our expertise spans machine learning, deep learning, natural language processing, computer vision, generative AI, and neural architecture design. We also build modern web applications, design systems, and full-stack platforms.",
  },
  {
    question: "How can I collaborate or partner with Codmek?",
    answer:
      "Visit our Nexus page to explore partnership opportunities, or reach out through our Contact page. We welcome collaborations in research, co-development, and innovation ecosystem building.",
  },
  {
    question: "Does Codmek offer AI training or courses?",
    answer:
      "Yes! Codmek Learn provides AI literacy programs, research mentorships, hands-on workshops, and innovation bootcamps designed for students, professionals, and organizations looking to upskill in artificial intelligence.",
  },
  {
    question: "Where is Codmek located?",
    answer:
      "Codmek Softech is headquartered in Jaipur, Rajasthan, India. We serve clients globally and collaborate with partners across multiple countries.",
  },
];

// JSON-LD for FAQ structured data
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQSection = () => {
  return (
    <motion.section
      className="relative z-10 container mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 holographic-text">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about Codmek Softech
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="glass-panel rounded-lg border border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5 text-base md:text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default FAQSection;
