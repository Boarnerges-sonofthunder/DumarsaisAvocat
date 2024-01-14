import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <div className="logo">
        <img src="../../img/logoMarteau.png" alt="logoD" loading="lazy"/>
      </div>
      <div className="contacte">
        Contactez-nous dès maintenant pour assurer la bonne préparation de votre
        dossier :<br />
        <br />
        Téléphone : 514 296-4104
        <br />
        <br />
        Courriel: Dumarsais.woosevelt@gmail.com
      </div>
      <div className="copyright">
        <span>
          &copy;{new Date().getFullYear()} Justice Petites Créances. Tous droits
          réservés.
        </span>
      </div>
    </div>
  );
};

export default Footer;
