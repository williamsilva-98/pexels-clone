import React, { useState, useEffect } from "react";
import "./styles.scss";
import PexelsAPi from "../../Api/pexels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [imageHeader, setImageHeader] = useState("");

  useEffect(() => {
    const getCuratedPhoto = async () => {
      const res = await PexelsAPi.getCuratedPhoto();
      setImageHeader(res.photos[0].src.landscape);
    };

    getCuratedPhoto();
  }, []);

  return (
    <header>
      {imageHeader && <img src={imageHeader} className="image-header" />}
      <div className="center-container">
        <div className="content">
          <h1>
            As melhores fotos profissionais e vídeos gratuitos compartilhados
            por criadores talentosos.
          </h1>
          <form>
            <input type="text" placeholder="Buscar fotos e vídeos gratuitos" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <p>
            <span>Sugestões:</span> cuidados de saúde, aperto de mão, socorro,
            comunicação, rede, panquecas, mais
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
