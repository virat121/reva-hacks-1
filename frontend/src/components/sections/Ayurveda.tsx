import React from "react";
import "./ayurveda.css"; // Ensure you import the custom CSS file

const branches = [
  {
    title: "Kaya Chikitsa",
    description:
      "Kaya Chikitsa thus represents a comprehensive system of medicine that integrates various therapeutic modalities to promote health and treat disease in a balanced and natural way.",
    image: "Kaya.png",
    link: "/kaya-chikitsa"
  },
  {
    title: "Bala Chikitsa",
    description:
      "Bala Chikitsa thus provides a comprehensive framework for ensuring the health and well-being of children through natural, holistic, and preventive approaches tailored to their unique needs.",
    image: "bala.png",
    link: "/bala-chikitsa"
  },
  {
    title: "Graha Chikitsa",
    description:
      "By addressing the psychological and spiritual aspects of health, this provides a comprehensive approach to mental well-being, incorporating both traditional medical treatments.",
    image: "Grahm.png",
    link: "/graha-chikitsa"
  },
  {
    title: "Urdhwanga Chikitsa",
    description:
      "Urdhwanga Chikitsa thus represents a specialized and comprehensive approach to the health and diseases of the upper part of the body, combining traditional wisdom with holistic care practices.",
    image: "urdu.png",
    link: "/urdhwanga-chikitsa"
  },
  {
    title: "Shalya Tantra",
    description:
      "Shalya Tantra represents a sophisticated and integral part of Ayurveda, blending ancient surgical wisdom with holistic health principles to treat a wide range of conditions effectively.",
    image: "shalya.png",
    link: "/shalya-tantra"
  },
  {
    title: "Damshtra Chikitsa",
    description:
      "Damshtra Chikitsa thus represents a critical branch of Ayurveda focused on the effective management of poisoning through a combination of immediate care, detoxification, and holistic healing practices.",
    image: "Damshtra.png",
    link: "/damshtra-chikitsa"
  },
  {
    title: "Jara Chikitsa",
    description:
      "Jara Chikitsa, or Rasayana, thus represents a comprehensive approach to aging, focusing on rejuvenation, prevention of age-related diseases, and enhancement of overall quality of life through natural and holistic practices.",
    image: "jara.png",
    link: "/jara-chikitsa"
  },
  {
    title: "Vrsha Chikitsa",
    description:
      "Vrsha Chikitsa, or Vajikarana, thus represents a specialized branch of Ayurveda focused on enhancing sexual vitality, improving reproductive health, and promoting a balanced and fulfilling sexual life through natural and holistic means.",
    image: "vrsha.png",
    link: "/vrsha-chikitsa"
  },
];

const Ayurveda: React.FC = () => {
  return (
    <section id="ayurveda" className="p-8 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Ayurveda</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img src={branch.image} alt={branch.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-4">{branch.title}</h2>
                <p className="text-gray-700 mb-4 flex-grow">{branch.description}</p>
                <a
                  href={branch.link}
                  className="mt-4 inline-block bg-teal-500 text-white text-center px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ayurveda;
