import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
const Review = () => {
  const [review, setreview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setreview(data));
  }, []);

  return (
    <div>
      <div className="m-20">
        {review.map((comment) => (
          <div className="border shadow-2xl mb-8 p-3 rounded-md">
            <div className="flex items-center gap-4">
              <div>
                <img src={comment.image} className="w-16 h-16 rounded-full" />
              </div>
              <h1 className="font-bold">{comment.name}</h1>
            </div>
            <div>
              <p className="font-semibold">
                <span className="font-extrabold">Review:</span>{" "}
                {comment.details}
              </p>
              <div>
              <h1 className="font-bold">Rating: {comment.rating}</h1>
                <Rating
                  initialRating={comment.rating}
                  emptySymbol={
                    <AiOutlineStar className="text-xl text-yellow-400" />
                  }
                  fullSymbol={
                    <AiFillStar className="text-xl  text-yellow-400" />
                  }
                  readonly
                ></Rating>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
