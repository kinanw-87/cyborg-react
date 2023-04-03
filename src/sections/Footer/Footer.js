import "./Footer.css";

const footer = () => {
  return (
    <div className="container">
      <p className="footer-text">
        Copyright © 2036{" "}
        <a href="/#" className="footer-link">
          Cyborg Gaming
        </a>{" "}
        Company. All rights reserved.
        <br />
        Disign:{" "}
        <a
          href="https://templatemo.com"
          className="footer-link"
          target="_blank"
        >
          TemplateMo
        </a>
      </p>
    </div>
  );
};
export default footer;
