This project is a MERN stack application that interacts with a third-party API to seed data into a MongoDB database. The application provides several endpoints to serve data for different purposes and a React frontend to display this data in tables and charts.

Backend Setup
Initialize Project and Install Dependencies
Create a new directory for your project and initialize it:

mkdir mern-coding-challenge
cd mern-coding-challenge
npm init -y
Install necessary packages:

npm install express mongoose axios cors dotenv

Create a .env file in the root directory:
PORT=5001
MONGO_URI=mongodb://localhost:27017/mern
THIRD_PARTY_API_URL=https://s3.amazonaws.com/roxiler.com/product_transaction.json


![Application Screenshot](https://github.com/saloni680/Roxiler/blob/main/image.png)
