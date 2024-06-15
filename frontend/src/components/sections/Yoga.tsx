import React from "react";
import "./yoga.css"; 

const yogaPoses = [
  {
    title: "Corpse Pose | Savasana",
    description:
      "Savasana is one of the best yoga poses for beginners, according to Sage Rountree, co-owner of the Carolina Yoga Company and author of Everyday Yoga. “If you can lie there, you can do it [corpse pose],” she says.",
    image: "savasana.png",
    link: "/corpse-pose"
  },
  {
    title: "Chair Pose | Utkatasana",
    description:
      "Chair pose is “super” for developing both upper and lower body strength, particularly in your glute and back muscles, according to Rountree. It also helps with balance, especially if you lift your heels.",
    image: "utkatasana.png",
    link: "/chair-pose"
  },
  {
    title: "Triangle Pose | Utthita Trikonasana",
    description:
      "The Triangle can be modified like Extended Side Angle, using a yoga block for your bottom hand if you aren't comfortable reaching your arm to the floor. You can also rest your hand higher up on your leg—on your shin or thigh—but avoid putting it directly on your knee.",
    image: "trikonasana.png",
    link: "/triangle-pose"
  },
  {
    title: "Sun Salutation | Surya Namaskar",
    description:
      "Practicing Surya Namaskar steps is best done early morning on an empty stomach. Each round of Sun Salutation consists of two sets, and each set is composed of twelve yoga poses.",
    image: "surya-namaskar-.png",
    link: "/sun-salutation"
  },
];

const Yoga: React.FC = () => {
  return (
    <section id="yoga" className="p-8 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Yoga</h1>
        <blockquote className="text-center italic text-lg mb-12">
          "Yoga is the journey of the self, through the self, to the self." - The Bhagavad Gita
        </blockquote>
        {yogaPoses.map((pose, index) => (
          <div
            key={index}
            className={`card flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } mb-8 bg-white shadow-lg rounded-lg overflow-hidden transition transform duration-500 hover:scale-105 hover:shadow-xl`}
          >
            <img src={pose.image} alt={pose.title} className="w-full md:w-1/2 h-64 object-cover" />
            <div className="p-6 flex flex-col justify-center md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">{pose.title}</h2>
              <p className="text-gray-700 mb-4">{pose.description}</p>
              <a
                href={pose.link}
                className="mt-4 inline-block bg-teal-500 text-white text-center px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Yoga;
