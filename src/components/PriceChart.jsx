import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const PriceChart = ({ coinId }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!coinId) return;

    axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: "usd",
        days: 7
      }
    }).then(res => {
      const labels = res.data.prices.map(p => new Date(p[0]).toLocaleDateString());
      const data = res.data.prices.map(p => p[1]);

      setChartData({
        labels,
        datasets: [{
          label: `${coinId} Price (7 Days)`,
          data,
          borderColor: "#4bc0c0",
          fill: false
        }]
      });
    });
  }, [coinId]);

  return (
    <>
      <h2 style={{ textAlign: "center", color: "#f5aaff" }}>
        📈 {coinId.charAt(0).toUpperCase() + coinId.slice(1)} Price Chart
      </h2>
      {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
    </>
  );
};

export default PriceChart;
