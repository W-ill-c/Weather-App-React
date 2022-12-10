import './App.css';
import WholeSearch from './searchNavComponents/wholeSearch'
import './searchNavComponents/search.css'
import './hourlyCarouselBackground/hourlyBackground.css'
import BackgroundMain from'./hourlyCarouselBackground/backgroundMain'

function App() {
  return (
    <div className="App">
      <WholeSearch />
      <BackgroundMain />
    </div>
  );
}

export default App;
