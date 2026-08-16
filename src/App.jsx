import { useEffect } from "react";
import "./App.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import Portfolio from "./Portfolio";

function App() {
  useEffect(() => {
    document.title = "Akshay Bhawar — Full Stack Developer";
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      <div className="App">
        <Portfolio />
        <Toaster position="bottom-right" />
      </div>
    </ReactLenis>
  );
}

export default App;