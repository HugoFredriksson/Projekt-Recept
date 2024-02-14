import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul className='grid'>
            <li><a>Hem</a></li>
            <li><a>Recept</a></li>
            <li><a>Lägg Till Recept</a></li>
            <li><a>Profil</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Recept</h1>
        <span id='RecipeContainer'></span>
        <span id='CommentContainer'>
          <h2>Kommentarer:</h2>
        </span>
        <form id='form_addComment'>
            <label>Lägg Till Kommentar:</label><br></br>
            <input for='comment' type='text' id='comment'></input><br></br>
            <button type='submit'>Lägg Till Kommentar</button>
        </form>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
