import React from 'react';
import Slider from 'react-slick';
import { CheckCircle } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1620735692151-26a7e0748429?auto=format&fit=crop&q=80"
              alt="Smart Mirror"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
              The Future of Mirrors is Here
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your daily routine with Mirag8's revolutionary smart mirrors.
              Combining cutting-edge technology with elegant design.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Products</h2>
          <Slider {...carouselSettings}>
            <div className="px-4">
              <img
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80"
                alt="Smart Mirror 1"
                className="rounded-lg"
              />
            </div>
            <div className="px-4">
              <img
                src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&q=80"
                alt="Smart Mirror 2"
                className="rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">See Mirag8 in Action</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Choose Mirag8?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Superior Quality',
                description: 'Premium materials and cutting-edge technology ensure lasting performance.'
              },
              {
                title: 'Smart Features',
                description: 'Voice control, weather updates, calendar integration, and more.'
              },
              {
                title: 'Expert Support',
                description: '24/7 customer service and professional installation available.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;