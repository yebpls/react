import React, { useRef, useEffect, useState } from "react";

function Ref() {
  // Tác dụng 1: Dùng để DOM tới một element
  const inputRef = useRef();
  const sectionARef = useRef();
  const sectionBRef = useRef();

  // Tác dụng 2: Để lưu trữ dữ liệu mà khi dữ liệu thay đổi ta không cần component re-render
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const timeoutRef = useRef();

  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      // logic call API
      console.log(evt.target.value);
    }, 300);
  };

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Ref</h1>
      <hr />

      <input
        ref={inputRef}
        value={searchTerm}
        className="form-control"
        placeholder="Username"
        onChange={handleSearch}
      />
      <hr />

      <button onClick={() => countRef.current++}>
        Count Ref: {countRef.current}
      </button>
      <button onClick={() => setCount(count + 1)}>Count State: {count}</button>
      <hr />

      <button onClick={() => sectionARef.current.scrollIntoView()}>
        Section A
      </button>
      <button onClick={() => sectionBRef.current.scrollIntoView()}>
        Section B
      </button>
      <section ref={sectionARef} style={{ height: "500px" }}>
        Section A
      </section>
      <section ref={sectionBRef} style={{ height: "500px" }}>
        Section B
      </section>
    </div>
  );
}

export default Ref;
