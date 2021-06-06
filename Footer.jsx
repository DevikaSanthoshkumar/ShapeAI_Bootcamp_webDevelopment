import React from "react";

function Footer() {
  var current_yr = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p> Copyright @ {current_yr} </p>
      </footer>
    </div>
  );
}

export default Footer;
