/* eslint-disable react/no-array-index-key */
import './naturePhotos.css';
import data from './naturePhotos.json';
import Button from '../button/Button';

function NaturePhotos() {
  return (
    <div className="naturePhotos">
      {data.map((piece, index) => {
        return (
          <div className="naturePhotos__imageDiv" key={index}>
            <div
              className="naturePhotos__imageDiv--image"
              style={{ backgroundImage: `URL(${piece.src})` }}
            />
            <header>{piece.header}</header>
            <p>{piece.paragraph}</p>
            <div className="naturePhotos__imageDiv--btn">
              <Button text="Learn More" color="#c7923e" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NaturePhotos;
