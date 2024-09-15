import React, { useEffect, useRef, useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import Addpost from "./Addpost";
import EmojiPickers from "./EmojiPickers";
import Imageviewer from "./Imageviewer";

const CreatePostPopup = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([]);
  const textRef = useRef(null);

  return (
    <div className=" absolute top-0 left-0 w-full bg-blur h-screen z-20 flex justify-center items-center">
      <div className="w-[35%] bg-white shadow-md">
        <div className="border-b border-white-100 p-2 relative">
          <h3 className="font-noto font-bold text-lg text-black text-center">
            Create Post
          </h3>
          <div className=" absolute top-1 right-2 text-secondary_color cursor-pointer">
            <CircleCloseIcon />
          </div>
        </div>
        <div className="px-3 py-4">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 rounded-full bg-white-100"></div>
            <h4 className="font-noto font-bold text-base text-black">
              One Year Academy
            </h4>
          </div>
          {!show ? (
            <>
              <EmojiPickers text={text} textRef={textRef} setText={setText} />
            </>
          ) : (
            <>
              <Imageviewer
                text={text}
                textRef={textRef}
                setText={setText}
                image={image}
                setImage={setImage}
                setShow={setShow}
              />
            </>
          )}

          <div>
            <Addpost setShow={setShow} show={show} />
          </div>

          <div className="mt-3">
            <button className="w-full bg-white-100 p-2 font-noto font-semibold text-black text-base rounded-md hover:text-white hover:bg-black transition-all ease-linear duration-100">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopup;
