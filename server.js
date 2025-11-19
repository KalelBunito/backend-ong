const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ongsRoutes = require('./routes/routesEntidades.js')

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API ESTÁ ONLINE E ROTEANDO')
});

app.use('/api', ongsRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})