import './divCreation.css';
import data from '../../components/data/Data.json';
import vehicleIcon from '../../images/vehicle icon.png';
import checkIcon from '../../images/check icon.png';
import calenderIcon from '../../images/calender icon.png';
import likeIcon from '../../images/like icon.png';

const createImageDivs = () => {
  return data.map((piece) => {
    return (
      <div className="createdImages__newImage" key={piece.header}>
        <img src={piece.photo} alt="each_card_image" />
        <header>{piece.header}</header>
        <p>{piece.paragraph} </p>
      </div>
    );
  }); // real crazy shit going on here!
};

const createIconCards = () => {
  return (
    <div className="iconDivs">
      <div className="iconDivs__iconDiv">
        <img src={vehicleIcon} alt="image_of_a_vehicle_icon" />
        <p>100+ tours around Rwanda</p>
      </div>
      <div className={checkIcon}>
        <img src="" alt="image_of_a_check_circle" />
        <p>100% Trusted Travel agency</p>
      </div>
      <div className="iconDivs__iconDiv">
        <img src={calenderIcon} alt="image_of_a_chech_circle" />
        <p>10years of travel experience</p>
      </div>
      <div className="iconDivs__iconDiv">
        <img src={likeIcon} alt="image_of_a_chech_circle" />
        <p>90% of travelors are happy</p>
      </div>
    </div>
  );
};

export default {
  createImageDivs,
  createIconCards,
};
