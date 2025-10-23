import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "Next.js"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Design & Others",
      skills: ["Figma", "Tailwind CSS", "UI/UX Design", "Agile", "Team Leadership"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 border border-border animate-slideUp hover:border-primary/50 transition-colors"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
