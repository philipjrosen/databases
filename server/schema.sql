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

insert into rooms (roomname) values ('room1'),
  ('room2'),
  ('room3'),
  ('room4');

insert into users (username) values ('A'), ('B'), ('C'), ('D');

insert into messages (message, user_id, room_id, createdAt) values ('whatever', 4, 1, STR_TO_DATE('1-01-2012', '%d-%m-%Y')),
('test1', 4, 1, STR_TO_DATE('1-01-2012', '%d-%m-%Y')),
('test2', 1, 2, STR_TO_DATE('1-01-2012', '%d-%m-%Y')),
('test3', 2, 2, STR_TO_DATE('1-01-2012', '%d-%m-%Y')),
('test5', 2, 3, STR_TO_DATE('1-01-2012', '%d-%m-%Y')),
('test6', 2, 2, STR_TO_DATE('1-01-2012', '%d-%m-%Y')),
('test4', 3, 1, STR_TO_DATE('1-01-2012', '%d-%m-%Y'));

