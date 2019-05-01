module.exports = {
  postNewListing: (req, res, next) => {
    const db = req.app.get('db');
    // console.log(req.body);
    const {
      home_type,
      bed,
      bath,
      sqft,
      lot_size,
      home_status,
      photo_url,
      home_address
    } = req.body;
    db.post_new_listing([
      home_type,
      bed,
      bath,
      sqft,
      lot_size,
      home_status,
      photo_url,
      home_address
    ])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  }
};
