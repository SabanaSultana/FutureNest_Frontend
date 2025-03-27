import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const orphanages = [
  {
    id: 1,
    name: "Hope Shelter",
    location: "New York, USA",
    contact: "+1 234 567 890",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Providing loving care for children since 2005 with education and counseling programs.",
  },
  {
    id: 2,
    name: "Bright Future Home",
    location: "Los Angeles, USA",
    contact: "+1 987 654 321",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Specializing in trauma recovery and family reintegration services.",
  },
  {
    id: 3,
    name: "Safe Haven",
    location: "Chicago, USA",
    contact: "+1 123 456 789",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "24/7 care facility with medical support and special needs programs.",
  },
  {
    id: 4,
    name: "Sunshine Orphanage",
    location: "Houston, USA",
    contact: "+1 555 444 333",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Focus on STEM education and vocational training for older children.",
  },
  {
    id: 5,
    name: "Little Angels",
    location: "Miami, USA",
    contact: "+1 666 777 888",
    image:
      "https://images.unsplash.com/photo-1549421263-6064833b071b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Bilingual programs with emphasis on arts and cultural activities.",
  },
  {
    id: 6,
    name: "Rainbow House",
    location: "San Francisco, USA",
    contact: "+1 999 888 777",
    image:
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "LGBTQ+ friendly environment with diversity training programs.",
  },
  {
    id: 7,
    name: "Happy Kids Shelter",
    location: "Boston, USA",
    contact: "+1 777 222 111",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Pet therapy programs and outdoor education initiatives.",
  },
  {
    id: 8,
    name: "Loving Arms",
    location: "Seattle, USA",
    contact: "+1 444 555 666",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Sustainable living programs with urban farming education.",
  },
  {
    id: 9,
    name: "Caring Home",
    location: "Denver, USA",
    contact: "+1 333 999 111",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Mountain retreat programs with focus on mental health and wellness.",
  },
];

const OrphanageDetails = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-blue-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Our Partner Orphanages
      </h2>

     

      <div className="w-full max-w-6xl px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}">${index + 1}</span>`;
            },
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="pb-16"
        >
          {orphanages.map((orphanage) => (
            <SwiperSlide key={orphanage.id}>
              <div className="bg-white p-5 rounded-lg shadow-lg h-full flex flex-col ">
                <div className="mb-4 overflow-hidden rounded-lg h-48">
                  <img
                    src={orphanage.image}
                    alt={orphanage.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {orphanage.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">📍</span> {orphanage.location}
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium">📞</span> {orphanage.contact}
                </p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {orphanage.description}
                </p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors">
                    Contact
                  </button>
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors">
                    Donate
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
          Find More
        </button>
      </div>
    </div>
  );
};

export default OrphanageDetails;
