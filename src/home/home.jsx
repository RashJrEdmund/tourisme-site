import './home.css';
import Button from '../components/button/Button';
import Heading from '../components/heading/Heading';
import downIcon from '../images/down icon.png';
import NaturePhotos from '../components/naturePhotos/NaturePhotos';
import ChangePageBtns from '../components/changePageBtns/ChangePageBtns';
import cards from './divCreation/DivCreation';
import goLeft from '../images/navigateLeft.png';
import goRight from '../images/navigateRight.png';

function Home() {
  const homeBodyTranslate = () => {
    return (
      <div className="body__translated">
        <input type="text" placeholder="Search activities or Destinations" />
        <div className="body__ul-div">
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
        <Button text="Book Now" color="#c7923e" />
      </div>
    );
  };

  return (
    <>
      <div className="home__hero">
        <h1 className="text1">
          <span>Experience the beauty of Rwanda with us</span>
        </h1>

        <h3 className="text2">
          <span>Experience the beauty of Rwanda with us</span>
        </h3>

        <div className="home__hero__navigation">
          <img src={goLeft} alt="navigate_Left" />
          <img src={goRight} alt="navigate_Right" />
        </div>
      </div>

      <div className="homebody">
        {homeBodyTranslate()}
        <Heading
          text1="Chose your Package"
          text2="Select your Best Package for your Travel"
        />
        <NaturePhotos />
        <Heading
          text1="Popular Destinations"
          text2="Select Our Best Popular Destinations"
        />
        <ChangePageBtns width="150px" position="flex-end" MarginRight="1rem" />

        <div className="home__imageDivs">{cards.createImageDivs()}</div>

        <Heading text1="Why us?" text2="Why Travel with Africa wizzy Safari" />

        <div className="home__imageDivs">{cards.createIconCards()}</div>

        <Heading
          text1="Our Traveller Say"
          text2="What our clients say about us"
        />

        <div>{cards.createAvatarCards()}</div>

        <div>{cards.buttonsAboveFooter()}</div>
      </div>
    </>
  );
}

export default Home;
