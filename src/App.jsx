import { useState } from "react";
import "./App.css";
import ButtonPhrase from "./components/ButtonPhrase";
import PhrasesCard from "./components/PhrasesCard";
import AuthorCard from "./components/AuthorCard";
import Contact from "./components/Contact";
import phrasesList from "./utils/phrases.json";
import getRandomElementFromArray from "./utils/randomElementFromArray";
import findAuthorOfPhrase from "./utils/authorPhrase";

const arrBackground = [1, 2, 3, 4];

function App() {
  const initialPhrase = getRandomElementFromArray(phrasesList);
  const initialPath = getRandomElementFromArray(arrBackground);

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase);
  const [pathRandom, setPathRandom] = useState(initialPath);


  const objStyle = {
    backgroundImage: `url('/images/fondo${pathRandom}.png')`
  };

  const author = findAuthorOfPhrase(phraseRandom.phrase, phrasesList);


  return (
    <main
      style={objStyle}
      className="app h-screen bg-center bg-cover bg-no-repeat flex flex-col items-center"
    >
      <h1 className="app__title font-title text-white font-black text- text-stroke-3 text-7xl tracking-tighter mt-20">
        GALLETAS DE LA <span className="font-title block ml-14">FORTUNA</span>
      </h1>
      <ButtonPhrase
        setPhraseRandom={setPhraseRandom}
        setPathRandom={setPathRandom}
        arrBackground={arrBackground}
      />
      <PhrasesCard phraseRandom={phraseRandom} />
      <AuthorCard author={author} />
      <Contact />
    </main>
  );
}

export default App;
