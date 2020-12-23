import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import PortraitImage from "../../assets/images/IMG_0888.jpg";

export default function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima
        voluptate placeat magni rerum aliquam, beatae animi ad reprehenderit
        ipsum ratione molestias accusantium, velit illo quis earum delectus
        adipisci quasi!
      </p>

      <LazyLoadImage src={PortraitImage} />
    </>
  );
}
