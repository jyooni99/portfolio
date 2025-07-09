import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-5  ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Skills & Tools
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm bg-white text-blue-700 border border-blue-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
