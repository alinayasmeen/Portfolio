import React from 'react';

const Footer: React.FC = () => {
  return (
    
    <footer className="flex bg-gray-200 text-black justify-between max-w-full text-[24px] px-6">
      <p className="text-sm items-end">Mehmet Akif Karasu — 2020</p>
      <div className="space-x-4">
        <a href="https://www.artstation.com" className="bg-gray-200 text-black">Artstation</a>
        <a href="https://www.linkedin.com" className="bg-gray-200 text-black">LinkedIn</a>
        <a href="https://www.twitter.com" className="bg-gray-200 text-black">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
