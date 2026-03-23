const buttons = [
  { key: "hotel", emoji: "🏨", label: "Hotel" },
  { key: "eat", emoji: "🍜", label: "Places to Eat" },
  { key: "places", emoji: "🗺️", label: "Places to Go" },
  { key: "misc", emoji: "📋", label: "Misc" },
];

export default function ActionButtons({ onOpen }) {
  return (
    <div className="action-buttons">
      {buttons.map((btn) => (
        <button
          key={btn.key}
          className="action-btn"
          onClick={() => onOpen(btn.key)}
        >
          <span className="action-emoji">{btn.emoji}</span>
          <span className="action-label">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
