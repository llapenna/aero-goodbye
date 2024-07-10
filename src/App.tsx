import { useState } from "react";
import "./App.css";
import { Line } from "./Line";
import { LINES } from "./utils/constants";

function App() {
  const [lineIndex, setLineIndex] = useState(0);

  const next = () => {
    setLineIndex(lineIndex + 1);
  };

  return (
    <main>
      {LINES.filter((_, i) => i <= lineIndex).map((l, i) =>
        i === lineIndex ? (
          <Line key={l.text} onComplete={next} {...l} />
        ) : (
          <Line key={l.text} {...l} />
        )
      )}
    </main>
  );
}

export default App;
