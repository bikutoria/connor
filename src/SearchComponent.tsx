import { useEffect } from "react";
//import "./App.css";
import ResultList from "./components/ResultList";
import SearchBox from "./components/SearchBox";
import Facet from "./components/Facet";
import {
  searchBox as SearchBoxController,
  resultList as ResultListController,
  facet as FacetController,
} from "./controllers/controllers";
import { headlessEngine } from "./Engine";

function App() {
  useEffect(() => {
    headlessEngine.executeFirstSearch();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        {/*<img src={require("./assets/search.svg").default} alt="search" />*/}
        <div className="search-section">
          <SearchBox controller={SearchBoxController} />
        </div>
      </header>
      <div className="app-body">
        <div className="main-section">
          <div className="facet-section column">
            <Facet controller={FacetController} title="Facets" />
          </div>
          <div className="results-section column">
            <ResultList controller={ResultListController} />
  </div>
        </div>
      </div>
    </div>
  );
}

export default App;
