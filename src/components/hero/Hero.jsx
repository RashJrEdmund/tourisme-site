import './hero.css';
import goLeft from '../../images/navigateLeft.png';
import goRight from '../../images/navigateRight.png';

// eslint-disable-next-line react/prop-types
function Hero({ text1, text2 }) {
  return (
    <div className="hero">
      <h1>{text1}</h1>
      <h3>{text2}</h3>
      <div className="hero__navigation">
        <img src={goLeft} alt="navigate_Left" />
        <img src={goRight} alt="navigate_Right" />
      </div>
    </div>
  );
}

export default Hero;
