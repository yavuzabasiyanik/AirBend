# AirBenD

This is an airbnb clone. It's a place where you can find your dream vacation house.

# Index 

[Database Schema](https://github.com/yavuzabasiyanik/air-b-end-solo-project/wiki/Schema)

# Technologies Used
![alt text](https://cdn.discordapp.com/attachments/940373033745547298/952466845057843210/technologies.png)

# Getting started

 1. Clone this repo.
  * `git clone https://github.com/yavuzabasiyanik/air-b-end-solo-project.git`
 2. Install dependencies from the roo directory.
  * `npm install`
 3. Create a POSTGRESQL user.
  * `CRAETE USER <username> WITH CREATEDB PASSWORD <'userpassword'>`
 4. Create a .env file in the backend directory based on the .env.example file.
 
 5. Enter your username and password info into the .env file along with the database name that you chose. Add compination of characters for your JWT_SECRET and desirec PORT.
 6. Add the following proxy to your package.json file within your frontend directory.
  * `"proxy": "http://localhost:<port number that you chose>"`
 7. Create Database, MIgrate and Seed modals
  * `npx dotenv sequelize db:create`
  * `npx dotenv sequelize db:migrate`
  * `npx dotenv sequelize db:seed:all`
 8. Start the services in the backend and frontend directory.
  * `npm start`
 9. You can login as Demo user and start using the ### AirBenD
 
 # Features
 
 Logged in users can perform the following actions.
 
  * View/Add/Delete/Edit Listings
  * View/Add/Delete/Edit Bookings 
  * View/Add/Delete/Edit Reviews   
  * Can use search bar


Logged out users can perform the following actions.
  * View Listings 
  * View Bookings
  * View Reviews
  * Can use search bar
 
  
