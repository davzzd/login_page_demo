SO HERE ARE THE COMMANDS REQUIERED:

FRONTEND(inside client folder run the following commands):
                  npm create vite@latest
                  npm install axios

BACKEND(inside server run the following commands):
                  npm init -y
                  npm install express mysql2 cors

************************************************************************************
SERVER:
(in the SQL shell run the following command to create database)

  USE name_of_database;
  
  CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      password VARCHAR(255)
  );
**************************************************************************************
THANK YOUUUUUUU!!!!!!!!!!!!!!!!!!
