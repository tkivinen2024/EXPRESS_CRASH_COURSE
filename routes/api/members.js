const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const members = require('../../Members');

// Gets All Members
router.get('/', (req, res) => {
    res.json(members);

});
// Get single memeber
router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No Member with the id of ${req.params.id}`});
    }
});

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    
    if(!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Please include a name and email'});
    }
    
    members.push(newMember);
    res.json(members);

});

// Update member 55:19
router.put('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        const updMember = req.body;
        console.log(req.body);                
        members.forEach(member => {
            // ---
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                console.log('UPD***');
                console.log(member.email);
                console.log(updMember);                
                res.json({msg: 'Member updated', member});

            }
            // --- 
            
        }
        );
    } else {
        res.status(400).json({msg: `No Member with the id of ${req.params.id}`});
    }
});

        /*
        members.forEach(member)> {
            
            if(member.id === parseInt(req.params.id)) {
                member.name = req.body.name;
                member.email.req.body.email;
            }
            */


module.exports = router;


