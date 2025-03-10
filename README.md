<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 AI-Based Document Search and Retrieval Assistant</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }
        h1, h2 {
            color: #000;
        }
        .highlight {
            color: #ff5733;
            font-weight: bold;
        }
        .section {
            margin-bottom: 20px;
        }
        .tech-stack {
            background: #dcdcdc;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 AI-Based Document Search and Retrieval Assistant</h1>
        <p>Welcome to the AI-Based Document Search and Retrieval Assistant project. This tool leverages 🤖 artificial intelligence to enhance document search, extraction, and summarization, providing users with efficient and accurate content retrieval.</p>

        <div class="section">
            <h2>❓ Problem Statement</h2>
            <p>Locating relevant documents can be time-consuming due to reliance on <span class="highlight">🔍 literal keyword searches</span> and complex file structures. This inefficiency leads to <span class="highlight">⏳ reduced productivity</span> and <span class="highlight">⚡ delayed decision-making</span>. This AI-powered assistant addresses these challenges by enabling natural language queries, retrieving the most relevant documents, and generating instant summaries.</p>
        </div>

        <div class="section">
            <h2>🔥 Key Features</h2>
            <ul>
                <li><strong>📄 PDF Text Extraction:</strong> Extracts text from uploaded PDFs and processes multi-page documents efficiently.</li>
                <li><strong>🧠 Semantic Search:</strong> Retrieves relevant information using <span class="highlight">natural language processing</span>, identifying the top three most relevant passages.</li>
                <li><strong>📜 Text Summarization:</strong> Generates concise summaries utilizing the <span class="highlight">en_core_web_sm</span> model.</li>
            </ul>
        </div>

        <div class="section">
            <h2>⚙️ How It Works</h2>
            <ol>
                <li><strong>📤 Upload a PDF:</strong> Users upload a document via the web interface.</li>
                <li><strong>❓ Ask a Question:</strong> Enter a natural language query to locate specific information.</li>
                <li><strong>🔎 Get Results:</strong> The system retrieves the most relevant passages along with similarity scores.</li>
                <li><strong>📝 Summarize:</strong> Click the "Summarize" button to generate a concise summary.</li>
            </ol>
        </div>

        <div class="section tech-stack">
            <h2>🛠️ Technology Stack</h2>
            <h3>🖥️ Backend</h3>
            <ul>
                <li>🐍 Python - Core programming language</li>
                <li>🌐 Flask - Web framework for backend API development</li>
                <li>📜 PyPDF2 - Extracts text from PDFs</li>
                <li>🧠 Sentence Transformers - Enables semantic search</li>
                <li>⚡ FAISS - Supports efficient similarity search</li>
            </ul>
            <h3>🎨 Frontend</h3>
            <ul>
                <li>💻 HTML, CSS, JavaScript - User interface development</li>
            </ul>
        </div>
    </div>
</body>
</html>
