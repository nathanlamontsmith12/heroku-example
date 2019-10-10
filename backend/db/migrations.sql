\c nathan.l.smith;
DROP DATABASE IF EXISTS example; 
CREATE DATABASE example; 
\c example; 

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(64),
    is_admin BOOLEAN
); 

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    title VARCHAR(64)
);

CREATE TABLE users_categories(
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(id),
    category_id INTEGER REFERENCES categories(id)
);

