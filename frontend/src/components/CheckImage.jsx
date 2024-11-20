import { useState, useEffect } from "react";

export default function CheckImage({ src }) {
  const defaultImage =
    "https://cdn.class101.net/images/66ee24e2-70af-4666-8143-0d9b0d2279f3";
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    if (!src) {
      setImageSrc(defaultImage);
      return;
    }

    const img = new Image();
    img.src = src;

    img.onload = function () {
      // 이미지 크기가 매우 작거나, 가로 세로 비율이 비정상적인 경우 체크
      if (
        this.width < 10 ||
        this.height < 10 ||
        this.width / this.height > 5 ||
        this.height / this.width > 5
      ) {
        setImageSrc(defaultImage);
      }
    };

    img.onerror = () => {
      setImageSrc(defaultImage);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt="thumbnail"
      className="h-full w-full object-cover object-center"
      onError={() => setImageSrc(defaultImage)}
    />
  );
}
