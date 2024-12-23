import "./App.css";
import { Products } from "./components/Products/products";
import { Searcher } from "./components/Searcher/searcher";
import { SearchTabs } from "./components/SearchTabs/searchTabs";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchTabs />
        <Searcher />
        <Products />
      </div>
    </div>
  );
}

export default App;
