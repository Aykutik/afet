import React, { useEffect } from "react";

function Harita() {
  useEffect(() => {
    const iframe = document.querySelector("#harita-iframe");

    if (iframe) {
      const iframeWidth = window.innerWidth;
      const iframeHeight = window.innerHeight;
      iframe.width = iframeWidth/1.1;
      iframe.height = iframeHeight/1.2;
    }
  }, []);

  return (
    <div className="w-screen flex items-center justify-center">
      <div>
        <iframe
          id="harita-iframe"
          src="https://www.google.com/maps/d/u/1/embed?mid=1KaSZXEaG4D6ItpVSKmeUVgQgQL1P9Zg&ehbc=2E312F"
        ></iframe>
      </div>
    </div>
  );
}

export default Harita;