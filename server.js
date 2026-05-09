const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const submissions = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/submissions', (req, res) => {
  res.json(submissions);
});

app.post('/submit', (req, res) => {
  const submission = {
    id: submissions.length + 1,
    name: req.body.name || '',
    age: req.body.age || '',
    favoriteColor: req.body.favoriteColor || '',
    gender: req.body.gender || '',
    hobbies: req.body.hobbies || '',
    wish: req.body.wish || '',
    address: req.body.address || '',
    ready: req.body.ready === 'on' || req.body.ready === 'true' || req.body.ready === 'yes',
    dateFilled: req.body.dateFilled || '',
    submittedAt: new Date().toISOString(),
  };

  submissions.push(submission);

  res.status(201).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Submission received</title>
      <link rel="stylesheet" href="/improve.css">
      <style>
        .success-card {
          max-width: 720px;
          margin: 8vh auto 0;
          padding: 32px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 30px 70px rgba(31, 41, 55, 0.16);
          text-align: center;
        }
        .success-card h1 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 4vw, 3rem);
          letter-spacing: -0.03em;
        }
        .success-card p {
          margin: 0;
          color: #667085;
          line-height: 1.6;
        }
        .success-card a {
          display: inline-block;
          margin-top: 22px;
          padding: 14px 22px;
          border-radius: 999px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #2a8ea5, #1d6b7c);
          box-shadow: 0 14px 30px rgba(42, 142, 165, 0.28);
        }
      </style>
    </head>
    <body>
      <main class="page-shell">
        <section class="success-card">
          <p class="eyebrow">Submission received</p>
          <h1>Thanks, ${escapeHtml(submission.name || 'friend')}.</h1>
          <p>Your form was submitted successfully and the server stored the latest entry in memory.</p>
          <a href="/">Back to form</a>
        </section>
      </main>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Form server running at http://localhost:${port}`);
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
