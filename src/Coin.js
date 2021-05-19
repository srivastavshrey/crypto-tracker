import React from "react";

import './Coin.css'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (

        <tr>
            <td><img src={image} alt="crypto" /></td>
            <td><h1>{name}</h1></td>
            <td><p className="crypto-symbol">{symbol}</p></td>
            <td><p className="crypto-price">
                &#8377; {price}</p></td>
            <td><p className="crypto-volume">
                &#8377; {volume.toLocaleString()}</p></td>
            <td>{priceChange < 0 ? (
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
                <p className="coin-percent green">+{priceChange.toFixed(2)}%</p>
            )}</td>
            <td><p className="crypto-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p></td>
        </tr>


    );
};

export default Coin;
