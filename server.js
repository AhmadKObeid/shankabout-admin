const express = require('express');
const app = express();
const fallback = require('express-history-api-fallback');

const root = `${__dirname}/build`;
app.use(express.static(root));

// history fallback
app.use(fallback('index.html', { root }));

app.listen(process.env.PORT || 3001, () =>
    console.log(
        `server is listening on port ${process.env.PORT || 3001}`,
    ),
);