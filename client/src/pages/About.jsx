import React from 'react'

const About = () => {
  return (
    <div className="About-us">
      <h1>About Us.</h1>
      <div className="about-names">
        <div className="bio mohit">
          <h3>Mohitsingh Thakur</h3>
          <p>Role : Frontend Development</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            impedit a, eaque dolore inventore voluptatibus eius ab placeat nam
            illum!
          </p>
        </div>
        <div className="bio nishikant">
          <h3>Nishikant Singh</h3>
          <p>Role : FullStack Development</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            impedit a, eaque dolore inventore voluptatibus eius ab placeat nam
            illum!
          </p>
        </div>
        <div className="bio zayed">
          <h3>ZayedKhan Pathan</h3>
          <p>Role : Backend Development</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            impedit a, eaque dolore inventore voluptatibus eius ab placeat nam
            illum!
          </p>
        </div>
      </div>
      <p className='copyright'>All Copyrights Reserved.✌️ </p>
    </div>
  );
}

export default About