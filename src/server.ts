import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.json({message: "Hello NLW#04"})
});

app.post("/", (req, res) => {
    return res.json({message: "Os dados foram dados com sucesso!"})
});

app.listen(3333, () => console.log('server up and running'));