import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [ceasarMsg, setCeasar] = useState("");
  const [msg, setMsg] = useState("");
  const [shift, setShift] = useState(2);

  async function ceasar() {
    setCeasar(await invoke("ceasar", { msg, shift }));
  }

  console.log(ceasarMsg)

  return (
    <div className="container">
      <h1>Welcome to Crypto scripts book!</h1>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          ceasar();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setMsg(e.currentTarget.value)}
          placeholder="Enter a message..."
        />
        <input
          id="shift-input"
          type="number"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          placeholder="Enter a shift..."
        />
        <button type="submit">Encrypt</button>
      </form>

      <p>{ceasarMsg}</p>
    </div>
  );
}

export default App;
