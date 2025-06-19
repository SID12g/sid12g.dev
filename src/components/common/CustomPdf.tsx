import React from "react";

interface CustomPdfProps {
  src: string;
  width?: string;
  height?: string;
}

const CustomPdf: React.FC<CustomPdfProps> = ({
  src,
  width = "100%",
  height = "600px",
}) => {
  return (
    <embed src={src} type="application/pdf" width={width} height={height}>
      <p>
        It appears you don't have a PDF plugin for this browser. No biggie...
        you can <a href={src}>click here to download the PDF file.</a>
      </p>
    </embed>
  );
};

export default CustomPdf;
