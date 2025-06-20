# IIT ASC Course Manager - Frontend

This is the React + TypeScript frontend for the IIT ASC Course Manager. It provides a user-friendly interface to interact with the backend REST API.

## Features

- Built with React, TypeScript, and Vite
- Axios for API communication
- Functional UI components for:
  - Creating and listing courses
  - Creating and listing course instances by year and semester
  - Viewing and deleting course and instance details
- Connected to the backend via CORS

## Routes

- `/` — List all courses
- `/create` — Create a new course
- `/course/:id` — View details of a specific course
- `/instances` — List course instances by year and semester
- `/instances/create` — Create a new course instance
- `/instances/:year/:semester/:id` — View instance details



## Application Screenshots

<div align="center">
  <img src="docs/create_course.PNG" alt="Create a Course" width="600" />
  <img src="docs/view_course.PNG" alt="View all courses" width="600" />
  <img src="docs/create_instance.PNG" alt="Create an Instance for a course" width="600" />
  <img src="docs/view_instances.PNG" alt="View Instance by Year and Sem" width="600" />
</div>

## Local Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Runs on http://localhost:5173 by default

## Run Docker image
docker build -t course-manager-frontend .
docker run -p 5173:5173 course-manager-frontend

# To run with frontend
docker-compose up --build



