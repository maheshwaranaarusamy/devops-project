const express = require('express');
const path = require('path');

const app = express();

// =====================
// SERVE STATIC FILES (HTML, CSS, IMAGES)
// =====================
app.use(express.static(__dirname));

// =====================
// BASIC HEALTH ROUTE
// =====================
app.get('/', (req, res) => {
  res.send(`
    <h2>DevOps Node App is Running ✅</h2>
    <p>Status: Healthy</p>
  `);
});

// =====================
// REASON PAGE
// =====================
if (process.env.SHOW_REASON_LAYER === 'true') {
  app.get('/reason', (req, res) => {
    res.sendFile(path.join(__dirname, 'reason.html'));
  });
}

// =====================
// NOTE PAGE
// =====================
app.get('/note', (req, res) => {
  res.sendFile(path.join(__dirname, 'note.html'));
});

// =====================
// TRUTH PAGE
// =====================
app.get('/truth', (req, res) => {
  res.sendFile(path.join(__dirname, 'truth.html'));
});

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
