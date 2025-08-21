# FantasyRA Backend

This is the backend service for the FantasyRA application, built with Flask.

## Development Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\\venv\\Scripts\\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```bash
   python app.py
   ```

## Deployment

This application is designed to be deployed on Render.com.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
FLASK_APP=app.py
FLASK_ENV=production
```

### Render.com Setup

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
   - Environment: Python 3

## API Endpoints

- `GET /api/health` - Health check endpoint

## License

MIT
