import './galleryPhotos.css';
// import data from './galleryPhotosData.json';

import photo1P1 from '../galleryData/photo 1-1.png';
import photo1P2 from '../galleryData/photo 1-2.png';
import photo1P3 from '../galleryData/photo 1-3.png';
import photo1P4 from '../galleryData/photo 1-4.png';
import photo1P5 from '../galleryData/photo 1-5.png';
import photo1P6 from '../galleryData/photo 1-6.png';
import photo1P7 from '../galleryData/photo 1-7.png';
import photo1P8 from '../galleryData/photo 1-8.png';

const renderGalleryPhotos = () => {
  /* return data.map((piece) => {
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
  }); */
  <div className="galleryPhotos__rowCard">
    <div className="rowCard__mainCol1">
      <div className="mainCol1__subCol1">
        <div
          className="subOfSub1"
          // style={{ backgroundImage: `URL(${photo1_1})` }}
        >
          <img src={p} alt="" />
        </div>
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
  </div>;
};

function GalleryPhotos() {
  return <div className="galleryPhotos">{renderGalleryPhotos()}</div>;
}

export default GalleryPhotos;
