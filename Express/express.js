const express = require('express')  
const app = express();

//Tratamento do corpo
app.use(express.json);

app.use('/',express.static('public'))

app.use('/users',(req, res)=>{
    dados = req.body;
    console.log(dados);
    res.send('Informação recebida')
})
    
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});