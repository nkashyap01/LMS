# Edutech Application Documentation

## Project Overview
This is an edutech application designed to provide educational resources and courses to students and educators.

## Components and Pages

### App.jsx
- **Description**: Main entry point of the application that sets up routing for different pages.
- **Routes**:
  - `/`: Home page
  - `/course-list`: List of courses
  - `/my-enrollments`: User's enrolled courses
  - `/course/:id`: Details of a specific course
  - `/player/:courseId`: Player interface for course content
  - `/educator`: Educator dashboard with nested routes for managing courses and students.

### Home.jsx
- **Description**: Displays the home page with a welcome message.

### CoursesList.jsx
- **Description**: Displays a list of available courses.

### MyEnrollments.jsx
- **Description**: Displays the user's enrolled courses with a brief description.

### CourseDetails.jsx
- **Description**: Currently empty, intended for displaying detailed information about a specific course.

### Player.jsx
- **Description**: Displays the player interface for course content.

## Usage Instructions
To run the application, navigate to the project directory and use the following command:
```
npm start
```

## Future Enhancements
- Implement functionality for the `CourseDetails` component.
- Add features for course management in the educator dashboard.
- Enhance the player interface for better user experience.
