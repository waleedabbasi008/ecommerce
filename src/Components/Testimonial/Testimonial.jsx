import React, { useState } from 'react';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialApi = [
  {
    id: 1,
    image: " images/Avatar1.jpg",
    name: " Angelina",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },
  {
    id: 2,
    image: " images/Avatar2.jpg",
    name: " Danial ",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },
  {
    id: 3,
    image: " images/Avatar3.jpg",
    name: " sachin ",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },
  {
    id: 4,
    image: " images/Avatar4.jpg",
    name: " Mr. harry ",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },

]

const Testimonial = () => {
  const [test, settest] = useState(TestimonialApi);
  return (
    <>

      <section id="Testimonial">
        <h5 className='Test-heading' > Review from clients </h5>
        <h2 className='test-headin2'> Testimonial </h2>
        <Swiper className="container testimonial__container"
          // Install swiper module
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          {
            test.map((currele) => {
              return (
                <>

                  <SwiperSlide className="testimonial"  >
                    <div className="client__avatar">
                      <img src={currele.image} alt="Mickle " />
                    </div>
                    <div className="client__reviews-detail">
                      <h5> {currele.name} </h5>
                      <small className="review"> {currele.review} </small>
                    </div>
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
      </section>
    </>
  )
}

export default Testimonial;