# express-starter-intro

A minimal Express starter project I created as my first step into backend development.  
This repository is part of my learning journey, building small but functional APIs as I move toward full-stack skills.

## Features

### GET /api/hello
Returns a simple greeting message.

### GET /api/json
Returns a JSON response for testing request/response flow.

These endpoints are intentionally simple to help understand:
- What an API is  
- How routing works  
- What a request/response cycle looks like  
- Basic project structure in Express  

## Project Structure

```
express-starter-intro/
├─ src/
│ ├─ app.js
│ └─ routes/
│ └─ hello.js
├─ server.js
├─ package.json
├─ package-lock.json
└─ README.md
```

## How to Run

```
npm install
node server.js
```


Access the sample endpoints:

- http://localhost:3000/api/hello  
- http://localhost:3000/api/json  

## Purpose

This project exists as a foundation for building REST APIs.  
I will extend it step-by-step, adding:
- Additional endpoints  
- Controllers and service layers  
- Database integration  
- Authentication  
- Production-ready structure  

## Author
**tomoka-stm**

Learning backend development one step at a time.
