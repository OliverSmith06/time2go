import { useState, useEffect } from "react";
import Countdown, { getProgress } from "./components/Countdown";
import ActionButtons from "./components/ActionButtons";
import Modal from "./components/Modal";
import { modalContent } from "./data/content";
import "./App.css";

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [progress, setProgress] = useState(getProgress);

  useEffect(() => {
    const id = setInterval(() => setProgress(getProgress()), 1000);
    return () => clearInterval(id);
  }, []);

  const colorClip = `inset(0 ${(1 - progress) * 100}% 0 0)`;

  return (
    <div className="app">
      <div className="bg bg-bw" />
      <div className="bg bg-color" style={{ clipPath: colorClip }} />
      <div className="bg-overlay" />

      <div className="content">
        <Countdown />
        <ActionButtons onOpen={(key) => setActiveModal(key)} />
      </div>

      <Modal
        content={activeModal ? modalContent[activeModal] : null}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
