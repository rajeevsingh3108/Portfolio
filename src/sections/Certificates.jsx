import React from "react";
import { Particles } from "../components/Particles";


const certificates = [
  {
    id: 1,
    title: "Supervised Machine Learning",
    image: "/certificates/Supervised Machine Learning.png",
    link: "https://www.coursera.org/account/accomplishments/verify/GK5NGX84XDKX"
  },
  {
    id: 2,
    title: "Advanced Learning Algorithms",
    image: "certificates/Advanced Learning Algorithms.png",
    link: "https://www.coursera.org/account/accomplishments/verify/4JJY3TLRDIF8"
  },
  {
    id: 3,
    title: "Job Simultaion",
    image: "/certificates/Forage.png",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_he2f2ZPM9u8ZaELTt_1718632418282_completion_certificate.pdf"
  },
  {
    id: 4,
    title: "Google Analytics Certification",
    image: "/certificates/Google Analytics Certification.png",
    link: "https://skillshop.credential.net/b895260e-af16-4b05-a94f-4d5a6ebaac09#acc.atf4NJXr"
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    image: "/certificates/Artificial Intelligence.png",
    link: "https://drive.google.com/file/d/1iT23gQEdJVhdGs_3ej7ph_cLA8Fi3QYi/view?usp=sharing"
  },
  {
    id: 6,
    title: "AWS Cloud Practitioner",
    image: "/certificates/AWS.png",
    link: "https://drive.google.com/file/d/1hc64yakfs8sAarendaqikXxqCYuhjiCQ/view?usp=sharing"
  },
  {
    id: 7,
    title: "Principles of Generative AI Certification",
    image: "/certificates/Principles of Generative AI Certification.png",
    link: "https://drive.google.com/file/d/1nhRRrMAwYJRLExz0qi8WzGVIr09JtJQZ/view?usp=sharing"
  },
  
  
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 relative overflow-x-hidden sm:px-5">
      <div className="flex justify-start items-start mb-18"><h2 className="text-heading ml-7"> My Certificates</h2> </div>
      {/* Particles background */}
      <Particles
        className="absolute inset-0 -z-10"
      quantity={80}
        color="#ffffff"
        refresh
      />
      <div className="relative w-full">
        <div
          className="flex items-center gap-12 w-max animate-marquee whitespace-nowrap"
        >
          {/* Show certificates twice for seamless loop */}
          {[...certificates, ...certificates].map((cert, idx) => (
            <a
              key={cert.id + "-loop-" + idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center min-w-[340px] mx-6"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-80 h-52 object-cover rounded-xl shadow-xl border border-white/10 bg-white/5"
              />
              <span className="mt-4 text-base text-gray-300 text-center font-semibold">
                {cert.title}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Marquee animation styles */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};
export default Certificates;
