function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        alignSelf: "flex-start",
        padding: "10px 16px",
        border: "1px solid rgba(255, 255, 255, 0.45)",
        borderRadius: "8px",
        background: "rgba(255, 255, 255, 0.08)",
        color: "#ffffff",
        cursor: "pointer",
        fontSize: "0.95rem",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
