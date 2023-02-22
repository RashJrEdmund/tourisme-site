import './about.css';
import Heading from '../components/heading/Heading';
import Button from '../components/button/Button';
import downIcon from './aboutImages/down icon.png';
import CreatDivs from './aboutCards/AboutCards';

function About() {
  const aboutBodyTranslate = () => {
    return (
      <div className="aboutBody__translated">
        <div className="aboutBody__ul-div">
          <ul>
            <li>Guests</li>
            <li>
              2 Adult <img src={downIcon} alt="down_icon" />
            </li>
          </ul>
          <ul>
            <li>Date</li>
            <li>
              12-13 April 2021 <img src={downIcon} alt="down_icon" />
            </li>
          </ul>
          <ul>
            <li>Package</li>
            <li>
              All{' '}
              <img className="last__imageIcon" src={downIcon} alt="down_icon" />
            </li>
          </ul>
        </div>
        <div className="aboutBody__translated--btn">
          <Button text="Book Now" color="#c7923e" />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="about__hero">
        <div className="about__hero--col1">
          <div className="about__hero--col1--sub">
            <h1>We are dedicated to providing the best travel experience.</h1>
            <p>Discover the Land of a Thousand Hills</p>
            {aboutBodyTranslate()}
          </div>
        </div>

        <div className="about__hero--col2" />
      </div>

      <div className="about__body">
        <div className="about__body--col1">
          <Heading text3="Welcome to Africa Wizzy Safari" />
          <div className="underline" />
        </div>
        <CreatDivs />
      </div>
    </>
  );
}

export default About;
