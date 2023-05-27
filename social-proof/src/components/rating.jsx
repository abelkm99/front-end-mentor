import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Star from "../assets/icon-star.svg";
Rating.propTypes = {
  data: PropTypes.string.isRequired,
  num_stars: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};
export default function Rating({ data, num_stars, offset = 0 }) {
  const [newOffSet, setOffset] = useState(offset);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 775) {
        setOffset(0);
      } else if (width < 1000) {
        setOffset(offset - width / 30);
      } 
      else if (width < 1200) {
        setOffset(offset - width / 50);
      }
      else {
        setOffset(offset - 15)
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });
  let stars = new Array(num_stars).fill(0);
  return (
    <div className="rating" style={{ marginLeft: newOffSet + "rem" }}>
      <div className="stars">
        {stars.map((_, Key) => {
          return <img key={Key} src={Star} alt="" />;
        })}
      </div>
      <p>{data}</p>
    </div>
  );
}
