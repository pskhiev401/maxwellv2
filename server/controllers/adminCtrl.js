module.exports = {
  postNewListing: (req, res, next) => {
    console.log(req.body);
    const db = req.app.post('db');
    const {
      home_type,
      bed,
      bath,
      sqft,
      lot_size,
      status,
      photo_url
    } = req.body;
    db.post_new_listing([
      home_type,
      bed,
      bath,
      sqft,
      lot_size,
      status,
      photo_url
    ])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  }
};
