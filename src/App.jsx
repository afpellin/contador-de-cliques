import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111",
            color: "#fff",
            flexDirection: "column",
            gap: "20px",
            fontFamily: "Arial, sans-serif"
        }}>
            <h1>Contador de Cliques</h1>
            <h2>{count}</h2>

            <button
                onClick={() => setCount(count + 1)}
                style={{
                    padding: "12px 25px",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background: "#4CAF50",
                    color: "#fff"
                }}
            >
                Clique +1
            </button>

            <button
                onClick={() => setCount(0)}
                style={{
                    padding: "10px 25px",
                    fontSize: "16px",
                    border: "1px solid #fff",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background: "transparent",
                    color: "#fff"
                }}
            >
                Resetar
            </button>
        </div>
    );
}
