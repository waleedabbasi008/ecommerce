import React from 'react';
import './About.scss';
const data = [
  {
    id: 1,
    heading: " 🌟 Unparalleled Selection",
    para: " Explore a vast collection of the latest and greatest mobile phones from all the top brands. From sleek and stylish iPhones to powerful Android devices, we've curated a selection that caters to every taste and need.",
    image: "images/unparral.jpg",

  },
  {
    id: 2,
    heading: " 🚀 Cutting-Edge Technology",
    para: " Stay ahead of the curve with the most advanced features and innovations in the mobile world. Discover smartphones with stunning displays, lightning-fast processors, and state-of-the-art camera systems.",
    image: "images/cutting.jpeg",
  },
  {
    id: 3,
    heading: " 🌐 Global Shipping",
    para: " No matter where you are in the world, we'll deliver your new mobile device right to your doorstep. We offer reliable and secure shipping options, ensuring your purchase arrives in pristine condition.",
    image: "images/global.jpeg",
  },
  {
    id: 4,
    heading: " 🔐 Secure Shopping",
    para: " Shop with confidence, knowing that your personal information is protected by the latest security measures. Your privacy and data security are our top priorities.",
    image: "images/secure.jpeg",
  },

]
const AboutDetail = () => {
  return (
    <>
      <section id="about-detail">
        <h2 className='about-header'> Why Choose Alamy Mobile Master? </h2>
        <p className='about-main-para mt-5 fs-4'>At Mobile Master, we believe that a mobile phone isn't just a communication tool; it's an extension of your personality, a source of endless possibilities, and a gateway to the future. Whether you're a tech enthusiast, a trendsetter, or simply someone who appreciates the convenience of modern mobile technology, we've got something special for you</p>
        <div className="container choose-us-container ">
          <div className="row  choose-us-detail" >
            {
              data.map((items) => {
                const { id, heading, para, image } = items;
                return (
                  <>
                    <div className="col col-lg-6 col-md-12 col-sm-12 about-card  card-group " key={id} >
                      <h3 className="about-detail-header card-header"> {heading} </h3>
                      <p className='about-detail-para card-text' > {para} </p>
                      <img src={image} alt="" className=' card-bottom' />
                    </div>

                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutDetail;