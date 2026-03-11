import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2>About Aarnalaxmi Cotton</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Aarnalaxmi Cotton is a leading provider of premium quality cotton products. With years of experience in the cotton industry, we are committed to delivering excellence in every product we offer.</p>
            <p>Our mission is to provide the finest cotton products while maintaining sustainable and ethical practices throughout our supply chain.</p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h3>🏆 Quality</h3>
              <p>Premium grade cotton products</p>
            </div>
            <div className="feature">
              <h3>🌱 Sustainable</h3>
              <p>Eco-friendly practices</p>
            </div>
            <div className="feature">
              <h3>🤝 Trusted</h3>
              <p>Reliable business partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
