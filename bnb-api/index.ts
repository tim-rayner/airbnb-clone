//when developing, run npx tsc --watch to compile the typescript code to javascript
import express from "express";
const app = express();

import home from "./routes/home";
import users from "./routes/users";
import listings from "./routes/listings";

app.use("/", home);
app.use("/users", users);
app.use("/listings", listings);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Airbnb Clone api listening on port ${port}`)
);
