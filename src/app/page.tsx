import MainTitleSection from "@/components/main/main-title-section";
import AboutSection from "@/components/about-me/about-section";
import SkillsSection from "@/components/skills-and-tools/skills-section";
import ProjectSection from "@/components/projects/project-section";
import EducationSection from "@/components/education/education";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Title Section */}
      <MainTitleSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Skills & Tools Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Education Section */}
      <EducationSection />
    </div>
  );
};

export default Index;
