# AirBenD

AirBend is a full-stack booking app that makes it possible for users to book houses around the world.	Users may book any house they want for any date that is not taken by another user. Users may share their review of any house that they visited. Users may search any house on the search bar by typing the name of the house they want to find.


# Technologies Used
![alt text](https://cdn.discordapp.com/attachments/940373033745547298/952466845057843210/technologies.png)

## Application Architecture

AirBend is built on a React frontend with a Express backend, using PostgreSQL as a database. 


## Frontend Overview

AirBend's whole booking logic and validations is done on the frontend as well as display/interaction logic is managed using several technologies on the frontend. All the other validations and logic are done on the backend however.

### Frontend Technologies Used

#### React 

AirBend is a React application. All display logic is handled by the React libraries.

#### Redux 

All state management in AirBend is handled with Redux, with thunks making API calls to the backend server to handle the data.

## Backend Overview

AirBend uses a Express server with a Postgresql database.

#### Express

Easy sytanx of express made it easier and more efficent for me to develope this app.

#### PostgreSQL

PostgreSQL was the database of choice because it is simple to work with, and is easily manipulable using Sequelize.

## Screenshots

### Home Page

![image](https://user-images.githubusercontent.com/61038486/166872957-245dc295-21d5-4521-94d0-70c9522458eb.png)

### Indiidual Spot Page
 In this page users may see all the information about a particular spot. They can book their stay by using booking menu on the right side of the page. They can share their review with others from within this page. If the user is the owner of the spot, they will see the page differntly. They can update the description and all the other info about the spot, they can also delete the spot, if they do that, all the bookings and the reviews that the spot has will be deleted as well. 
 
![image](https://user-images.githubusercontent.com/61038486/166873054-54eba4b5-3109-4ff0-be2a-9e0f0ef6bb21.png)

### Bookings Page

In this page users can see their bookings

![image](https://user-images.githubusercontent.com/61038486/166873118-1d31d53d-6e50-4c35-8afd-93c014881f47.png)


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


## Conclusion and Next Steps

I'm satisfied with the funcinality of AirBend. However, I want to make a couple of changes to it. First, I'll make it so users will be able to edit their info by going to profile page. I will update the overall design of the profile page so it will look more appleaing to users. After I'm done with that, I will make some changes to the booking menu, so it will look more appleaing, also I will change the validation error messages. Also I will implemetn Google Maps feature.
 
 
