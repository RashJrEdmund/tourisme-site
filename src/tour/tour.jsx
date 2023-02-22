/* eslint-disable react/no-array-index-key */
import './tour.css';
import data from './tourData.json';
import Hero from '../components/hero/Hero';
import Heading from '../components/heading/Heading';
import Button from '../components/button/Button';
import ChangePageBtns from '../components/changePageBtns/ChangePageBtns';

function Tour() {
  const renderTourPhotos = () => {
    return data.map((piece, index) => {
      return (
        <div className="tourPhotos__imageDiv" key={index}>
          <img src={piece.src} alt="photo_of_girrafe" />
          <header>{piece.header}</header>
          <p>{piece.paragraph}</p>
          <div className="tourPhotos__imageDiv--btn">
            <Button text="Learn More" color="#c7923e" />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Hero text1="Tour Package" text2="Home" spanText="Tour Package" />
      <Heading
        text1="Choose Your Package"
        text2="Select Your Best Package for your Travel"
      />
      <div className="tourBody">
        <div className="tourPhotos">{renderTourPhotos()}</div>
        <div className="tourBody__changePageBtn">
          <ChangePageBtns width="100%" position="flex-end" />
        </div>
      </div>
    </>
  );
}

export default Tour;
