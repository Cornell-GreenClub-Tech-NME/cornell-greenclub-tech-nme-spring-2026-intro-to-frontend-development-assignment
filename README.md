# Food Waste Gaps Spring 2026 Stakeholders App

This is a React application built with Vite that displays a table of stakeholders involved in food waste reduction efforts for the Spring 2026 semester. The app allows users to view stakeholder details in a modal popup.

## Features

- Displays a table of stakeholders with their contact information, subteam tags, types, and more.
- Formats phone numbers and dates for better readability.
- Modal popup to view detailed information about each stakeholder, including notes and contact history.
- Responsive design with CSS styling.

## Installation

1. Clone the repository or navigate to the assignment folder.
2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

3. View the table of stakeholders. Click "View" on any row to open a modal with detailed information.

## Project Structure

- `src/App.jsx`: Main application component that renders the table and modal.
- `src/components/Modal.jsx`: Modal component for displaying stakeholder details.
- `data/stakeholders.json`: JSON data file containing stakeholder information.
- `src/App.css` and `src/components/Modal.css`: Stylesheets for the app and modal.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run lint`: Run ESLint to check for code issues.
- `npm run preview`: Preview the built app.

## Dependencies

- React: For building the user interface.
- Vite: For development and building.
- ESLint: For code linting.

## Assignment Instructions

For detailed assignment instructions, refer to: [Google Docs Link](https://docs.google.com/document/d/15xTVlETrOEIUQusfvskNub0Hf4XKfr-RHccS4psHKwU/edit?tab=t.0#heading=h.p3p0um848b22)
