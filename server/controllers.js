const dbHelpers = require('../database/dbHelpers');


module.exports = {
  get: (req, res) => {
    dbHelpers.get((err, data) => {
      if(err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {
    dbHelpers.post(req, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};