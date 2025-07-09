import React from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="py-16 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          안녕하세요! 사용자 경험을 중시하는 프론트엔드 개발자입니다. 새로운 기술을 배우는
          것을 좋아하며, 깔끔하고 효율적인 코드를 작성하기 위해 노력합니다.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </Button>
          <Button variant="outline" size="sm">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="sm">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
