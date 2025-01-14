import React from 'react';
import LogoVariants from './LogoVariants';

const ClientLogos = () => {
  const clients = [
    {
      name: "Tech Corp",
      logo: <LogoVariants variant="grayscale" height={48} className="hover:opacity-75 transition-opacity" />
    },
    {
      name: "Finance Plus",
      logo: <LogoVariants variant="grayscale" height={48} className="hover:opacity-75 transition-opacity" />
    },
    {
      name: "Global Solutions",
      logo: <LogoVariants variant="grayscale" height={48} className="hover:opacity-75 transition-opacity" />
    },
    {
      name: "Innovate Inc",
      logo: <LogoVariants variant="grayscale" height={48} className="hover:opacity-75 transition-opacity" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-1"
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;