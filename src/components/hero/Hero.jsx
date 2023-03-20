/* eslint-disable react/prop-types */
import './hero.css';
import goldGoRight from '../../images/hero gold move forward icon.png';

function Hero({ text1, text2, spanText }) {
  return (
    <div className="hero">
      <h1 className="text1">{text1}</h1>

      <h3 className="text2">
        {text2}
        <img src={goldGoRight} alt="photo_of_a_gold_forward_icon" />
        <span className="spanText">{spanText}</span>
      </h3>
    </div>
  );
}

export default Hero;
