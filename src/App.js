import FormView from "./components/FormView";
import Search from "./components/Search";
import NumberGeneration from "./components/NumberGeneration";
import FilterData from "./components/FilteredData";
import './index.css'
function App() {
  return (
  <>
  <h1 className="text-center font-bold">Arxiu Search</h1>
  {/* <FormView/> */}
  <Search/>
  {/* <NumberGeneration/> */}
  <FilterData/>
  </>
  );
}

export default App;
