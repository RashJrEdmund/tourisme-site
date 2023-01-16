/* eslint-disable react/button-has-type */
import './changePageBtns.css';

// eslint-disable-next-line react/prop-types
function ChangePageBtns({ width, position }) {
  return (
    <div
      className="changePageBtn"
      style={{ maxWidth: `${width}`, alignSelf: `${position}` }}
    >
      <button className="changePageBtn__btn1">&#60;</button>
      <button className="changePageBtn__btn2">&#62;</button>
    </div>
  );
}

export default ChangePageBtns;
