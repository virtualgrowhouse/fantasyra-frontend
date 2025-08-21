# FantasyRA Deployment Guide

This guide will walk you through deploying both the frontend and backend of the FantasyRA application.

## Table of Contents
1. [Backend Deployment (Render.com)](#backend-deployment)
2. [Frontend Deployment (GitHub Pages)](#frontend-deployment)
3. [Connecting Frontend to Backend](#connecting-frontend-to-backend)

## Backend Deployment

### Prerequisites
- A GitHub account
- A Render.com account (free tier is sufficient)
- Python 3.8+ installed locally

### Steps

1. **Prepare Your Backend Repository**
   - Create a new repository on GitHub for the backend
   - Push the `server` directory to this repository

2. **Deploy to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" and select "Web Service"
   - Connect your GitHub account and select the backend repository
   - Configure the service:
     - Name: `fantasyra-backend` (or your preferred name)
     - Region: Choose the one closest to your users
     - Branch: `main` (or your main branch)
     - Build Command: `pip install -r requirements.txt`
     - Start Command: `gunicorn app:app`
   - Click "Create Web Service"

3. **Configure Environment Variables**
   - In your Render dashboard, go to the "Environment" tab
   - Add the following environment variables:
     - `FLASK_APP=app.py`
     - `FLASK_ENV=production`
   - Save the changes

4. **Get Your Backend URL**
   - Once deployed, note the URL provided by Render (e.g., `https://fantasyra-backend.onrender.com`)

## Frontend Deployment

### Prerequisites
- Node.js and npm installed locally
- A GitHub account
- The `gh-pages` package installed globally: `npm install -g gh-pages`

### Steps

1. **Update API URL**
   - In the `.env` file, update `REACT_APP_API_URL` with your Render backend URL
   ```
   REACT_APP_API_URL=https://fantasyra-backend.onrender.com
   ```

2. **Configure GitHub Pages**
   - In `package.json`, add:
     ```json
     "homepage": "https://<your-github-username>.github.io/fantasyra-frontend",
     "scripts": {
       // ... existing scripts
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages"
   - Under "Source", select "GitHub Actions"

## Connecting Frontend to Backend

1. **Update CORS Settings**
   - In your backend `app.py`, ensure CORS is properly configured:
   ```python
   from flask_cors import CORS
   
   app = Flask(__name__)
   CORS(app)  # This allows all origins in development
   
   # For production, restrict to your frontend domain:
   # CORS(app, resources={r"/api/*": {"origins": ["https://your-github-username.github.io"]}})
   ```

2. **Verify the Connection**
   - The frontend will automatically show the API connection status
   - Check the browser's developer console for any errors

## Post-Deployment

1. **Test the Application**
   - Navigate to your GitHub Pages URL
   - Verify that the frontend can communicate with the backend
   - Check all interactive elements

2. **Set Up Custom Domain (Optional)**
   - Follow GitHub's guide for setting up a custom domain
   - Update your backend CORS settings to include the new domain

## Troubleshooting

- **Frontend not updating**: Clear your browser cache or try incognito mode
- **API connection issues**: Verify CORS settings and environment variables
- **Build failures**: Check the GitHub Actions logs for specific errors
