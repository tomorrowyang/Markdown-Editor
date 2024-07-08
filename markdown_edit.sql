create database markdown_editor;
USE markdown_editor;

create table files (
	id int auto_increment primary KEY,
    name varchar(255) not null,
    content text not null,
    created_at timestamp default current_timestamp
    );

ALTER TABLE files ADD COLUMN parent_id INT DEFAULT NULL;

CREATE TABLE folders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  parent_id INT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);