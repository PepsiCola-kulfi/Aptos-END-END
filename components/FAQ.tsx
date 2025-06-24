import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQSection = () => {
  const faqData = [
    {
      question: "What is our platform?",
      answer:
        "Our platform is designed to revolutionize the startup ecosystem, offering innovative solutions for entrepreneurs and businesses to build, scale, and succeed in the digital age.",
    },
    {
      question: "Is our platform secure?",
      answer:
        "Yes, we employ bank-level security measures including end-to-end encryption, multi-factor authentication, and compliance with international security standards to protect your data and business operations.",
    },
    {
      question: "Which technologies do we support?",
      answer:
        "We support a wide range of modern technologies including Web3, blockchain, AI/ML, cloud computing, and traditional web technologies, providing comprehensive solutions for diverse business needs.",
    },
    {
      question: "Can I integrate with existing tools?",
      answer:
        "Yes, our platform offers seamless integration with popular business tools, APIs, and services, allowing you to connect your existing workflow and maximize productivity.",
    },
    {
      question: "How do we ensure cost-effectiveness?",
      answer:
        "We leverage cutting-edge technology and strategic partnerships to provide competitive pricing with transparent costs and no hidden fees, ensuring maximum value for your investment.",
    },
    {
      question: "Do we offer ongoing support?",
      answer:
        "Yes, we provide comprehensive support including documentation, community forums, direct support channels, and dedicated account management for enterprise clients.",
    },
    {
      question: "How do we handle scalability?",
      answer:
        "Our platform is built with scalability in mind, featuring auto-scaling infrastructure, load balancing, and performance optimization to grow with your business needs.",
    },
    {
      question: "Are we compliant with regulations?",
      answer:
        "Yes, we maintain full compliance with international regulations including GDPR, SOC 2, and various industry-specific standards to ensure your business meets all requirements.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - 40% */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-sm text-white/60 uppercase tracking-wider mb-4 font-medium">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Have questions in mind?{" "}
                <span className="bg-gradient-to-r from-[#df500f] to-[#ff6b35] bg-clip-text text-transparent">
                  Let us answer it
                </span>
              </h2>
            </div>

            <div className="text-white/70">
              <p>Don't find your question?</p>
              <p>
                Contact us at{" "}
                <a
                  href="mailto:contact@startup.com"
                  className="text-[#df500f] hover:text-[#ff6b35] transition-colors duration-200 underline decoration-[#df500f]/50 hover:decoration-[#ff6b35]"
                >
                  contact@startup.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[#df500f]/30 group"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-white hover:text-white/90 transition-colors duration-200 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-[#df500f]">
                    <span className="text-lg font-medium pr-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#df500f] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-white/80 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
