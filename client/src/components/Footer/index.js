import React from "react";

function Footer({ status }) {
  return (
    <footer
      className="bg-light text-center text-lg-start mt-5"
      style={
        status
          ? { bottom: 0, left: 0, width: "100%", position: "absolute" }
          : { position: "relative" }
      }
    >
      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright: {"   "}
        <a className="text-dark" href="http://adambirgenheier.com/">
          AdamBirgenheier.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
