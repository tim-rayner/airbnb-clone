"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//when developing, run npx tsc --watch to compile the typescript code to javascript
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const home_1 = __importDefault(require("./routes/home"));
const users_1 = __importDefault(require("./routes/users"));
const listings_1 = __importDefault(require("./routes/listings"));
app.use("/", home_1.default);
app.use("/users", users_1.default);
app.use("/listings", listings_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Airbnb Clone api listening on port ${port}`));
