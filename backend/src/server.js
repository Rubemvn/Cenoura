const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
  origin: 'http://127.0.0.1:5173', // Altere para a origem do seu aplicativo React
  methods: ['GET', 'POST'], // Especifique os métodos que você deseja permitir
  optionsSuccessStatus: 204, // Responder com status 204 No Content para solicitações OPTIONS
}));

// Rota para obter a contagem dos votos
app.get('/api/votes', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./../data/data.json', 'utf-8'));
  // console.log(data.votes);


  res.json(data.votes);
});

// Rota para um novo voto
app.post('/api/vote', (req, res) => {
  const { name, email, vote } = req.body;
  const data = JSON.parse(fs.readFileSync('./../data/data.json', 'utf-8'));


  // verifica se o usuário já votou
  const existingVoter = data.votersData.find((voter) => voter.email === email);
  
  if (existingVoter) {
    res.status(400).json({ message: 'E-mail já foi utilizado, tente novamente!' , status: false});
  
  } else if(vote){
    // Registra o voto
    data.votes[vote]++;
    data.votersData.push({name, email, vote})
    // salvando os dados e o voto no Banco de Dados(JSON)
    fs.writeFileSync('./../data/data.json', JSON.stringify(data, null, 2),'utf-8')
    res.status(200).json({message: 'Voto registrado com sucesso!'})
  
  }
  //  else {
  //   res.status()json({message: 'ok, você pode votar', status: true})
  // }
});

app.listen(PORT, () => {
  console.log(`Servidor is running on PORT: ${PORT}`);
});
