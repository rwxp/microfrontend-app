import React, { useState } from "react";

function Secciones() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div>
      <div style={styles.container}>
        <text style={styles.textStyle}>Secciones</text>
      </div>

      <div style={styles.container}>
        <button
          id="todo"
          style={selectedButton === 1 ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick(1)}
        >
          Todo
        </button>
        <button
          id="frutas"
          style={selectedButton === 2 ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick(2)}
        >
          Frutas
        </button>
        <button
          id="verduras"
          style={selectedButton === 3 ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick(3)}
        >
          Verduras
        </button>
        <button
          id="legumbres"
          style={selectedButton === 4 ? styles.selectedButton : styles.button}
          onClick={() => handleButtonClick(4)}
        >
          Legumbres
        </button>
      </div>
    </div>
  );
}

const styles = {
  textStyle: {
    fontSize: 30,
    fontStyle: "italic",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
  },
  button: {
    margin: "0 0px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    border: "#fff", // Elimina el borde
  },
  selectedButton: {
    margin: "0 0px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "#fff", // Elimina el borde
  },
};

export default Secciones;
