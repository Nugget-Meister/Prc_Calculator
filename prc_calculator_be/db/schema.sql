
DROP TABLE IF EXISTS TEST
CREATE TABLE TEST (
    id serial primary key
    label text
);


DROP TABLE IF EXISTS prc_calculator_users
CREATE TABLE prc_calculator_users (
    user_id UUID PRIMARY KEY,
    username VARCHAR(128),
    password VARCHAR(128),
    isVerified BOOLEAN,
)

DROP TABLE IF EXISTS prc_calculator_entries
CREATE TABLE prc_calculator_entries (
    entry_id serial primary key
    numA decimal,
    numB decimal,
    operand char(1)
);

