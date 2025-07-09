import React from "react";

function EducationSection() {
  return (
    <section id="education" className="py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">컴퓨터공학과</h3>
            <p className="text-blue-600 font-medium mb-2">OO대학교</p>
            <p className="text-gray-600">2020.03 - 2024.02</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              프론트엔드 개발 부트캠프
            </h3>
            <p className="text-blue-600 font-medium mb-2">OO 코딩 부트캠프</p>
            <p className="text-gray-600">2023.06 - 2023.12</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
