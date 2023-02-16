import React from "react";

function harita() {
  return (
    <div className="w-screen flex items-center justify-center">
      <div>
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1KaSZXEaG4D6ItpVSKmeUVgQgQL1P9Zg&ehbc=2E312F"
          width="1250"
          height="700"
        ></iframe>
      </div>
    </div>
  );
}

export default harita;
