import './App.css';
import WholeSearch from './searchNavComponents/wholeSearch'
import './searchNavComponents/search.css'
import './hourlyCarouselBackground/hourlyBackground.css'
import BackgroundMain from'./hourlyCarouselBackground/backgroundMain'
import LocationSection from './locationImageComponents/backgroundImageSection'
import './locationImageComponents/locationImage.css'

function App() {
  return (
    <div className="App">
      <WholeSearch />
      <LocationSection />
      <BackgroundMain />
    </div>
  );
}

export default App;
