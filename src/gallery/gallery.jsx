import './gallery.css';
import Hero from '../components/hero/Hero';
import Button from '../components/button/Button';
import GalleryPhotos from './galleryPhotos/GalleryPhotos';

function Gallery() {
  return (
    <>
      <Hero text3="Gallery" text4="Home" spanText="Gallery" />

      <div className="galleryBody">
        <div className="gallery__btn">
          <Button text="Open Instagram" color="#c7923e" />
        </div>
        <GalleryPhotos />
      </div>
    </>
  );
}

export default Gallery;
