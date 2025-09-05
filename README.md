# Superheroes App 

## Description
A full-stack web application for managing superheroes.  

- **Frontend**: React (Vite/CRA).  
- **Backend**: Node.js (Express.js + Sequelize + PostgreSQL).  
- Supports **CRUD operations** (create, read, update, delete superheroes).
  
---

## How to Run Locally

Clone the repository
> git clone https://github.com/Sameliuk/test_task.git
> 
> cd test_task

### Backend setup

Go to the backend folder:
> cd test_task_backend
> 
> npm install
### 🗄️ Restore Database from Backup

You have a backup file (`test_task_db.sql`), so you can restore the PostgreSQL database from it.

 1. Create a new database
> createdb mydb

Or inside psql:

> CREATE DATABASE mydb;

2. Restore from the backup

>psql -U username -d mydb -f test_task_db.sql

- username — your PostgreSQL user (often postgres)
- mydb — the database name

3. Verify the database

> psql -U username -d mydb
> 
> \dt

- username — your PostgreSQL user (often postgres)
- mydb — the database name
  
You should see all the restored tables.

### Start backend

> npm start

Backend will be available at: http://localhost:5000

### Frontend setup
   
Go to the frontend folder:


> cd ../test_task_frontend
> 
> npm install
>
> npm run dev

1. Configure API URL

In the frontend/src/services/api.js, make sure the backend API URL points to:

> const API_URL = "http://localhost:5000";

2. Start frontend

>npm run dev

Frontend will run at: http://localhost:5173

### Open in browser
Open your browser and go to:

http://localhost:5173

You should see the Superheroes App, which communicates with the backend API at http://localhost:5000.
