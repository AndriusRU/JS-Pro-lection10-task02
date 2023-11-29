// TODO: write your code here
import GameSaving from "./class/game-saving";
import GameSavingLoader from "./class/game-saving-loader";

(async () => {
  // saving объект класса GameSaving
  const saving = GameSavingLoader.load()
  try {
    const data = new GameSaving(JSON.parse(saving));
    return data;
  }
  catch(error) {
    console.log(error);
  }
  
})();