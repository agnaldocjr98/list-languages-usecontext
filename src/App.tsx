import { useState } from "react";
import { useLanguages } from "./Context";

function App() {
  const [newLanguage, setNewLanguage] = useState("");

  const { languages, addLanguages } = useLanguages();

  return (
    <div className="App">
      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
        />
        <button type="button" onClick={() => addLanguages(newLanguage)}>
          Adicionar linguagem
        </button>
      </div>
    </div>
  );
}

export default App;
