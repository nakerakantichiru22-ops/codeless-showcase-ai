const Experience = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      organization: "Tech Innovations Inc.",
      description: "Leading development of AI-powered applications and mentoring junior developers.",
      type: "work",
    },
    {
      year: "2023",
      title: "Bachelor of Technology in Computer Science",
      organization: "University Name",
      description: "Graduated with honors. Specialized in Artificial Intelligence and Machine Learning. University Motto: Academic Excellence.",
      type: "education",
    },
    {
      year: "2022",
      title: "Software Developer",
      organization: "StartUp Solutions",
      description: "Developed and maintained multiple full-stack web applications using modern technologies.",
      type: "work",
    },
    {
      year: "2021",
      title: "Freelance Developer",
      organization: "Self-Employed",
      description: "Built custom websites and applications for various clients across different industries.",
      type: "work",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Education & Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-0.5" />
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative mb-12 animate-slideUp ${
                  idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto md:text-left"
                } md:w-1/2`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center mb-2 md:justify-end">
                  <div
                    className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 ${
                      item.type === "education" ? "bg-accent border-accent" : "bg-primary border-primary"
                    } md:-ml-2`}
                  />
                  <span className="ml-8 md:ml-0 text-accent font-bold">{item.year}</span>
                </div>
                <div className="ml-8 md:ml-0 bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary mb-2">{item.organization}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
