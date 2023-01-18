import './naturePhotos.css';
import girrafe from '../../images/girrafe.png';
import manChill from '../../images/chill by the lake.png';
import boatOnLake from '../../images/boat on lake.png';
import Button from '../button/Button';

function NaturePhotos() {
  return (
    <div className="naturePhotos">
      <div className="naturePhotos__imageDiv">
        <img src={girrafe} alt="photo_of_girrafe" />
        <header>Akagera National Park</header>
        <p>
          in a range of activities, including game drives, boat safaris, bird
          watching, and nature walks.
        </p>
        <div className="naturePhotos__imageDiv--btn">
          <div className="naturePhotos__imageDiv--subBtn">
            <Button text="Learn More" color="#c7923e" />
          </div>
        </div>
      </div>
      <div className="naturePhotos__imageDiv">
        <img src={manChill} alt="photo_of_man_by_lake" />
        <header>Bisoke Hike</header>
        <p>
          The Bisoke hike is a popular mountain trek in Rwanda, located in the
          Volcanoes National Park . It is one of the most challenging hikes in
          the park.
        </p>
        <div className="naturePhotos__imageDiv--btn">
          <div className="naturePhotos__imageDiv--subBtn">
            <Button text="Learn More" color="#c7923e" />
          </div>
        </div>
      </div>
      <div className="naturePhotos__imageDiv">
        <img src={boatOnLake} alt="photo_of_girrafe" />
        <header>Lake Kivu trip</header>
        <p>
          A trip to Lake Kivu can be a truly unique and memorable experience.
        </p>
        <div className="naturePhotos__imageDiv--btn">
          <div className="naturePhotos__imageDiv--subBtn">
            <Button text="Learn More" color="#c7923e" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NaturePhotos;
