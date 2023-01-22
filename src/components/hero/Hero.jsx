import './hero.css';
import goLeft from '../../images/navigateLeft.png';
import goRight from '../../images/navigateRight.png';
import goldGoRight from '../../images/hero gold move forward icon.png';

// eslint-disable-next-line react/prop-types
function Hero({ text1, text2, text3, text4, spanText, createHeroNav = true }) {
  return (
    <div className="hero">
      <h1 className="text1">
        <span>{text1}</span>
      </h1>
      <h3 className="text2">
        <span>{text2}</span>
      </h3>

      <h1 className="text3">{text3 !== '' ? text3 : ''}</h1>
      <h3 className="text4">
        {text4 !== ''
          ? `${text4} ${(
              <span className="spanText">
                <img src={goldGoRight} alt="photo_of_a_gold_forward_icon" />{' '}
                {spanText}
              </span>
            )}`
          : ''}
      </h3>
      <div className="hero__navigation">
        {createHeroNav ? (
          <>
            <img src={goLeft} alt="navigate_Left" />
            <img src={goRight} alt="navigate_Right" />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Hero;
