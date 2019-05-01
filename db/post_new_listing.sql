INSERT INTO mw_properties(home_type, bed, bath, sqft, lot_size, home_status, photo_url, home_address)
VALUES($1, $2, $3, $4, $5, $6, $7, $8);
SELECT *FROM mw_properties;