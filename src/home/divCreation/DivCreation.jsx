import './divCreation.css';
import data from '../../components/data/Data.json';
import vehicleIcon from '../../images/vehicle icon.png';
import checkIcon from '../../images/check icon.png';
import calenderIcon from '../../images/calender icon.png';
import likeIcon from '../../images/like icon.png';
import avatar from '../../images/avatar.png';

const createImageDivs = () => {
  return data.map((piece) => {
    return (
      <div className="createdImages__newImage" key={piece.header}>
        <img src={piece.photo} alt={piece.alt} />
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
      <div className="iconDivs__iconDiv">
        <img src={checkIcon} alt="image_of_a_check_circle" />
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

const createAvatarCards = () => {
  return (
    <div className="avatarCardDivs">
      <div className="avatarCard">
        <img src={avatar} alt="avatar_image" />
        <header>Emma Waston</header>
        <p>
          I recently went on a tour with XYZ Tourism Company and was extremely
          impressed with the level of professionalism and organization.
        </p>
      </div>
      <div className="avatarCard">
        <img src={avatar} alt="avatar_image" />
        <header>Emma Waston</header>
        <p>
          I recently went on a tour with XYZ Tourism Company and was extremely
          impressed with the level of professionalism and organization.
        </p>
      </div>
      <div className="avatarCard">
        <img src={avatar} alt="avatar_image" />
        <header>Emma Waston</header>
        <p>
          I recently went on a tour with XYZ Tourism Company and was extremely
          impressed with the level of professionalism and organization.
        </p>
      </div>
    </div>
  );
};

const buttonsAboveFooter = () => {
  return (
    <div className="buttonsAboveFooter">
      <div className="buttonsAboveFooter__btn" />
      <div className="buttonsAboveFooter__btn" />
      <div className="buttonsAboveFooter__btn" />
    </div>
  );
};

export default {
  createImageDivs,
  createIconCards,
  createAvatarCards,
  buttonsAboveFooter,
};
