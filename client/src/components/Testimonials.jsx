import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Anne S',
    date: '3 week ago',
    review: 'Amanda was great! Easy to work with, honest and professional. Would highly recommend Kapitus for small businesses.',
    rating: 5,
  },
  {
    name: 'jason prevost',
    date: '2 week ago',
    review: 'These guys went the extra mile.',
    rating: 5,
  },
  {
    name: 'Amy Wolthoff',
    date: '1 week ago',
    review: 'This was easily the best experience I have had dealing with financial concerns. Sean was responsive, knowledgeable and...',
    rating: 5,
  },
  {
    name: 'Angeli Angelos',
    date: '1 week ago',
    review: 'Nice & Very Fast.',
    rating: 5,
  },
  {
    name: 'Dawn Lepore',
    date: '1 week ago',
    review: 'Kind, supportive and easy to work with.',
    rating: 5,
  },
  {
    name: 'Daniel Eidson',
    date: '6 days ago',
    review: 'Amazing Service, not pushy. super helpful',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F5F8FA] py-10 pt-32">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">In Their Own Words</h2>
        <p className="text-lg text-gray-600">Hear what GoPrime clients have to say about their unique financing journeys.</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-container bg-[#F5F8FA] py-5 px-10 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-start mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              </div>
              <div className="mt-auto flex flex-col justify-end h-full">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
