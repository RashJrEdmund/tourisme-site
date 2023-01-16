import './home.css';
import NavBar from '../components/nav/Navbar';
import Hero from '../components/hero/Hero';
import Button from '../components/button/Button';
import Heading from '../components/heading/Heading';
import NaturePhotos from '../components/naturePhotos/NaturePhotos';
import ChangePageBtns from '../components/changePageBtns/ChangePageBtns';
// import girrafe from '../images/girrafe.png';

import data from '../components/data/Data.json';

import Footer from '../components/footer/Footer';

function createImageDivs() {
  data.map((piece) => {
    return (
      <div className="createdImages__newImage">
        <img src={piece.photo} alt="data_piece_image" />
        <header>{piece.header}</header>
        <p>{piece.paragraph} </p>
      </div>
    );
  }); // real crazy shit going on here!
}

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        text1="Experience the beauty of Rwanda with us"
        text2="Discover the Land of a Thousand Hills"
      />
      <div className="homebody">
        <div className="body__translated">
          <input type="text" placeholder="Search activities or Destinations" />
          <div className="body__ul-div">
            <ul>
              <li>Guests</li>
              <li>2 Adult</li>
            </ul>
            <ul>
              <li>Date</li>
              <li>12-13 April 2021</li>
            </ul>
            <ul>
              <li>Package</li>
              <li>All</li>
            </ul>
          </div>
          <Button text="Book Now" color="#c7923e" />
        </div>
        <Heading
          text1="Chose your Package"
          text2="Select your Best Package for your Travel"
        />
        <NaturePhotos />
        <NaturePhotos />
        <Heading
          text1="Popular Destinations"
          text2="Select Our Best Popular Destinations"
        />
        <ChangePageBtns width="150px" position="flex-end" />

        {/* <div className="createdImageDivs">
          <div className="createdImages__newImage">
            <img src={girrafe} alt="data_piece_image" />
            <header>bla bla bla</header>
            <p> </p>
          </div>
        </div> */}

        <div className="imageDivs">{createImageDivs()}</div>

        <Heading text1="Why us?" text2="Why Travel with Africa wizzy Safari" />
      </div>

      <Footer />
    </>
  );
}

export default Home;
