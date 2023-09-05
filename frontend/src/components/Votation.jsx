import { useState } from 'react'
import './componentsStyles/Votation.css'

const Votation = () => {
  const [selected, setSelected] = useState(null)
  const activeOrNot = selected ? 'chosenCandidate' : '';
  const selectVote = (candidate) => {

    if (selected === candidate) {
      setSelected(null)
    } else {
      setSelected(candidate)
    }
  }
  return (
    <div className="votation">
      <div className={`candidate ${selected === "madalena" ? "chosenCandidate" : ''}`} onClick={() => selectVote('madalena')}>Madalena</div>
      <div className={`candidate ${selected === "zero-papo" ? "chosenCandidate" : ''}`} onClick={() => selectVote('zero-papo')}>Zero-Papo</div>

      <button>Votar</button>
    </div>
  )
}

export default Votation