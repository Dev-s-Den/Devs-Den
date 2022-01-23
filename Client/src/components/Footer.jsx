import React from "react";
import "./Styles/Footer.scss";

export default function Footer(props) {
  return (
    <div className="footer-wrapper">
      <footer className="App-footer">
        <ul>
          <li>
            <h4>Alex Raffa</h4>
            <section className="social-container">
              <a className="github" href="https://github.com/araff-16">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                className="linkedIn"
                href="https://www.linkedin.com/in/alex-raffa/"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </section>
          </li>
          <li>
            <h4>Jose Islas</h4>
            <section className="social-container">
              <a className="github" href="https://github.com/BRB3D">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a className="linkedIn" href="https://www.linkedin.com/in/jaia/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </section>
          </li>
          <li>
            <h4>Nicolas Alkhoury</h4>
            <section className="social-container">
              <a className="github" href="https://github.com/Monsieur-Nico">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                className="linkedIn"
                href="https://www.linkedin.com/in/monsieur-nico/"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className="twitter" href="https://twitter.com/monsieur_nico">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </section>
          </li>
        </ul>
      </footer>
    </div>
  );
}
