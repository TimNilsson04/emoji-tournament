import { useState } from 'react'
import './App.css'



function App() {

  const baseUrl = 'https://emoji-api.com/emojis?'
  const [characters, setCharacters] = useState([])
  const [randomEmoji, setRandomEmoji] = useState([])
  const [randomEmoji2, setRandomEmoji2] = useState([])

  const [num, setNum] = useState(0);


  function startGame() {
    var x = document.getElementById("container");
    var y = document.getElementById("start");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }

    async function fetchCharacters() {
      await fetch(`${baseUrl}access_key=${import.meta.env.VITE_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setCharacters(result)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchCharacters(),
      [characters]

    setNum(num + 1);
    randomiseEmoji1()
    randomiseEmoji2()


    randomiseEmoji1()
    randomiseEmoji2()
  }

  function startNext() {
    async function fetchCharacters() {
      await fetch(`${baseUrl}access_key=${import.meta.env.VITE_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setCharacters(result)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchCharacters(),
      [characters]

    setNum(num + 1);
    randomiseEmoji1()
    randomiseEmoji2()


    randomiseEmoji1()
    randomiseEmoji2()
  }


  const randomiseEmoji1 = () => {
    const charactersImage = characters.filter(characters => characters.character)
    const randomEmoji = charactersImage[Math.floor(Math.random() * charactersImage.length)]
    setRandomEmoji(randomEmoji)
  }

  const randomiseEmoji2 = () => {
    const charactersImage = characters.filter(characters => characters.character)
    const randomEmoji2 = charactersImage[Math.floor(Math.random() * charactersImage.length)]
    setRandomEmoji2(randomEmoji2)
  }


  return (
    <>
      <button id='start' onClick={() => { startGame() }} >Start The Game</button>
      <div className='container' id="container">
        <div id="option-buttons" className="btn-grid">
          <div id="0">{randomEmoji && <p> {randomEmoji.character} </p>}</div>
          <div id="1">{randomEmoji2 && <p>{randomEmoji2.character}</p>}</div>
          <button onClick={() => { startNext() }} className="btn">Choose this</button>
          <button onClick={() => { startNext() }} className="btn">Choose this</button>
        </div>
      </div>
    </>
  )
}

export default App