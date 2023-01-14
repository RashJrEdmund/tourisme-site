import './home.css';
import NavBar from '../components/nav/Navbar';
import Hero from '../components/hero/Hero';
import Button from '../components/button/Button';
import Heading from '../components/heading/Heading';
import NaturePhotos from '../components/naturePhotos/NaturePhotos';

import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        text1="Experience the beauty of Rwanda with us"
        text2="Discover the Land of a Thousand Hills"
      />
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

      <Footer />
    </>
  );
}

export default Home;
