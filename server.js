
// const express = require('express');
// const path = require('path');
// const app = express();

// // 將Vue.js應用的靜態資源提供給客戶端
// app.use(express.static(path.join(__dirname, 'dist')));

// // 所有路由導向到index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


import express from 'express';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);


const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

// 其他程式碼...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



// import express from 'express';
// import path from 'path';

// const app = express();

// // 將Vue.js應用的靜態資源提供給客戶端
// app.use(express.static(path.join(__dirname, 'dist')));

// // 所有路由導向到index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

