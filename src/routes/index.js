const express = require('express');
const router = express.Router();
const BovControl = require('../controller/BovControl');

router.get('/', BovControl.bc_list);
router.post('/add', BovControl.bc_create);
router.get('/edit/:id', BovControl.bc_details);
router.post('/edit/:id', BovControl.bc_updates);
router.get('/delete/:id', BovControl.bc_delete);

module.exports = router;
