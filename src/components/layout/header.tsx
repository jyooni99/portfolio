"use client";

function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-blue-100 z-50">
      <div className="px-10 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Portfolio</h1>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Skills & Tools
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Education
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
