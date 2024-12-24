const express = require('express');
const { createUserRelation, getUserRelation, getAll, Delete } = require('../Controllers/UserRelationController');
const router = express.Router();

// POST request to create user relation
router.post('/create', createUserRelation);
router.get('/all-records', getAll);
router.delete('/delete-records/:id', Delete);
router.get("/user-relation/:userId", getUserRelation);

module.exports = router;
