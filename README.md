# Author: Danish Mukhammad

## 📆 Test task for Junior Node.js Backend Developer DevelopsToday 

This project is a RESTful API built with **NestJS** that allows users to manage calendar events and holidays. Each user has a calendar associated with them, where they can store holidays by country and year.

---

## 🚀 Features

- Manage user calendars and holiday events.
- Fetch and manage supported countries and their codes.
- Add holidays for a specific year and country.
- Built using **NestJS**, **TypeORM**, and **MySQL**.
- Fully Dockerized for easy local development.

---

## 📦 Requirements

- Docker
- Docker Compose

---

## ⚙️ Installation & Setup

### 1. Install Docker & Docker Compose

Follow the official guide to install Docker:  
[https://docs.docker.com/get-docker](https://docs.docker.com/get-docker)

### 2. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-directory>
```

### 3. Create an .env file based on the .env.example:
```bash
cp .env.example .env
```

### 4. Run the app using Docker Compose:
```bash
sudo docker-compose --env-file .env up --build -d
```

### 5. The app will be accessible at:
```bash
http://localhost:3000
```

---

## API Endpoints

### Countries

#### 1. Get all countries
```http request
GET /countries
```

#### 2. Get specific country
```http request
GET /countries/{countryCode}
```


### Users

#### 1. Add holidays to user calendar
```http request
POST /users/{userId}/calendar/holidays
```

Request Body:
```json
{
  "countryCode": "US",
  "year": 2023,
  "holidays": ["2023-01-01", "2023-12-25"]
}
```

Validation Rules:
* countryCode: 2-character string (e.g., "US")
* year: Minimum 1975
* holidays: Array of date strings (1-255 characters each)

Test it with Postman or browser
