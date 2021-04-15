const express = require('express');
const router = express.Router();
const BovControl = require('../model/BovControl');

router.get('/', async (req, res) => {
  const bovControls = await BovControl.find();
  res.render('index', {
    bovControls
  });
});

router.post('/add', async (req, res, next) => {
  const bovControl = new BovControl(req.body);
  await bovControl.save();
  res.redirect('/');
});

router.get('/edit/:id', async (req, res, next) => {
  const bovControl = await BovControl.findById(req.params.id);
  res.render('edit', { bovControl });
});


router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await BovControl.findByIdAndUpdate({_id: id}, {$set: req.body},
    function (err, prd) {
        if (err) return next(err);
        res.redirect('/');
    });

});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await BovControl.remove({_id: id});
  res.redirect('/');
});

module.exports = router;
