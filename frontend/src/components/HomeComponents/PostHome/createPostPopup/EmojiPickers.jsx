import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useState } from "react";
import Feeling from "../../../../svg/Feeling";

const EmojiPickers = ({ text, setText, textRef }) => {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

  const handleEmoji = ({ emoji }, e) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  return (
    <div className=" cursor-pointer relative">
      <div onClick={() => setPicker((prev) => !prev)}>
        <Feeling />
      </div>
      {picker && (
        <div className=" absolute -top-[460px] -left-[300px]">
          <EmojiPicker onEmojiClick={handleEmoji} />
        </div>
      )}
    </div>
  );
};

export default EmojiPickers;
