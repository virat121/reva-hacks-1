// Slider.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css"; // Assuming CSS file for styling

const Slider: React.FC = () => {
  // Sample data for Ayurveda and Yoga events
  const events = [
    {
      image: "savasana.png",
      title: "Savasana & Deep Breathing",
      description: "Relax and rejuvenate with a calming session of Savasana and deep breathing.",
      timing: "Every Saturday, 7:00 - 8:00 AM",
      registrationUrl: "#register1",
    },
    {
      image: "savasana.png",
      title: "Ayurvedic Diet Workshop",
      description: "Learn about the principles of Ayurvedic diet and how to incorporate them into your daily meals.",
      timing: "Every Sunday, 4:00 - 6:00 PM",
      registrationUrl: "#register2",
    },
    {
      image: "savasana.png",
      title: "Herbal Bath Experience",
      description: "Experience the therapeutic benefits of herbal baths for mental and physical well-being.",
      timing: "Every Friday, 3:00 - 5:00 PM",
      registrationUrl: "#register3",
    },
    {
      image: "savasana.png",
      title: "Yoga Retreat",
      description: "Join our weekend yoga retreat for a complete mind-body wellness experience.",
      timing: "Monthly on weekends",
      registrationUrl: "#register4",
    },
    {
      image: "savasana.png",
      title: "Detox Session & Ayurvedic Massage",
      description: "Indulge in a detox session followed by a rejuvenating Ayurvedic massage.",
      timing: "Every Thursday, 6:00 - 8:00 PM",
      registrationUrl: "#register5",
    },
  ];

  return (
    <div className="slider-container">
      <Carousel autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true}>
        {events.map((event, index) => (
          <div key={index} className="slider-item">
            <img src={event.image} alt={event.title} />
            <div className="legend">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>{event.timing}</p>
              <a href={event.registrationUrl}>
                <button>Register Now</button>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
