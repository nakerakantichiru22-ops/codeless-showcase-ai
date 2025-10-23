const About = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
            About Me
          </h2>
          <div className="bg-card rounded-2xl p-8 border border-border animate-slideUp">
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              I'm a passionate developer with a keen interest in leveraging artificial intelligence 
              and modern web technologies to solve real-world problems. My journey in tech began 
              with a curiosity about how things work, and has evolved into a commitment to continuous 
              learning and innovation.
            </p>
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              With expertise spanning full-stack development, machine learning, and cloud computing, 
              I focus on building scalable, user-centric applications that make a difference. I believe 
              in the power of technology to transform lives and industries.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community through blogs and workshops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
