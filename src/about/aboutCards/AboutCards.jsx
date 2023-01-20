import './aboutCards.css';
import woodenHouse from '../aboutImages/wooden house.png';
import bridge from '../aboutImages/the bridge.png';
import island from '../aboutImages/green island.png';

function CreatDivs() {
  return (
    <div className="about__cards">
      <div className="card">
        <img src={woodenHouse} alt="a_photo_of_a_wooden_appartment" />
      </div>

      <div className="card">
        <p>
          Welcome to Africa Wizzy Safari, a leading tourism company based in
          Rwanda. We have been in business for over 5 years and are committed to
          providing top-quality tours and services to our clients. Our mission
          is to showcase the beauty and culture of Rwanda to visitors from
          around the world, and to contribute to the sustainable development of
          the country through responsible tourism practices.
        </p>
      </div>

      <div className="card">
        <p>
          At Africa Wizzy safari, we offer a wide range of tours and activities,
          including cultural and historical tours, wildlife safaris, mountain
          gorilla trekking, and more. Our experienced and knowledgeable guides
          will ensure that you have a safe and enjoyable experience while
          exploring the stunning landscapes and rich culture of Rwanda.
        </p>
      </div>

      <div className="card">
        <img src={bridge} alt="a_photo_of_a_wooden_appartment" />
      </div>

      <div className="card">
        <img src={island} alt="a_photo_of_a_wooden_appartment" />
      </div>

      <div className="card">
        <p className="subPCard">
          We are proud to have received numerous awards and accolades for our
          commitment to excellence, including the RDD award and the Excellence
          award.
        </p>

        <p className="subPCard">
          Thank you for choosing Africa Wizzy Safari for your travel needs in
          Rwanda. We look forward to welcoming you on one of our tours soon!
        </p>
      </div>
    </div>
  );
}

export default CreatDivs;
