# Trimbak Backend API

A professional Node.js/Express backend for the Trimbak contact form with email integration.

## Features

- ✓ Express.js API server
- ✓ Email form submission via Nodemailer
- ✓ Input validation using express-validator
- ✓ CORS support
- ✓ Environment variable configuration
- ✓ Error handling middleware
- ✓ Development mode with nodemon

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Configure your environment variables in `.env`:
```
NODE_ENV=development
PORT=3000
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
RECEIVER_EMAIL=receiver@gmail.com
CORS_ORIGIN=http://localhost:5173
```

## Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

## API Endpoints

### Health Check
```
GET /health
```
Returns server status.

### Submit Contact Form
```
POST /api/form
```

**Request body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phno": "+1234567890",
  "message": "Your message here..."
}
```

**Validation rules**:
- `name`: Required, 2-100 characters
- `email`: Required, valid email format
- `phno`: Required, valid mobile phone number
- `message`: Required, 10-5000 characters

**Success response** (200):
```json
{
  "success": true,
  "message": "Form submitted successfully. We will get back to you soon!",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "submittedAt": "2026-01-21T10:30:00.000Z"
  }
}
```

**Validation error response** (400):
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

**Server error response** (500):
```json
{
  "success": false,
  "message": "Failed to submit form. Please try again later."
}
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` / `production` |
| `PORT` | Server port | `3000` |
| `EMAIL_SERVICE` | Email service provider | `gmail` |
| `EMAIL_USER` | Sender email address | `your_email@gmail.com` |
| `EMAIL_PASSWORD` | App-specific password | `xxxx xxxx xxxx xxxx` |
| `RECEIVER_EMAIL` | Email to receive form submissions | `admin@example.com` |
| `CORS_ORIGIN` | Frontend origin for CORS | `http://localhost:5173` |

## Security Notes

- ⚠️ **Never** commit `.env` file to version control
- Use app-specific passwords for Gmail (not your main password)
- Validate all inputs on both client and server
- Use HTTPS in production
- Keep dependencies updated: `npm audit`

## Development

### Project Structure
```
Backend/
├── index.js          # Main server file
├── form.js           # Form route handler
├── package.json      # Dependencies and scripts
├── .env.example      # Environment template
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

### Adding New Routes

1. Create a new router file (e.g., `routes/feedback.js`)
2. Define routes following the same pattern as `form.js`
3. Import and register in `index.js`:
```javascript
const feedbackRoute = require("./routes/feedback");
app.use("/api", feedbackRoute);
```

## Testing

Test the API using cURL or Postman:

```bash
curl -X POST http://localhost:3000/api/form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phno": "+1234567890",
    "message": "This is a test message that contains enough content."
  }'
```

## Troubleshooting

**"Error: Failed to verify SMTP connection"**
- Check EMAIL_USER and EMAIL_PASSWORD in `.env`
- For Gmail, use an app-specific password, not your main password
- Enable "Less secure app access" if needed

**"CORS errors"**
- Verify CORS_ORIGIN matches your frontend URL
- Check that requests include proper headers

**"Port already in use"**
- Change PORT in `.env` or kill the process using the port

## License

ISC
