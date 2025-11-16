import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contador: {count}</h1>
      <button style={styles.button} onClick={incrementarContador}>
        Clique aqui
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "18px",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Contador;
