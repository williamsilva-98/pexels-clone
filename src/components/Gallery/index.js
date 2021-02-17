import React, { useState, useEffect } from "react";
import PexelsApi from "../../Api/pexels";
import "./styles.scss";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getCurratedPhotos = async () => {
      const res = await PexelsApi.getCurated(80);
      setPhotos(res.photos);
    };

    getCurratedPhotos();
  }, []);

  const addImages = (starter, limit) => {
    let images = [];

    for (let i = starter; i < limit; i++) {
      images.push(<img key={photos[i].id} src={photos[i].src.large} />);
    }

    return images;
  };

  return (
    <div className="gallery-section">
      {photos.length > 0 && (
        <div className="row">
          <div className="column">{addImages(0, 20)}</div>
          <div className="column">{addImages(20, 40)}</div>
          <div className="column">{addImages(40, 60)}</div>
          <div className="column">{addImages(60, 80)}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
