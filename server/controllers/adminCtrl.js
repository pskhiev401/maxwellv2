module.exports = {
  postNewListing: (req, res, next) => {
    console.log(req.body, 'console.log of req.body admin.ctrl');

    const db = req.app.get('db');
    const {
      home_type,
      bed,
      bath,
      sqft,
      lot_size,
      home_status,
      photo_url
    } = req.body;
    db.post_new_listing([
      home_type,
      bed,
      bath,
      sqft,
      lot_size,
      home_status,
      photo_url
    ])
      .then(response => {
        console.log(response, 'response in admin.ctrl');
        res.status(200).json(response);
      })
      .catch(err => res.status(500).send(err));
  }
};
