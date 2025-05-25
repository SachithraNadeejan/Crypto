const CoinCard = ({ coin }) => {
  return (
    <div className="coin-card">
      <div className="coin-header">
        <img src={coin.image} alt={coin.name} />
        <div>
          <h2>{coin.name}</h2>
          <p className="symbol">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="coin-details">
        <p><strong>Price:</strong> ${coin.current_price.toLocaleString()}</p>
        <p><strong>24h:</strong> 
          <span className={coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        </p>
        <p><strong>Market Cap:</strong> ${coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CoinCard;
