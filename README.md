# Project README

## Overview

This project uses React for the frontend and Sanity for the backend. Follow the steps below to set up and run the project locally.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)
- [npm](https://www.npmjs.com/)

You can check if they are installed by running:

```bash
node -v
npm -v
```

## Setting Up the React Project

1. **Navigate to the React project directory:**

   ```bash
   cd path/to/your/react-project
   ```

2. **Install React dependencies:**

   ```bash
   npm install
   ```

3. **Build the React app for production:**

   ```bash
   npm run build
   ```

   This will create a `build` folder that contains the compressed version of your app for deployment.

4. **Start the React app for development:**

   ```bash
   npm start
   ```

   This will start the development server and you can view your app at `http://localhost:3000`.

## Setting Up Sanity

1. **Navigate to the Sanity project directory:**

   ```bash
   cd path/to/your/sanity-folder
   ```

2. **Install Sanity dependencies:**

   ```bash
   npm install
   ```

3. **Define your schema:**

   Navigate to the `schematypes` folder and create or edit your schema files as needed.

4. **Start the Sanity studio:**

   ```bash
   sanity start
   ```

   This will start the Sanity studio and you can access it at `http://localhost:3333`.

5. **Build Sanity for production:**

   ```bash
   sanity build
   ```

6. **Deploy Sanity:**

   ```bash
   sanity deploy
   ```
