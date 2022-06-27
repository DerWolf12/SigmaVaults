import { useAddress, useMetamask,useToken,useNetworkMistmatch } from '@thirdweb-dev/react';
import React, { useEffect, useState } from "react";

const App = () => {
  // Use the hooks thirdweb give us.
  const [amount,setamount] = useState('');
  const [gif,setgif]= useState('');
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);
  const token = useToken("0xbbb5faa47c2b2265b3279fced4854b22959a8946")
  async function balance() {
    var amount = await token.balance();
    console.log("test")
    console.log(amount.displayValue);
    setamount(Math.trunc(amount.displayValue));
    if(amount.displayValue<2368149309){
      var gif ="https://media.giphy.com/media/xTiTnFgu4SKBxIaZLq/giphy.gif";
      console.log("NIgga u poor?");
      var lol;
    };
    if(amount.displayValue>2368149309){
      var gif ="https://media.giphy.com/media/3ohhwytHcusSCXXOUg/giphy.gif";
      console.log("NIgga u rich af");
    };
    setgif(gif);
  };
  if (!address) {
    return (
      <div className="landing">
        <h1>SIGMA VAULTs</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your WALLET TO START EARNING
        </button>
      </div>
    );
  }
  balance();
  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>SIGMA VAULTs</h1>
      <h3>This is your WALLET:</h3>
      <p className="title">{address}</p>
      <h3>👀 AMOUNT OF LP tokens:</h3>
      <p className="title">{amount}</p>
      <img src={gif} />
    </div>);
}

export default App;
