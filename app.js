
const express = require('express');
const app = express();

// Import API endpoints
const actorRoutes = require('./routes/actor.js');
const filmRoutes = require('./routes/film.js');
const categoryRoutes = require('./routes/category.js');

// Use API routes
app.use('/actor', actorRoutes);
app.use('/film', filmRoutes);
app.use('/category/', categoryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
