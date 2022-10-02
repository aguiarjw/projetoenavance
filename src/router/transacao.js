const  express = require("express");
const transacaoSchema = require("../models/transacao");

const router = express.Router();

//create transacao
router.post("/transacao", (req, res) => {
    const transacao = transacaoSchema(req.body);
    transacao

    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// get all transacao
router.get("/transacao", (req, res) => {
    transacaoSchema

    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// get a transacao
router.get("/transacao/:id", (req, res) => {
    const { id } = req.params;
    transacaoSchema

    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// update a transacao
// router.put("/transacao/:id", (req, res) => {
//     const { id } = req.params;
//     const { name, preço, cantidade } = req.body;
//     transacao
// Schema
//     .updateOne({ _id: id }, { $set: {name, preço, cantidade}})
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
//     });

// delete a transacao
router.delete("/transacao/:id", (req, res) => {
    const { id } = req.params;
    transacaoSchema

    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

module.exports = router;
