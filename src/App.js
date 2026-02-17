import React, { useState } from "react";
import FormPage from "./FormPage";
import HomePage from "./HomePage";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("form");
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
    setCurrentPage("home");
  };

  const handleBackToForm = () => {
    setCurrentPage("form");
  };

  return (
    <div className="App">
      <nav className="navigation">
        <button
          className={`nav-button ${currentPage === "form" ? "active" : ""}`}
          onClick={() => setCurrentPage("form")}
        >
          📝 Form
        </button>
        <button
          className={`nav-button ${currentPage === "home" ? "active" : ""}`}
          onClick={() => setCurrentPage("home")}
          disabled={!userData}
        >
          🏠 Home
        </button>
      </nav>

      {currentPage === "form" ? (
        <FormPage onSubmit={handleFormSubmit} />
      ) : (
        <HomePage userData={userData} onBack={handleBackToForm} />
      )}
    </div>
  );
}
