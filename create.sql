create database reddit;
use reddit;
create table users (id INT auto_increment primary key, email VARCHAR(100), screenName VARCHAR(100), password VARCHAR(40), createdAt DATETIME, updatedAt DATETIME);
create table posts (id INT auto_increment primary key, userId INT, url TEXT, title VARCHAR(100), createdAt DATETIME, updatedAt DATETIME);
create table votes (id INT auto_increment primary key, userId int, postId int, upDown boolean, createdAt datetime, updatedAt datetime);