const express = require('express');
const path = require('path');
const app = express();

// 將Vue.js應用的靜態資源提供給客戶端
app.use(express.static(path.join(__dirname, 'dist')));

// 所有路由導向到index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
