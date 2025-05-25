import { useEffect, useState } from 'react';
import axios from 'axios';
import CoinCard from "../components/CoinCard";
import PriceChart from "../components/PriceChart";

import "../App.css";


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 12,
        sparkline: false,
      }
    }).then(res => setCoins(res.data));
  }, []);

  const filtered = coins.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <main style={{ width: "98vw", overflowX: "hidden" }}>
    <div className="app-container">
      <h1>Crypto Observer</h1>

      <p>Where Market Movements Meet Insight – Watch Every Coin Like a Pro.</p>

      <input
        className="search-bar"
        type="text"
        placeholder="Search for a coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>

      <div className="chart-container">
        <select
          value={selectedCoin}
          onChange={(e) => setSelectedCoin(e.target.value)}
          className="dropdown"
        >
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>

        <PriceChart coinId={selectedCoin} />
      </div>
    </div>
  </main>
);

}

export default App;