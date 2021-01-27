import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsArticles from "./components/NewsArticles/NewsArticles";
import Header from './components/UI/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
        <NewsArticles/>
      </header>
    </div>
  );
}

export default App;
