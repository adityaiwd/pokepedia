import Image from "next/image";
import pokeBallImage from "../../public/pokeball-image.png";
import { jsx, css, keyframes, styled } from "@emotion/react";

const Loader = ({...rest}) => {
  return (
    <div {...rest}>
      <Image
        src={pokeBallImage}
        style={{
          animation: `rotate 1s ease infinite`,
        }}
        alt="loader"
        height={30}
        width={30}
      />
    </div>
  );
};

export default Loader;
