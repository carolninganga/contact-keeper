const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc   Get all users contacts 
//@access Private
router.get('/', (req, res) => {
    res.send('Add contact');
});

//@route  POST api/contacts
//@desc   Get all users contacts 
//@access Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

//@route  PUT api/contacts/:id
//@desc   Update contacts 
//@access Private
router.put('/:id', (req, res) => {
    res.send('update contact');
});

//@route  DELETE api/contacts
//@desc   Get all users contacts 
//@access Private
router.delete('/:id', (req, res) => {
    res.send('Remove contact');
});


module.exports = router;