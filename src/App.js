import './App.css';
import WholeSearch from './searchNavComponents/wholeSearch'
import './searchNavComponents/search.css'
import LocationSection from './locationImageComponents/backgroundImageSection'
import './locationImageComponents/locationImage.css'

function App() {
  return (
    <div className="App">
      <WholeSearch />
      <LocationSection />
    </div>
  );
}

export default App;
