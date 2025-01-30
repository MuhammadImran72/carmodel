import React from 'react';


const servicesData = [
  {
    id: 1,
    image: require("../images/battery.png"),
    title: "Battery",
    description: "Blackcircles.com stocks a vast array of different car tyres. Blackcircles.com stocks a vast array of different car."
  },
  {
    id: 2,
    image: require("../images/oilchange.png"),
    title: "Oil Change",
    description: "Blackcircles.com stocks a vast array of different car tyres. Blackcircles.com stocks a vast array of different car."
  },
  {
    id: 3,
    image: require("../images/brakes.png"),
    title: "Brakes",
    description: "Blackcircles.com stocks a vast array of different car tyres. Blackcircles.com stocks a vast array of different car."
  }
];

export default function Services() {
  return (
    <section className='commonhomepagespacetopandbottom'>  
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className='commonheading spacebtm'>
            <h3> Our Services</h3>
            </div>
      
          </div>
        </div>
        <div className="row services-outer">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="col-lg-4 servicesbox ">
              <img src={service.image} alt={`${service.title} logo`} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
