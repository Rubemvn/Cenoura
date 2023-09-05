import { useState } from 'react'
import './App.css'
import Score from './components/Score'
import Form from './components/Form'
import Votation from './components/Votation';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [vote, setVote] = useState("")
  
  const stages = [
    { id: 1, name: "form" },
    { id: 2, name: "votation" }
  ]

  const [stageScreen, setStageScreen] = useState(stages[1].name)
  const [screen, setScreen] = useState(stageScreen);
  

  const startVotation = (name, email) => {
    setName(name);
    setEmail(email);

    setScreen(stages[1].name);


  }

  return (
    <>
      <div className='App'>
        <Score />
        {screen === "form" &&
          <Form
            startVotation={startVotation}
          />
        }
        {screen === "votation" &&
          <Votation />
        }
      </div>
    </>
  )
}

export default App
