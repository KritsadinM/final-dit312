CREATE DATABASE IF NOT EXISTS moviesdb;
USE moviesdb;

CREATE TABLE IF NOT EXISTS movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year INT,
  genre VARCHAR(100),
  image_url VARCHAR(500)
);

INSERT INTO movies (title, year, genre, image_url) VALUES
('The Shawshank Redemption', 1994, 'Drama', 'https://i.pinimg.com/736x/bb/0e/f9/bb0ef99b7d71bb27e22f57d2156b7b5d.jpg'),
('The Godfather', 1972, 'Crime', 'https://i.pinimg.com/1200x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg'),
('The Dark Knight', 2008, 'Action', 'https://i.pinimg.com/1200x/31/8d/07/318d07a48fb6f063a5b01c4b0a0f5416.jpg');
