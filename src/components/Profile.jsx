import React from 'react';

const Profile = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto glass-card p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">About <span className="text-fiery-500">Me</span></h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I'm Vikas Kakarla. I specialize in building immersive web applications that focus on incredible performance and stunning aesthetics. With a deep passion for design and coding, I bridge the gap between creative concepts and technical execution.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I love exploring liquid aesthetics, glassmorphism, and seamless user experiences. Whether it's a sleek portfolio or a complex application, I believe that great design should feel invisible yet impactful.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 rounded-full p-1 bg-gradient-to-tr from-fiery-600 to-fiery-400">
            <div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-4xl font-bold text-gray-500">VK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
