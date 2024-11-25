import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <button className="button-green trans-button">Click Me</button>
        <button className="button-red">Click Me</button>
        <button className="button-blue">Click Me</button>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="col-baru">
          <p>1</p>
        </div>
        <div className="col-baru">
          <p>2</p>
        </div>
        <div className="col-baru">
          <p>3</p>
        </div>
        <div className="col-baru">
          <p>4</p>
        </div>
        <div className="col-baru">
          <p>5</p>
        </div>
      </div>

      <div className="w-full h-36 bg-biru">Warna baru</div>
    </>
  );
}

export default App;
