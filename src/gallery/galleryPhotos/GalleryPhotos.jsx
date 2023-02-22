import './galleryPhotos.css';
// import data from './galleryPhotosData.json';

import galleryImg from '../galleryImages/galleryImages.json';

// import photo1P1 from '../galleryImages/photo 1-1.png';
// import photo1P2 from '../galleryImages/photo 1-2.png';
// import photo1P3 from '../galleryImages/photo 1-3.png';
// import photo1P4 from '../galleryImages/photo 1-4.png';
// import photo1P5 from '../galleryImages/photo 1-5.png';
// import photo1P6 from '../galleryImages/photo 1-6.png';
// import photo1P7 from '../galleryImages/photo 1-7.png';
// import photo1P8 from '../galleryImages/photo 1-8.png';

const renderGalleryPhotos = () => {
  /* return data.map((piece, index) => {
    return piece.map((subPiece) => {
      return (
        <div className="galleryPhotos__rowCard" key={index}>
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

  return (
    <div className="galleryBody__photos">
      <div className="galleryPhotos__rowCard">
        <div className="rowCard__mainCol1">
          <div className="mainCol1__subCol1">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[0].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[1].src})` }}
            />
          </div>

          <div
            className="mainCol1__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[2].src})` }}
          />
        </div>

        <div className="rowCard__mainCol2">
          <div
            className="mainCol2__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[3].src})` }}
          />
          <div
            className="mainCol2__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[4].src})` }}
          />
        </div>

        <div className="rowCard__mainCol3">
          <div
            className="mainCol3__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[5].src})` }}
          />
          <div className="mainCol3__subCol2">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[6].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[7].src})` }}
            />
          </div>
        </div>
      </div>

      {/* Second row */}

      <div className="galleryPhotos__rowCard">
        <div className="rowCard__mainCol1">
          <div className="mainCol1__subCol1">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[8].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[9].src})` }}
            />
          </div>

          <div
            className="mainCol1__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[10].src})` }}
          />
        </div>

        <div className="rowCard__mainCol2">
          <div
            className="mainCol2__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[11].src})` }}
          />
          <div
            className="mainCol2__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[12].src})` }}
          />
        </div>

        <div className="rowCard__mainCol3">
          <div
            className="mainCol3__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[13].src})` }}
          />
          <div className="mainCol3__subCol2">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[14].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[15].src})` }}
            />
          </div>
        </div>
      </div>

      {/* Third row */}

      <div className="galleryPhotos__rowCard">
        <div className="rowCard__mainCol1">
          <div className="mainCol1__subCol1">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[16].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[17].src})` }}
            />
          </div>

          <div
            className="mainCol1__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[18].src})` }}
          />
        </div>

        <div className="rowCard__mainCol2">
          <div
            className="mainCol2__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[19].src})` }}
          />
          <div
            className="mainCol2__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[20].src})` }}
          />
        </div>

        <div className="rowCard__mainCol3">
          <div
            className="mainCol3__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[21].src})` }}
          />
          <div className="mainCol3__subCol2">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[22].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[23].src})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function GalleryPhotos() {
  return <div className="galleryPhotos">{renderGalleryPhotos()}</div>;
}

export default GalleryPhotos;
