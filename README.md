# To-do-list

#### Short Description
The To-Do List repository contains the code for a web-based application designed to help users manage their daily tasks efficiently. The application allows users to add, edit, delete, and categorize tasks based on priority or status, providing a clear and interactive interface.

#### Functionality
- **Task Addition:** Users can add new tasks with titles and optional descriptions.
- **Task Editing:** Existing tasks can be modified, allowing changes to titles, descriptions, and statuses.
- **Task Deletion:** Users can delete tasks they no longer need.
- **Task Viewing:** All tasks are displayed on the main interface, where users can also filter or sort tasks based on various criteria such as completion status or priority.

#### Technologies Used
- **Frontend:**
  - **React.js:** Utilized for building the user interface components.
  - **Vue.js:** A progressive JavaScript framework used for building the user interface and single-page applications.
  - **TypeScript:** A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
  - **CSS:** Styling of the frontend components.
  - 
- **Backend:**
  - **Node.js with Express.js:** Serves as the backend server handling API requests.
  - **MongoDB:** Database used for storing task information.
- **Others:**
  - **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with the database.
  - **dotenv:** Manages environment variables.
  - **CORS:** Middleware to enable cross-origin requests.

#### Setup Instructions
To set up and run the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/manni2000/To-do-list.git
   cd To-do-list
   ```

2. **Set Up the Backend:**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   -   - **Configure Environment Variables:**
     - Create a `.env` file in the `backend` directory with the following variables:
       ```env
       PORT=5000
       MONGODB_URI=your_mongodb_connection_string
       ```
     - Replace `your_mongodb_connection_string` with your actual MongoDB URI. You can obtain this from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or your local MongoDB setup.

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend:**
   - Open a new terminal and navigate to the frontend directory from the root of the project:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend application:
     ```bash
     npm start
     ```
   - The application should now be running on `http://localhost:3000`.

4. **Visit the Application:**
   - Open your web browser and go to `http://localhost:3000` to start using the To-Do List application.

These instructions will help you get the To-Do List application running on your local machine for development and testing purposes.
