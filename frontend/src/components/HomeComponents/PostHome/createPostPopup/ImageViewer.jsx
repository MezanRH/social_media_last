import React, { useRef } from "react";
import EmojiPickers from "./EmojiPickers";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import { CrossIcon } from "../../../../svg/Cross";
import { Media } from "../../../../svg/Media";

const Imageviewer = ({ text, setText, textRef, image, setImage, setShow }) => {
  const chooseFile = useRef(null);
  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((img) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        console.log("image not found");
      }
      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(img);
      renderFiles.onload = (renderImage) => {
        setImage((images) => [...images, renderImage.target.result]);
      };
    });
  };

  console.log(image);

  return (
    <>
      <EmojiPickers
        text={text}
        setText={setText}
        textRef={textRef}
        changePart
      />
      <div className="p-2 border border-line_color rounded-md mb-5">
        <div className="w-full h-[380px] bg-white-100 rounded-md">
          <input
            type="file"
            multiple
            accept="image/jpeg,image/webp,image/gif,image/png"
            className="hidden"
            ref={chooseFile}
            onChange={handleImageUpload}
          />
          {image && image.length ? (
            <div className=" relative">
              <div className="absolute top-3 left-3 flex items-center gap-x-3 bg-white rounded-md p-2 cursor-pointer font-noto">
                <Media />
                <span
                  className="font-normal text-sm text-black"
                  onClick={() => chooseFile.current.click()}
                >
                  Add photos/videos
                </span>
              </div>
              <div
                className=" absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex justify-center items-center bg-white cursor-pointer"
                onClick={() => setImage([])}
              >
                <CrossIcon />
              </div>
              <div
                className={`${
                  image.length === 1
                    ? "overflow-hidden w-full h-full"
                    : image.length === 2
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : image.length === 3
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : image.length === 4
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : image.length >= 5
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : "overflow-hidden"
                }`}
              >
                {image.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className={`object-cover w-full h-full ${
                      image.length === 3
                        ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                        : image.length === 4 &&
                          "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"
                    }`}
                    alt="image"
                  />
                ))}
                {image.length >= 5 && (
                  <div className=" absolute bottom-[50px] right-[85px] -translate-x-[50%] translate-y-[50%] w-12 h-12 bg-white rounded-full flex justify-center items-center">
                    <span className="font-noto font-bold text-base text-black">
                      +{image.length - 4}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className=" relative flex items-center justify-center h-full">
              <div
                className=" absolute top-2 right-2 text-secondary_color cursor-pointer"
                onClick={() => setShow(false)}
              >
                <CircleCloseIcon />
              </div>
              <div
                className="flex flex-col items-center font-noto cursor-pointer"
                onClick={() => chooseFile.current.click()}
              >
                <div className="w-10 h-10 rounded-full cursor-pointer bg-black flex items-center justify-center text-white">
                  <Media />
                </div>
                <div className="mt-3">
                  <p className="font-semibold text-base text-center">
                    Add photos/videos
                  </p>
                  <p className="font-semibold text-base text-center">
                    or drag and drop
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Imageviewer;
