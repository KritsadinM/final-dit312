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
('The Dark Knight', 2008, 'Action', 'https://i.pinimg.com/1200x/31/8d/07/318d07a48fb6f063a5b01c4b0a0f5416.jpg'),
('Inception', 2010, 'Sci-Fi', 'https://i.pinimg.com/736x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg'),
('Interstellar', 2014, 'Sci-Fi', 'https://i.pinimg.com/736x/73/26/0e/73260e80b7873849c1d514e9fbc45391.jpg'),
('Forrest Gump', 1994, 'Drama', 'https://i.pinimg.com/736x/a8/39/7d/a8397dcfdf56fc342c3712a91e186575.jpg'),
('The Matrix', 1999, 'Sci-Fi', 'https://i.pinimg.com/736x/ec/3d/28/ec3d28f7736a189109c7b0050b07c420.jpg'),
('Avengers: Endgame', 2019, 'Action', 'https://i.pinimg.com/1200x/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg');