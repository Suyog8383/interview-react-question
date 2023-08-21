import { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  const onClickHandle = () => {
    console.log("@SN ", inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" placeholder="ex..." ref={inputRef} />
      <button onClick={onClickHandle}>Click</button>
    </div>
  );
}

export default UseRef;
