import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews }) {
  return (
    <div className="d-flex row justify-content-center flex-wrap">
      {reviews.map((review, index) => {
        return (
          <ReviewCard
            name={review.name}
            vote={review.vote}
            text={review.text}
            key={index}
          />
        );
      })}
    </div>
  );
}
