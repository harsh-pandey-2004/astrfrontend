import React, { useEffect } from "react";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 relative top-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Vastu<span className="text-[#f6c300]"> Design Services</span> 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard
            title="3D Vastu Design"
            price="₹10,000"
            description="Get a detailed 3D Vastu design for your home or office. Our experts use the latest technology to provide you with an immersive and precise Vastu plan."
            features={[
              "Detailed 3D Model",
              "Personalized Vastu Plan",
              "Comprehensive Analysis",
              "Expert Consultation",
            ]}
            buttonText="Get 3D Vastu Design"
            buttonLink="/contact"
          />
          <PricingCard
            title="2D Vastu Design"
            price="₹5,000"
            description="Receive a comprehensive 2D Vastu design that aligns with your personal and architectural needs. Ideal for those looking for a quick and efficient Vastu solution."
            features={[
              "Accurate 2D Layout",
              "Customized Vastu Solutions",
              "Quick Turnaround",
              "Expert Recommendations",
            ]}
            buttonText="Get 2D Vastu Design"
            buttonLink="/contact"
          />
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-4xl font-bold text-[#f6c300] mb-4">{price}</p>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a
        href={buttonLink}
        className="px-6 py-3 bg-[#f6c300] text-white font-semibold rounded transition-colors hover:bg-yellow-500"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PricingPage;
