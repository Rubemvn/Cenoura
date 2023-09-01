import "./componentsStyles/Score.css"

const Score = () => {
  return (
    <div className='score'>
      <div className='madalena'>
        <h1>MADALENA</h1>
        <p className="votes">0</p>
      </div>

      <div className="x"><h1>X</h1></div>
      
      <div className='zeroPapo'>
        <p className="votes">0</p>
        <h1>ZERO-PAPO</h1>
      </div>
    </div>
  )
}

export default Score