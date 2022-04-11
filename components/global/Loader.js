import Image from "next/image";
import pokeBallImage from "../../public/pokeball-image.png";

const Loader = ({...rest}) => {
  return (
    <div data-testid="loader" {...rest} >
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
