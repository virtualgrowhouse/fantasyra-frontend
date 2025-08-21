#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete! Your app will be available at:"
echo "https://virtualgrowhouse.github.io/fantasyra-frontend"
