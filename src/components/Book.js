import React, {Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './Book.css';
import Coin from "./Coin";
import Example from "./Example"
import { makeStyles } from '@material-ui/core/styles';
import {Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '12px',
  },

  }));

function Book( {cart, setCart} ) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const classes = useStyles();
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );



  const saveData = (coin) =>{
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => coin.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...coin,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    //console.log("hi")

  }
  


  return (
    <div className='coin-app'>
      <Example />
      <div className='coin-search'>
      <br />
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search by name'
          />
        </form>
      </div>
      {filteredCoins.map((coin, idx) => {
        return (
          <Fragment>
            <Coin
            key={idx}
            id={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            
          />
          <div className="button">
            <Button className={classes.button} variant="contained" color="primary" 
              onClick={() => saveData(coin)}>
              Save Data
            </Button>
        </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Book;
