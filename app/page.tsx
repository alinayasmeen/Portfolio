import React from 'react';

import Image from 'next/image';
import profile from './(image)/profile-image.jpeg';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      
      <main className="flex-1 px-8 py-16 max-w-6xl mx-auto">
        {/* Introduction Section */}
        <section className="flex items-center justify-between mb-16">
          {/* Left Content: Text Introduction */}
          <div className="w-1/2 pr-8">
            <h1 className="text-7xl font-bold mb-9">
              Hi I’m Mehmet Akif Karasu, <br /> 3D artist & sculptor.
            </h1>
            <p className="text-3xl mb-4">
              My work is mainly focused on third-dimension modeling, texturing, and rendering.
              I like exploring creatures with a touch of dark surrealism for characters and production.
            </p>
            <p className="text-3xl">
              Now I’m an interactive media design student in Istanbul — currently freelancing and
              seeking internship opportunities.
            </p>
          </div>

          {/* Right Content: Image */}
          <div className="w-1/2 flex justify-center">
            <Image
              src={profile}
              alt="Profile Image"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 flex items-center justify-between">
          <div className="w-1/3 text-lg underline">Main Software</div>
          <div className="w-2/3 text-lg">
            <p>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</p>
            <p>Adobe CC, Figma, Ableton</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 flex items-center justify-between">
          <div className="w-1/3 text-lg underline">Main Skills</div>
          <div className="w-2/3 text-lg">
            <p>Organic and Hard-Surface Modeling, UV Layout, Texturing, Rigging, Animation, Sound Design</p>
          </div>
        </section>

        {/* Separator Line */}
        <div className="border-t border-black my-10 w-full"></div>

        {/* Contact Section */}
        <section className="mb-16 flex items-center justify-between">
          <h2 className="text-2xl w-1/2">
            I am thrilled to answer your next project →
          </h2>
          <a href="mailto:makifkarasu@outlook.com" className="text-xl w-1/2">
            makifkarasu@outlook.com
            <p className="underline">View Resume</p>
          </a>
        </section>
      </main>
      
    </div>
  );
};

export default Page;
