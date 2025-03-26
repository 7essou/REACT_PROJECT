import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex flex-col items-center">
      <ReactStars
      value={1}
        count={5}
        size={10}
        activeColor="#ffd700"
      />
     
    </div>
  );
};

export default StarRating;

