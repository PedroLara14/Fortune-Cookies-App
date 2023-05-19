import getRandomElementFromArray from "../utils/randomElementFromArray"
import phrasesList from "../utils/phrases.json"

const ButtonPhrase = ({ setPhraseRandom, setPathRandom, arrBackground }) => {

  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrasesList)
    setPhraseRandom(newRandomPhrase);
    const newPath = getRandomElementFromArray(arrBackground)
    setPathRandom(newPath);
  }

  return (
      <button
        className="bg-orange-500 text-brown text-lg px-6 py-1 mt-10 border-2 rounded-lg border-amber-950"
        onClick={handleRandomPhrase}
      >
        Probar mi suerte
      </button>

  );
};

export default ButtonPhrase