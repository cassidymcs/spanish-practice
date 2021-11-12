const express = require('express')
const Vocab = require('../models/vocab.model')
const router = express.Router()

router.get('/vocab', (req, res ) => { 
    Vocab.find({}, (err,vocab)=> {  
        res.json(vocab)
    })
})

router.post('/vocab', (req, res)=>{
    newWord = new Vocab({
        id: req.body.id,
        english: req.body.english,
        spanish: req.body.spanish,
        chapter: req.body.chapter
    })
    newWord.save(()=> {
        res.json(newWord)
    })
    console.log('vocab word created');
    console.log(newWord);
})

router.put('/vocab/:id', async(req, res) => {
    word = await Vocab.findById(req.params.id)
         word.id = req.body.id;
         word.english=req.body.english;
         word.spanish=req.body.spanish;
         word.chapter=req.body.chapter;
         word.save(() =>{
             res.json(word)
         })
 })
 
 router.delete('/vocab/:id', (req, res) => {
     Vocab.findByIdAndDelete(req.params.id, (err) =>{
         res.json({'message': 'deleted successfully'})
     })
 })



module.exports = router