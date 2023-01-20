import NaturePhotos from '../components/naturePhotos/NaturePhotos';
import Hero from '../components/hero/Hero';

function Tour(nTimes) {
  const renderTourPhotos = (m) => {
    const template = <NaturePhotos />;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= m; i++) {
      // eslint-disable-next-line no-const-assign
      template += <NaturePhotos />;
    }

    return template;
  };

  return (
    <>
      <Hero />
      {renderTourPhotos(nTimes)};
    </>
  );
}

export default Tour;
