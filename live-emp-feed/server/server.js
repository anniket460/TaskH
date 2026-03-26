const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users = require("./users.json").users;

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let i = 0;

  const interval = setInterval(() => {
    if (i >= users.length) {
      clearInterval(interval);
      res.end();
      return;
    }

    const user = users[i];

    res.write(`data: ${JSON.stringify(user)}\n\n`);

    i++;
  }, 2000);

  req.on("close", () => {
    clearInterval(interval);
  });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
