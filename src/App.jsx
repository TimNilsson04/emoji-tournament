import { useState } from 'react'
import './App.css'

var round = 0;

function App() {

  const baseUrl = 'https://emoji-api.com/emojis?'
  const [characters, setCharacters] = useState([])
  const [randomEmoji, setRandomEmoji] = useState([])
  const [randomEmoji2, setRandomEmoji2] = useState([])
  const [savedCharacters, setSavedCharacters] = useState([])
  const [savedCharacters2, setSavedCharacters2] = useState([])
  const [num, setNum] = useState(0);

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


  function startGame() {
    fetchCharacters(),

      setNum(num + 1);
    randomiseEmoji()
    randomiseEmoji2()


    randomiseEmoji()
    randomiseEmoji2()

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
  }


  async function startNext() {
    setNum(num + 1);
    randomiseEmoji()
    randomiseEmoji2()


    randomiseEmoji()
    randomiseEmoji2()

    round++
  }


  const randomiseEmoji = () => {
    const charactersImage = characters.filter(characters => characters.character)
    const randomEmoji = charactersImage[Math.floor(Math.random() * charactersImage.length)]
    setRandomEmoji(randomEmoji)
  }

  const randomiseEmoji2 = () => {
    const charactersImage = characters.filter(characters => characters.character)
    const randomEmoji2 = charactersImage[Math.floor(Math.random() * charactersImage.length)]
    setRandomEmoji2(randomEmoji2)
  }

  function tournament() {

    setSavedCharacters[document.getElementById("0").innerHTML]
    setSavedCharacters2[document.getElementById("1").innerHTML]

    return
  }

  console.log(savedCharacters)

  return (
    <>
      <button id='start' onClick={() => { startGame() }} >Start The Game</button>
      <div className='container' id="container">
        <h1>Round {round}</h1>
        <div id="option-buttons" className="btn-grid">

          <div id="0">{randomEmoji && <p> {randomEmoji.character} </p>}
            <button id='btn1' onClick={() => { startNext() }} className="btn">Choose this</button>
          </div>

          <div id="1">{randomEmoji2 && <p>{randomEmoji2.character}</p>}
            <button id='btn2' onClick={() => { startNext() }} className="btn">Choose this</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
