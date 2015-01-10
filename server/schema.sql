DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int not null primary key auto_increment,
  message varchar(140),
  createdAt date not null,
  room_id int,
  user_id int
);

CREATE TABLE users (
  id int not null primary key auto_increment,
  username varchar(20)
);

CREATE TABLE rooms (
  id int not null primary key auto_increment,
  roomname varchar(20)
);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (id);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
