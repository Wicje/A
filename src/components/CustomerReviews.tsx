// src/components/CustomerReviews.tsx
"use client";

import React from "react";
import "./CustomerReviews.css";

const reviews = [
  {
    quote:
      "Codot helped us rethink our brand from the ground up. Their work exceeded expectations.",
    name: "Sarah Thompson",
    role: "Founder, GreenStudio",
  },
  {
    quote:
      "The team’s design and strategy expertise gave us a clear edge in the market.",
    name: "James Lee",
    role: "CEO, TechNova",
  },
  {
    quote:
      "Professional, visionary, and collaborative. Our go-to partner for all branding.",
    name: "Amara Yusuf",
    role: "Marketing Director, BuildX",
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="customer-reviews">
      <div className="review-header">
      <h2>Customer Reviews</h2>
        <p>Real stories from real customers. See what they are saying</p>
        <h3>01/08 Reviews</h3>
      </div>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="quote">“{review.quote}”</p>
            <div className="author">
              <span className="name">{review.name}</span>
              <span className="role">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

