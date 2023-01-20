import './heading.css';

// eslint-disable-next-line react/prop-types
function Heading({ text1, text2, text3 }) {
  return (
    <div className="heading_component">
      <p className="heading_component__p1">{text1}</p>
      <p className="heading_component__p2">{text2}</p>
      <p className="heading_component__p3">{text3}</p>
    </div>
  );
}

export default Heading;
