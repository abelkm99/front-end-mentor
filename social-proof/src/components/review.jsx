import PropTypes from "prop-types";
Review.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
  offset: PropTypes.number.isRequired,
};
export default function Review({ data, offset = 0 }) {
  console.log(data.image);
  return (
    <div className="review" style={{ marginTop: offset + "rem" }}>
      <div className="profile">
        <div className="avatar">
          <img src={data.image} alt="" />
        </div>
        <div className="name">
          <p>{data.name}</p>
          <p>{data.type}</p>
        </div>
      </div>
      <div className="content">
        <p>{`"${data.comment}" `}</p>
      </div>
    </div>
  );
}
