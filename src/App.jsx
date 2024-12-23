import Counter from "./components/Counter";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <Counter />
      </main>
      <footer>
        <p>Made by Aziz Ben Lamine</p>
        <a
          href="https://github.com/Aziz-BenLamine"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
