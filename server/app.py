from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)

# Configure CORS
CORS(app, resources={
    r"/api/*": {
        "origins": ["*"],  # In production, replace with your frontend URL
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

@app.route('/')
def index():
    return jsonify({
        "service": "FantasyRA Backend",
        "status": "running",
        "version": "1.0.0",
        "endpoints": [
            "GET /api/health",
            # Add more endpoints as you create them
        ]
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "service": "FantasyRA Backend",
        "environment": os.getenv('FLASK_ENV', 'development')
    })

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not Found"}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=(os.getenv('FLASK_ENV') != 'production'))
