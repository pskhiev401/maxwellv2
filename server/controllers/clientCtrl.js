module.exports = {
  getAllProperties: (req, res, next) => {
    const db = req.app.get("db");
    db.get_all_properties()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  }
};
