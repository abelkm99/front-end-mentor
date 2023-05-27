import Colton from "./assets/image-colton.jpg";
import Irene from "./assets/image-irene.jpg";
import Anne from "./assets/image-anne.jpg";

import { Rating, Review } from "./components/index.js";

export default function Home() {
  const ratings = [
    "Rated 5 Stars in Reviews",
    "Rated 5 Stars in Report",
    "Guru Rated 5 Stars in BestTech",
  ];
  const reviews = [
    {
      image: Colton,
      name: "Colton Smith",
      type: "Verified Buyer",
      comment:
        "We needed the same printed design as the one we had ordered a week prior.\
         Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      image: Irene,
      name: "Irene Roberts",
      type: "Verified Buyer",
      comment:
        "Customer service is always excellent and very quick turn around.\
      Completely delighted with the simplicity of the purchase and the speed of delivery.",
    },
    {
      image: Anne,
      name: "Anne Wallace",
      type: "Verified Buyer",
      comment:
        "Put an order with this company and can only praise them\
       for the very high standard. Will definitely use them again and recommend them to everyone!",
    },
  ];

  return (
    <main>
      <div className="container">
        <div className="top-part">
          <div className="description">
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="ratings">
            {ratings.map((rating, index) => (
              <Rating
                key={index}
                data={rating}
                num_stars={5}
                offset={27 + index * 5}
              />
            ))}
          </div>
        </div>
        <div className="reviews">
          {reviews.map((review, index) => (
            <Review key={index} data={review} offset={index * 1.5} />
          ))}
        </div>
      </div>
    </main>
  );
}
