import { useState } from "react";
import errorImg from "../Assets/404.png";
import errorImgLazy from "../Assets/404.png";

const NotFound = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex justify-evenly h-[80vh] items-center mt-auto relative">
      <p className="text-[60px] text-blue-400 absolute top-0 left-0 ml-12 mt-12">
        NOT FOUND
      </p>
      {loaded ? null : (
        <img
          src={errorImgLazy}
          className="mt-auto w-[35%] z-10"
          alt="404 NOT FOUND"
        />
      )}
      <img
        src={errorImg}
        className={loaded ? "w-[35%] z-10 mt-auto" : "hidden"}
        alt="404 NOT FOUND"
        onLoad={() => setLoaded(true)}
      />
      <p className="text-[60px] text-blue-400 absolute bottom-0 right-0 mr-12 mb-12">
        DEAD END
      </p>
    </div>
  );
};

export default NotFound;
