import './naturePhotos.css';
import data from './naturePhotos.json';
import Button from '../button/Button';

function NaturePhotos() {
  const renderNaturePhotos = () => {
    return data.map((piece) => {
      return (
        <div className="naturePhotos__imageDiv">
          <img src={piece.src} alt="photo_of_girrafe" />
          <header>{piece.header}</header>
          <p>{piece.paragraph}</p>
          <div className="naturePhotos__imageDiv--btn">
            <Button text="Learn More" color="#c7923e" />
          </div>
        </div>
      );
    });
  };
  return <div className="naturePhotos">{renderNaturePhotos()}</div>;
}

export default NaturePhotos;
