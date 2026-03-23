import { useState } from "react";

const TABS = ["xiamen", "sanya"];
const TAB_LABELS = { xiamen: "Xiamen", sanya: "Sanya" };

export default function Modal({ content, onClose }) {
  const [activeTab, setActiveTab] = useState("xiamen");

  if (!content) return null;

  const items = content.tabs[activeTab] || [];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>
            {content.emoji} {content.title}
          </span>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`modal-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
          <div
            className="modal-tabs-indicator"
            data-index={TABS.indexOf(activeTab)}
          />
        </div>
        <div className="modal-body">
          {items.length === 0 ? (
            <p className="modal-empty">Nothing added yet</p>
          ) : (
            items.map((item, i) => (
              <div className="modal-item" key={i}>
                <h3>{item.name}</h3>
                <p>{item.details}</p>
                {item.notes && <p className="modal-note">{item.notes}</p>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
