import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [vote, setVote] = useState("")


  return (
    <div>
      <form >
        <input
          type="text"
          placeholder="Digite seu nome aqui..."
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          required 
          onChange={(e) => setName(e.target.value)}
          />

        <label>
          <input
            type="radio"
            value="madalena"
            name='apelidoFav' />
          <span>Madalena</span>
        </label>

        <label>
          <input
            type="radio"
            value="zero-papo"
            name='apelidoFav' />
          <span>Zero-Papo</span>
        </label>

        <input
          type="submit"
          value="Votar" />
      </form>
    </div>
  )
}

export default Form