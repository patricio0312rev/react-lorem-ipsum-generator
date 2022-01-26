import React, { useState } from "react";
import text from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">
          Paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />

        <button type="submit" className="btn">Generate text</button>
      </form>

      <arcile className="lorem-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia! Ipsam enim incidunt quam aspernatur eveniet ut soluta optio! Aspernatur exercitationem dolorem sed illum minima temporibus, libero laboriosam recusandae reiciendis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, mollitia! Ipsam enim incidunt quam aspernatur eveniet ut soluta optio! Aspernatur exercitationem dolorem sed illum minima temporibus, libero laboriosam recusandae reiciendis!</p>
      </arcile>
    </section>
  );
}

export default App;
