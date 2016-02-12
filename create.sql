create database reddit;
use reddit;
create table users (id INT auto_increment primary key, email VARCHAR(100), screenName VARCHAR(100), password VARCHAR(40), createdAt timestamp, updatedAt timestamp);
create table posts (id INT auto_increment primary key, userId INT, url TEXT, title VARCHAR(100), createdAt timestamp, updatedAt timestamp);
create table votes (id INT auto_increment primary key, userId int, postId int, upDown boolean, createdAt timestamp, updatedAt timestamp);