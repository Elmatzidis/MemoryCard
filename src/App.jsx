import { useEffect, useState } from "react";
import { Card } from "./components/Card.jsx";
import { DisplayScore } from "./components/ScoreBoard.jsx";
import { GameOver } from "./components/GameOver.jsx";
import { OverLay } from "./components/Overlay.jsx";

export function App() {
  // Card array, scoring system (current Score-HighScore)
  // Selecting each cards id for handleClick function
  const [cards, setCards] = useState([]);
  const [selectedId, setCardId] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // Fisher Yates shuffle algoright used to shuffle the cards after each card clickd
  const shuffleCards = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  // Handles the cards when they are being clicked, checks if the same card has being
  // clicked more than , if it's true then the game ends. Otherwise, updates the scoring
  // system with score+1

  const handleRestart = () => {
    setScore(0);
    setCardId([]);
    setOverlay(false);
    setGameOver(false);
    setCards((previousCards) => shuffleCards(previousCards));
  };
  const handleCard = (id) => {
    if (gameOver) return;
    if (selectedId.includes(id)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setGameOver(true);
      setOverlay(true);
      return;
    } else {
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
    }
    // Sets the id of the card being clicked
    setCardId((previousId) => [...previousId, id]);
    // Shuffles the cards
    setCards((previousCards) => shuffleCards(previousCards));
  };

  useEffect(() => {
    // Fetching the Pokemons that are going to be use
    async function FetchPokomen() {
      const pokemonArray = [];

      try {
        // Api from https://pokeapi.co/
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=10",
        );
        const data = await response.json();
        data.results.forEach((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          pokemonArray.push({
            // Getting specific info from the API
            id: id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          });
        });
      } catch (error) {
        console.error(error);
      }
      setCards(pokemonArray);
    }

    FetchPokomen();
  }, []);

  return (
    <div>
      <div className="HeaderContent">
        {gameOver && (
          <>
            <OverLay />
            <GameOver
              score={score}
              highScore={highScore}
              onRestart={handleRestart}
            />
          </>
        )}
        <DisplayScore score={score} highScore={highScore} />
        <div className="cardGrid">
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                image={card.image}
                onClickCard={handleCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
