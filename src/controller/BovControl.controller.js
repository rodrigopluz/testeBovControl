const BovControl = require('../model/BovControl.model');

exports.bc_list = (req, res) => {
  const bovControls = BovControl.find();
  res.render('index', {
    bovControls
  });
};

exports.bc_create = (req, res) => {
  let bovControl = new BovControl({
    name: req.body.name,
    type: req.body.type,
    weight: req.body.weight,
    age: req.body.age
  });

  bovControl.save((err) => {
    if (err) {
      return next(err);
    }

    res.send('Registro criado com sucesso')
  });
};

exports.bc_details = (req, res) => {
  BovControl.findById(req.params.id, (err, bovcontrol) => {
    if (err) return next(err);
    res.send(bovcontrol);
  });
};

exports.bc_updates = (req, res) => {
  BovControl.findByIdAndUpdate({_id: req.params.id}, {$set: req.body},
    (err, bovcontrol) => {
      if (err) return next(err);
      res.send('Registro alterado com sucesso.');
    });

  res.redirect('/');
};

exports.bc_delete = (req, res) => {
  BovControl.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Registro '+ req.params.id +' deletado com sucesso')
  })

  res.redirect('/');
};