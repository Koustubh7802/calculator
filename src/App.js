import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // simple eval (not for production)
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div style={{ width: "220px", padding: "20px", background: "#f3f3f3", borderRadius: "10px" }}>
        <div style={{ marginBottom: "10px", padding: "10px", background: "white", borderRadius: "5px", textAlign: "right" }}>
          {input || "0"}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((item) =>
            item === "=" ? (
              <button key={item} onClick={handleCalculate}>{item}</button>
            ) : (
              <button key={item} onClick={() => handleClick(item)}>{item}</button>
            )
          )}
          <button onClick={handleClear} style={{ gridColumn: "span 4", background: "red", color: "white" }}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
