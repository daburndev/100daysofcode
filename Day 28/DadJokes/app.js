const jokes = document.querySelector("#jokes");
const buttonJoke = document.querySelector("#joke");
const buttonBTC = document.querySelector("#BTC");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const addBTC = async () => {
  const priceBTC = await priceOfBTC();
  const newLI = document.createElement("LI");
  newLI.append(priceBTC);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

buttonJoke.addEventListener("click", addNewJoke);



const priceOfBTC = async () =>{
  try{
    const res = await axios.get('http://api.coinlayer.com/api/live?access_key=759e33b51225e703b685637ea35cf072');
    return res.data.rates.BTC;
  } catch (e) {
    return "NO BTC PRICE! SORRY :(";
  }
};

buttonBTC.addEventListener("click", addBTC);

