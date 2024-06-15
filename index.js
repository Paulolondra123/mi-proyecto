const express = require('express'); 
const app = express(); 
const dotenv = require('dotenv'); 
const path = require('path');

dotenv.config(); 
 
const PORT = process.env.PORT || 5000; 


app.get('/', (req, res) => { 
  res.send({ message: 'Hola desde el backend!' }); 
}); 
 
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

 
app.listen(PORT, () => { 
  console.log(`Servidor corriendo en http://localhost:${PORT}`); 
}); 
