"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronDown, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { projects } from "@/data/projects";

function ProjectSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-3 md:px-10 lg:px-15">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => (
              <Dialog key={project.id} open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-300 transition-colors w-full max-w-[400px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      width={100}
                      height={192}
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.period}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.team}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">기간:</span> {project.period}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="font-medium">인원:</span> {project.team}
                        </div>
                      </div>
                    </div>

                    {/* Main Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        주요 기능 및 특징
                      </h4>
                      <ul className="space-y-2">
                        {project.mainFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        사용기술 및 언어
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(project.technologies).map(([category, techs]) => (
                          <Collapsible key={category}>
                            <CollapsibleTrigger className="flex items-center w-full p-3 text-left bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                              <span className="font-medium text-blue-800">
                                {category}
                              </span>
                              <ChevronDown className="w-4 h-4 ml-auto text-blue-600" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="p-3 bg-gray-50 rounded-lg mt-1">
                              <div className="flex flex-wrap gap-2">
                                {techs.map((tech, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-white text-blue-700 border border-blue-200"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </div>
                    </div>

                    {/* Work Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        작업 내용
                      </h4>
                      <ul className="space-y-2">
                        {project.workContent.map((work, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{work}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Troubleshooting */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        트러블 슈팅
                      </h4>
                      <div className="space-y-4">
                        {project.troubleShooting.map((trouble, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4"
                          >
                            <h5 className="font-medium text-red-600 mb-2">문제상황</h5>
                            <p className="text-gray-700 mb-3">{trouble.problem}</p>
                            <h5 className="font-medium text-green-600 mb-2">해결방법</h5>
                            <p className="text-gray-700">{trouble.solution}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
