import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((res) => {
      setCoins(res.data);
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });



  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-text">Search a Cryptocurrency</h1>
        <form>
          <input
            className="crypto-input"
            placeholder="Search"
            type="text"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="table-container" >
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Price Change(24hr)</th>
              <th>Market Capital</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map(coin => {
              return <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                image={coin.image}
                volume={coin.total_volume}
                symbol={coin.symbol}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap} />


            })}
          </tbody>
        </table>
      </div>

      {/* <Pagination cryptoPerPage={cryptoPerPage} totalPosts={coins.length} paginate={paginate} /> */}
    </div>
  );
}

export default App;
