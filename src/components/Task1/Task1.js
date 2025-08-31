import React from 'react';
import './task1.css';

export default function Task1(){
  return (
    <div className="product-page">
      <div className="product-grid">
        <div className="product-media">
          <img src="https://picsum.photos/seed/product/800/800" alt="Product" className="product-image" />
        </div>
        <div className="product-details">
          <h1 className="product-title">Premium Leather Backpack</h1>
          <p className="product-sub">Durable, stylish, and built for everyday carry.</p>
          <div className="product-meta">
            <div className="price">$129.00</div>
            <div className="rating">⭐ 4.7 (2.1k)</div>
          </div>
          <div className="actions">
            <button className="btn primary">Add to Cart</button>
            <button className="btn outline">Buy Now</button>
          </div>
          <section className="product-info">
            <h3>Product Details</h3>
            <p>High-quality leather, water resistant, 20L capacity, laptop compartment.</p>
            <ul>
              <li>Material: Full-grain leather</li>
              <li>Capacity: 20L</li>
              <li>Warranty: 2 years</li>
            </ul>
          </section>
        </div>
      </div>

      <section className="tabs">
        <div className="tab">Description</div>
        <div className="tab">Reviews</div>
        <div className="tab">Related</div>
      </section>
    </div>
  );
}
