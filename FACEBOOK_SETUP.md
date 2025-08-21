# Facebook Integration Setup Guide

## Overview
The Fantasy Rally Social Hub allows players to:
- Connect with Facebook accounts
- Share racing achievements and results
- Invite friends to join the game
- Connect with the Fantasy Rally community

## Facebook App Setup

### 1. Create a Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/apps/)
2. Click "Create App"
3. Select "Consumer" as the app type
4. Fill in your app details:
   - App Name: "Fantasy Rally" (or your preferred name)
   - App Contact Email: Your email
   - Business Account: Optional

### 2. Configure Basic Settings
1. In your app dashboard, go to "Settings" → "Basic"
2. Note your **App ID** - you'll need this for the `.env` file
3. Add your domains:
   - App Domains: `your-replit-domain.replit.app`
   - Website URL: `https://your-replit-domain.replit.app`

### 3. Add Facebook Login Product
1. In the left sidebar, click "Add a Product"
2. Find "Facebook Login" and click "Set Up"
3. Select "Web" platform
4. Configure settings:
   - Valid OAuth Redirect URIs: `https://your-replit-domain.replit.app`
   - Web OAuth Login: Enable
   - Enforce HTTPS: Enable

### 4. Environment Configuration
1. Copy `.env.example` to `.env`
2. Replace `your_facebook_app_id_here` with your actual Facebook App ID:
   ```
   REACT_APP_FACEBOOK_APP_ID="your_actual_app_id_here"
   ```

### 5. Facebook App Review (Optional)
For production use, you may need to submit your app for review to access certain permissions:
- Basic profile information (approved by default)
- Email address (approved by default)
- Public profile sharing (may require review)

## Features Available

### Social Sharing
- **Achievement Sharing**: Share unlocked achievements with friends
- **Race Results**: Share wins and losses from drag races
- **Game Invitations**: Invite Facebook friends to join Fantasy Rally

### Community Integration
- Join the Fantasy Rally Facebook Group
- Follow the official Fantasy Rally Facebook Page
- Share the game with your network

### Privacy & Security
- Only basic profile information is accessed (name, email, profile picture)
- No posting without explicit user action
- Users can disconnect their Facebook account at any time
- All sharing requires user confirmation through Facebook's native dialogs

## Troubleshooting

### Common Issues
1. **Facebook SDK not loading**: Check your App ID in the `.env` file
2. **Login fails**: Verify your domain is added to Facebook App settings
3. **Sharing doesn't work**: Ensure your app is in "Live" mode, not "Development"

### Development vs Production
- **Development Mode**: Only app administrators and developers can use Facebook features
- **Live Mode**: Available to all users (may require app review for some features)

## Support
For issues with the Facebook integration:
1. Check the browser console for error messages
2. Verify your Facebook App configuration
3. Ensure your `.env` file has the correct App ID
4. Test with a Facebook account that has developer access to your app

## API Documentation
- [Facebook JavaScript SDK](https://developers.facebook.com/docs/javascript)
- [Facebook Login for Web](https://developers.facebook.com/docs/facebook-login/web)
- [Facebook Sharing](https://developers.facebook.com/docs/sharing/web)