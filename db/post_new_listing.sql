insert into mw_properties(home_type,bed,bath,sqft,lot_size, home_status, photo_url,home_address)
values ($1,$2,$3,$4,$5,$6);
select * from mw_properties;