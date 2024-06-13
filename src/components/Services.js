import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    description: "We build websites and web applications.",
    price: 300,
    image: "/images/web_development.jpg"
  },
  {
    id: 2,
    name: "Software Installation",
    description: "Reliable software installation services.",
    price: 20,
    image: "/images/software_installation.jpg",
  },
  {
    id: 3,
    name: "Stationaries",
    description: "Quality pens, notebooks and office supplies.",
    price: 0.50,
    image: "/images/stationaries.jpg",
  },
  {
    id: 4,
    name: "Photocopying and Laminating",
    description: "High-quality photocopying and laminating services.",
    price: 1,
    image: "/images/photocopying_and_laminating.jpg",
  },
  {
    id: 5,
    name: "Printing",
    description: "Business cards, flyers, banners and more.",
    price: 0.50,
    image: "/images/printing.jpg",
  }
];

function Services() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const proceedToPayment = () => {
    navigate('/payment', { state: { cart } })
  };

  return (
    <div className="container">
      <h2>Our Services</h2>
      <div className="services">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-content">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>${service.price}</p>
              <button onClick={() => addToCart(service)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={proceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Services;