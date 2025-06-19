import React from "react";

interface CustomVideoProps {
  src: string;
  width?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const CustomVideo: React.FC<CustomVideoProps> = ({
  src,
  width = "100%",
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
}) => {
  return (
    <video
      width={width}
      src={src}
      controls={controls}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default CustomVideo;
