import React from 'react';
import Slider from 'react-slick';
import { Download } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Elite Smart Mirror',
      description: 'Premium smart mirror with voice control and AI assistance',
      image: 'https://images.unsplash.com/photo-1620735692151-26a7e0748429?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Pro Smart Mirror',
      description: 'Professional-grade smart mirror for businesses',
      image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Home Smart Mirror',
      description: 'Perfect for modern smart homes',
      image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Fitness Smart Mirror',
      description: 'Interactive workout companion',
      image: 'https://images.unsplash.com/photo-1561214078-f3247647fc5e?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'Vanity Smart Mirror',
      description: 'Beauty and wellness focused smart mirror',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      name: 'Commercial Smart Mirror',
      description: 'Designed for retail and hospitality',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80'
    }
  ];

  const variants = [
    {
      name: 'Classic Edition',
      image: 'https://images.unsplash.com/photo-1620735692151-26a7e0748429?auto=format&fit=crop&q=80',
      features: ['Voice Control', 'Weather Updates', 'Basic Apps']
    },
    {
      name: 'Premium Edition',
      image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80',
      features: ['AI Assistant', 'Gesture Control', 'Advanced Apps']
    },
    {
      name: 'Ultimate Edition',
      image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&q=80',
      features: ['Full Smart Home Integration', '4K Display', 'Premium Apps']
    },
    {
      name: 'Enterprise Edition',
      image: 'https://images.unsplash.com/photo-1561214078-f3247647fc5e?auto=format&fit=crop&q=80',
      features: ['Multi-user Support', 'Analytics Dashboard', 'Custom Apps']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Interior Designer',
      content: 'Mirag8 mirrors have transformed how my clients interact with their spaces. The quality and features are unmatched.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Smart Home Enthusiast',
      content: 'The integration capabilities with my existing smart home setup are incredible. This is the future of mirrors.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Fitness Studio Owner',
      content: 'Our clients love the interactive workout features. Its been a game-changer for our business.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Hotel Manager',
      content: 'The commercial smart mirrors have elevated our guest experience to a whole new level.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Tech Reviewer',
      content: 'The build quality and software experience are exceptional. Mirag8 has set a new standard.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="pt-16">
      {/* Product Grid */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Product Showcase</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Product Variants Carousel */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Product Variants</h2>
          <Slider {...sliderSettings}>
            {variants.map((variant, index) => (
              <div key={index} className="px-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">{variant.name}</h3>
                    <ul className="space-y-2">
                      {variant.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Brochure Download */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Download Our Brochure</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Download Brochure</span>
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Customers Say</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mx-4">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg dark:text-white">{testimonial.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Products;