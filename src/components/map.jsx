import React from 'react';

const Map = () => {
  return (
    <section className="map">
      <a name="map"></a>
      <h2 className="map__title">Отделения Лига Банка</h2>
      <iframe title="map" className="map__iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3A903677e276cd647a44c0897e60edad9ae34a0ebe73fde4d37f4ca90b4001c09f&amp;source=constructor" width="100%" height="462" style={{border: 0}}></iframe>
    </section>
  );
}

export default Map;
