const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Serve static files (if you have any CSS, JS, images, etc.)
app.use(express.static('public'));

// HTML content for the perspicarious dictionary page
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perspicarious | Definition</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #f5f5f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.6;
        }

        .dictionary-entry {
            max-width: 800px;
            padding: 3rem;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .dictionary-entry::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4dabf7);
            opacity: 0.7;
        }

        .word {
            font-size: 3.5rem;
            font-weight: bold;
            color: #ff6b6b;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            letter-spacing: -1px;
        }

        .pronunciation {
            font-size: 1.2rem;
            color: #cccccc;
            font-style: italic;
            margin-bottom: 1.5rem;
            opacity: 0.8;
        }

        .part-of-speech {
            font-size: 1.1rem;
            color: #ffd93d;
            font-style: italic;
            margin-bottom: 1rem;
            font-weight: 500;
        }

        .definition {
            font-size: 1.3rem;
            line-height: 1.8;
            color: #f0f0f0;
            margin-bottom: 2rem;
            text-align: justify;
        }

        .etymology {
            font-size: 0.95rem;
            color: #aaaaaa;
            font-style: italic;
            border-left: 3px solid #ff6b6b;
            padding-left: 1rem;
            margin-top: 2rem;
            opacity: 0.8;
        }

        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            margin: 2rem 0;
        }

        @media (max-width: 768px) {
            .dictionary-entry {
                margin: 1rem;
                padding: 2rem;
            }
            
            .word {
                font-size: 2.5rem;
            }
            
            .definition {
                font-size: 1.1rem;
            }
        }

        .accent-dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #ff6b6b;
            border-radius: 50%;
            margin: 0 0.5rem;
            opacity: 0.6;
        }
    </style>
</head>
<body>
    <div class="dictionary-entry">
        <h1 class="word">perspicarious</h1>
        <div class="pronunciation">/ˌpɜːrspɪˈkeɪʃəs/</div>
        
        <div class="divider"></div>
        
        <div class="part-of-speech">adjective</div>
        
        <div class="definition">
            An intelligent and insightful opinion which is dangerously close to crossing the line into societal rebellion.
        </div>
        
        <div class="etymology">
            <span class="accent-dot"></span>
            A word for those who think too clearly for their own good.
            <span class="accent-dot"></span>
        </div>
    </div>
</body>
</html>`;

// Route to serve the main page
app.get('/', (req, res) => {
    res.send(htmlContent);
});

// Catch all other routes and redirect to main page (SPA behavior)
app.get('*', (req, res) => {
    res.send(htmlContent);
});

// Start the server
app.listen(PORT);

// Graceful shutdown
process.on('SIGINT', () => {
    process.exit(0);
});
