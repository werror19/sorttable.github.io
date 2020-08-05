import React from "react";

function modeSelect(props) {
  const smallUrl = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
  const bigUrl = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        margin: '0 auto',
        justifyContent: "space-between"
      }}
    >
      <button
        onClick={() => props.onSelect(smallUrl)}
        className="btn btn-success"
      >
        32 элемента
      </button>
      <button
        onClick={() => props.onSelect(bigUrl)}
        className="btn btn-success"
      >
        1000 элементов
      </button>
    </div>
  );
}

export default modeSelect;
