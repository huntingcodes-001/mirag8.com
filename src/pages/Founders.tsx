import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Founders: React.FC = () => {
  const founders = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Tesla executive with 15 years of experience in smart home technology.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'MIT graduate with multiple patents in IoT and smart device integration.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Zhang',
      role: 'COO & Co-Founder',
      bio: 'Former Apple executive specializing in product development and global operations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Founders</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Visionaries who are revolutionizing the way we interact with mirrors
          </p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2 dark:text-white">{founder.name}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{founder.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={founder.linkedin}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={founder.twitter}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                At Mirag8, we believe in pushing the boundaries of what's possible with smart home technology. 
                Our mission is to create products that seamlessly blend into your daily life while providing 
                unprecedented convenience and functionality.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We're committed to innovation, quality, and customer satisfaction. Our team works tirelessly 
                to develop new features and improvements that make our smart mirrors an indispensable part 
                of your home.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team Meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founders;