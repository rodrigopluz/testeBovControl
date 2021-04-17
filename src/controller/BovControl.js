const BovControl = require('../model/BovControl');

exports.bc_list = async (req, res) => {
  const bovControls = await BovControl.find();
  res.render('index', {
    bovControls
  });
};

exports.bc_create = async (req, res, next) => {
  const bovControl = new BovControl(req.body);
  await bovControl.save();
  res.redirect('/');
};

exports.bc_details = async (req, res, next) => {
  const bovControl = await BovControl.findById(req.params.id);
  res.render('edit', { bovControl });
};

exports.bc_updates = async (req, res, next) => {
  const { id } = req.params;
  await BovControl.findByIdAndUpdate({_id: id}, {$set: req.body},
    function (err, prd) {
        if (err) return next(err);
        res.redirect('/');
    });
};

exports.bc_delete = async (req, res, next) => {
  let { id } = req.params;
  await BovControl.remove({_id: id});
  res.redirect('/');
};
