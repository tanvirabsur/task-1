'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Review {
  username: string;
  rating: number | string;
  comment: string;
}

interface ProductFormData {
  name: string;
  price: number | string;
  rating: number | string;
  description: string;
  image: string;
  tag: string;
  features: string[];
  reviews: Review[];
}

export default function ProductForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    rating: "",
    description: "",
    image: "",
    tag: "",
    features: [""],
    reviews: [{ username: "", rating: "", comment: "" }],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleReviewChange = (index: number, field: keyof Review, value: string) => {
    const newReviews = [...formData.reviews];
    newReviews[index][field] = value;
    setFormData({ ...formData, reviews: newReviews });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const addReview = () => {
    setFormData({
      ...formData,
      reviews: [...formData.reviews, { username: "", rating: "", comment: "" }],
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="rating" type="number" step="0.1" placeholder="Rating" value={formData.rating} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="tag" placeholder="Tag" value={formData.tag} onChange={handleChange} className="w-full p-2 border rounded" />

        <div>
          <h3 className="font-semibold mb-2">Features</h3>
          {formData.features.map((feature, index) => (
            <input
              key={index}
              placeholder={`Feature ${index + 1}`}
              value={feature}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
          ))}
          <button type="button" onClick={addFeature} className="text-blue-600">+ Add Feature</button>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Reviews</h3>
          {formData.reviews.map((review, index) => (
            <div key={index} className="space-y-2 mb-4 p-2 border rounded">
              <input
                placeholder="Username"
                value={review.username}
                onChange={(e) => handleReviewChange(index, "username", e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Rating"
                value={review.rating}
                onChange={(e) => handleReviewChange(index, "rating", e.target.value)}
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Comment"
                value={review.comment}
                onChange={(e) => handleReviewChange(index, "comment", e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button type="button" onClick={addReview} className="text-blue-600">+ Add Review</button>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}