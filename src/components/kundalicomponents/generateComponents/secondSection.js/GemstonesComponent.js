import React from "react";

const GemstoneCard = ({ title, subtitle, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h6 className="text-xl font-semibold text-gray-800 mb-2">{subtitle}</h6>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
        <table className="w-full">
          <tbody>
            {title && (
              <tr>
                <td className="text-gray-500">{title}</td>
                <td className="text-gray-700">{subtitle}</td>
              </tr>
            )}
            <tr>
              <td className="text-gray-500">How to wear</td>
              <td className="text-gray-700">{content}</td>
            </tr>
            {/* You can add more table rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GemstoneSection = () => {
  return (
    <div className=" mx-auto mt-8">
      <GemstoneCard
        title="Life Stone for Taurus (Vrishabha Lagna)"
        subtitle="Diamond (Heera)"
        content="Gold or silver on middle finger"
      />
      <GemstoneCard
        title="Lucky Gemstone for Taurus (Vrishabha)"
        subtitle="Emerald (Panna)"
        content="Gold, on ring or little finger"
      />
      <GemstoneCard
        title="Fortune Stone for Taurus (Vrishabha)"
        subtitle="Blue Sapphire (Neelam)"
        content="Gold, on middle finger"
      />
    </div>
  );
};

export default GemstoneSection;
