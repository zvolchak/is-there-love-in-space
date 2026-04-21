import { useEffect, useState } from 'react';
import Button from './Components/Button';
import ListOfPlanets from './Components';
import { getAlienOpinions, getPlanets } from './Requests/api';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [alienOpinion, setAlienOpinion] = useState('');

  useEffect(() => {
    async function loadPlanets() {
      const planetsResponse = await getPlanets();
      setPlanets(planetsResponse);
    }

    loadPlanets();
  }, []);

  async function handleAlienOpinion() {
    const alienOpinions = await getAlienOpinions();
    const randomIndex = Math.floor(Math.random() * alienOpinions.length);
    setAlienOpinion(alienOpinions[randomIndex]);
  }

  return (
    <div className="App">
      <main className="App-header">
        <h1>Is There Love in the Milky Way?</h1>
        <ListOfPlanets planets={planets} />
        <div className="alien-actions">
          <Button onClick={handleAlienOpinion}>Ask Aliens</Button>
          {alienOpinion ? (
            <p className="alien-opinion">Alien transmission: {alienOpinion}</p>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;
