import React from "react";
import "../../styles/about-us.css";
import furniture from "../../img/furniture.jpg";
import furniture2 from "../../img/furniture-2.jpg";
import catering from "../../img/catering.jpg";
import catering2 from "../../img/catering-2.jpg";

export const AboutUs = () => (
  <div className="about-us container mt-5">
    <header className="text-center mb-4">
      <h1>About Us</h1>
      <p>Making Your Celebrations Unforgettable</p>
    </header>

    <section className="company-overview mb-5">
      <h2>Who We Are</h2>
      <div className="image-container">
        <img src={furniture} alt="About Us" className="large-image" />
        <p>
          At Party Perfect, we specialize in transforming your events into unforgettable experiences.
          With a wide range of rental furniture, top-notch catering services, and exquisite decorations,
          we bring your vision to life. Whether it's a wedding, birthday, corporate event, or any other
          celebration, we have the expertise and resources to make it spectacular.
        </p>
      </div>
    </section>

    <section className="services mb-5">
      <h2>Our Services</h2>
      <div className="service mb-4">
        <h3>Furniture Rentals</h3>
        <div className="image-container">
          <img src={furniture2} alt="Furniture Rentals" className="large-image" />
          <p>
            Our extensive selection of rental furniture includes everything from elegant chairs and tables
            to stylish lounge sets and accessories. We ensure that our furniture not only meets but exceeds
            your expectations in terms of quality and style.
          </p>
        </div>
      </div>
      <div className="service mb-4">
        <h3>Catering Services</h3>
        <div className="image-container">
          <img src={catering} alt="Catering Services" className="large-image" />
          <p>
            Delight your guests with our exceptional catering services. Our talented chefs create delicious,
            beautifully presented dishes that cater to all tastes and dietary requirements. From appetizers
            to desserts, we ensure every bite is a delight.
          </p>
        </div>
      </div>
      <div className="service mb-4">
        <h3>Event Decoration</h3>
        <div className="image-container">
          <img src={catering2} alt="Event Decoration" className="large-image" />
          <p>
            Our professional decorators bring creativity and elegance to your events. We offer a wide range
            of decorative items and design themes that transform any venue into a stunning backdrop for your
            celebration. From floral arrangements to lighting, we handle it all.
          </p>
        </div>
      </div>
    </section>

    <section className="why-choose-us mb-5">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Extensive experience in event planning and execution</li>
        <li>High-quality, stylish furniture rentals</li>
        <li>Gourmet catering services tailored to your needs</li>
        <li>Creative and personalized event decorations</li>
        <li>Commitment to excellence and customer satisfaction</li>
      </ul>
    </section>

    <section className="testimonials mb-5">
      <h2>What Our Clients Say</h2>
      <blockquote>
        "Party Perfect made our wedding day truly magical. The decorations were stunning, the food was
        incredible, and the furniture added the perfect touch of elegance. We couldn't have asked for
        a better team to help us celebrate our special day."
        <footer>– Emily & Michael</footer>
      </blockquote>
      <blockquote>
        "From start to finish, Party Perfect exceeded our expectations. Their attention to detail and
        dedication to making our event a success was evident in every aspect. Highly recommend!"
        <footer>– Sarah & John</footer>
      </blockquote>
    </section>

    <section className="contact-info mb-5">
      <h2>Contact Us</h2>
      <p>
        Ready to start planning your event? Contact us today to discuss your needs and let us help you
        create a memorable celebration.
      </p>
      <p>
        <strong>Phone:</strong> +123 456 7890<br />
        <strong>Email:</strong> info@event-eazy.com<br />
        <strong>Address:</strong> 123 Celebration St, Party City, Country
      </p>
    </section>
  </div>
);

export default AboutUs;
