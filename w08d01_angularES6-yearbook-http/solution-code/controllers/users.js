module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};

const User = require('../models/user');

function usersIndex(req, res){
  User.find((err, users) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(users);
  });
}

function usersCreate(req, res){
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(201).json(user);
  });
}

function usersShow(req, res){
  User
    .findById(req.params.id, (err, user) => {
      if (err) return res.status(500).json({ message: 'Something went wrong.' });
      if (!user) return res.status(404).json({ message: 'User not found.' });
      return res.status(200).json(user);
    });
}

function usersUpdate(req, res){
  User
  .findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    return res.status(200).json(user);
  });
}

function usersDelete(req, res){
  User.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.sendStatus(204);
  });
}
