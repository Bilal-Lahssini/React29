import React, { useState } from 'react';
import styles from '@/styles/secondPage.module.css';

function DetailsButton() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <button className={`${styles.detailsButton} ${showDetails ? styles.active : ''}`} onClick={toggleDetails}>
        Toon Details
      </button>
      {showDetails && (
        <p>
          Antwerpen, een bruisende stad in België, staat bekend om zijn prachtige architectuur, rijke geschiedenis en levendige cultuur. Met talloze bezienswaardigheden in de buurt van het centraal station, is er genoeg te ontdekken. Verken de majestueuze Onze-Lieve-Vrouwekathedraal, geniet van de levendige sfeer op de Grote Markt, ontdek de maritieme geschiedenis in het MAS, verken de trendy wijk Het Eilandje en bewonder de kunstwerken in het Rubenshuis. Met een velofiets kun je op een gemakkelijke en milieuvriendelijke manier de stad verkennen en al deze prachtige plekken ontdekken. Veel plezier met je avontuur in Antwerpen!
        </p>
      )}
    </div>
  );
}

export default DetailsButton;