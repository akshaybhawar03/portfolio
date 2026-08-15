import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "@/pages/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "#02060d",
            border: "1px solid rgba(0,200,255,0.4)",
            color: "#e7faff",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.04em",
            borderRadius: 0,
          },
        }}
      />
    </div>
  );
}

export default App;