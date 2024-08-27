import React from 'react';

const testimonials = [
  {
    name: 'Dawn Lepore',
    date: '4 days ago',
    review: 'Kind, supportive and easy to work with.',
    rating: 5,
  },
  {
    name: 'Angeli Angelos',
    date: '6 days ago',
    review: 'Nice & Very Fast.',
    rating: 5,
  },
  {
    name: 'Anne S',
    date: '1 week ago',
    review: 'Amanda was great! Easy to work with, honest and professional. Would highly recommend Kapitus for small businesses.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">In Their Own Words</h2>
        <p className="text-gray-600">Hear what Kapitus clients have to say about their unique financing journeys.</p>
      </div>
      <div className="flex justify-center space-x-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              {[...Array(testimonial.rating)].map((star, i) => (
                <svg key={i} className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-2">"{testimonial.review}"</p>
            <p className="text-gray-500">{testimonial.name}</p>
            <p className="text-gray-400 text-sm">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
