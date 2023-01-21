import './galleryPhotos.css';
// import data from './galleryPhotosData.json';
import girrafe from '../../images/girrafe.png';

function GalleryPhotos() {
  /* const renderGalleryPhotos = () => {
    return (
      <>
        <p>go</p>
        <div>go</div>
      </>
    );
  }; */

  return (
    <div className="galleryPhotos">
      <div className="galleryPhotos__rowCard">
        <div className="rowCard__mainCol1">
          <div className="mainCol1__subCol1">
            <div className="subOfSub1">
              <img src={girrafe} alt="data" />
            </div>
            <div className="subOfSub2">
              <img src={girrafe} alt="data" />
            </div>
          </div>

          <div className="mainCol1__subCol2">
            <img src={girrafe} alt="data" />
          </div>
        </div>

        <div className="rowCard__mainCol2">
          <div className="mainCol2__subCol1">
            <img src={girrafe} alt="data" />
          </div>
          <div className="mainCol2__subCol2">
            <img src={girrafe} alt="data" />
          </div>
        </div>

        <div className="rowCard__mainCol3">
          <div className="mainCol3__subCol1">
            <img src={girrafe} alt="data" />
          </div>
          <div className="mainCol3__subCol2">
            <div className="subOfSub1">
              <img src={girrafe} alt="data" />
            </div>
            <div className="subOfSub2">
              <img src={girrafe} alt="data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPhotos;
