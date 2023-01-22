import './galleryPhotos.css';
import data from './galleryPhotosData.json';

const renderGalleryPhotos = () => {
  return data.map((piece) => {
    return piece.map((subPiece) => {
      return (
        <div className="galleryPhotos__rowCard">
          <div className="rowCard__mainCol1">
            <div className="mainCol1__subCol1">
              <div
                className="subOfSub1"
                style={{ backgroundImage: `URL(${subPiece.src})` }}
              />
              <div
                className="subOfSub2"
                style={{ backgroundImage: `URL(${subPiece.src})` }}
              />
            </div>

            <div
              className="mainCol1__subCol2"
              style={{ backgroundImage: `URL(${subPiece.src})` }}
            />
          </div>

          <div className="rowCard__mainCol2">
            <div
              className="mainCol2__subCol1"
              style={{ backgroundImage: `URL(${subPiece.src})` }}
            />
            <div
              className="mainCol2__subCol2"
              style={{ backgroundImage: `URL(${subPiece.src})` }}
            />
          </div>

          <div className="rowCard__mainCol3">
            <div
              className="mainCol3__subCol1"
              style={{ backgroundImage: `URL(${subPiece.src})` }}
            />
            <div className="mainCol3__subCol2">
              <div
                className="subOfSub1"
                style={{ backgroundImage: `URL(${subPiece.src})` }}
              />
              <div
                className="subOfSub2"
                style={{ backgroundImage: `URL(${subPiece.src})` }}
              />
            </div>
          </div>
        </div>
      );
    });
  });
};

function GalleryPhotos() {
  return <div className="galleryPhotos">{renderGalleryPhotos()}</div>;
}

export default GalleryPhotos;
