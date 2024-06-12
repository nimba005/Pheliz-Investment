import { name } from "file-loader";
import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    decription: "We build websites and web applications.",
    price: "$300 to $1000",
    image: "/images/web_development.jpg"
  },
  {
    id: 2,
    name: "Software Installation",
    description: "Reliable software installation services.",
    price: "$50 to $100",
    image: "/images/software_installation.jpg",
  },
  {
    id: 3,
    name: "Stationaries",
    description: "Quality pens, notebooks and office supplies.",
    price: "$5 to $50",
    image: "/images/stationaries.jpg",
  },
  {
    id: 4,
    name: "Photocopying and Laminating",
    description: "High-quality photocopying and laminating services.",
    price: "$0.10 to $1.00",
    image: "/images/photocopying_and_laminating.jpg",
  },
  {
    id: 5,
    name: "Printing",
    description: "Business cards, flyers, banners and more.",
    price: "$0.50 to $5.00",
    image: "/images/printing.jpg",
  }
];

function Services() {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  return (
    <div className="container">
      <h2>Our Services</h2>
      <div className="services">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>{service.price}</p>
            <button onClick={() => addToCart(service)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;