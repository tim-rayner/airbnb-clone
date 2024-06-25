"use strict";
/**
 * @tutorial
 * In this file, we need to create some logical routes. To start, again state that we require Express:
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//define router
const router = express_1.default.Router();
/**
 * @tutorial
 * In order to make sure our data routing is clear and pulls in data in a structured way, we’re going to
 * need a way to generate unique IDs for each user entity.
 */
const uuid = __importStar(require("uuid"));
/**
 * @tutorial
 * Next, we need to set the path for the API so that our user system can handle this data correctly.
 * We can use the following code to do so:
 */
const Users_1 = __importDefault(require("../data/Users"));
let users = Users_1.default;
/**
 * @tutorial
 * Now we can finally create our first endpoint. We’ll create a GET function to retrieve all user data.
 * We can do this using this code:
 */
router.get("/", (req, res) => {
    res.json(users);
    return res;
});
/**
 * @tutorial
 * To get a specific ID, we need to provide a way for the client to pass a user ID and check against the internal data store.
 * We can use the following code to do so:
 */
router.get("/:id", (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));
    if (found) {
        res.json(users.filter((user) => user.id === parseInt(req.params.id)));
    }
    else {
        res.sendStatus(400);
    }
});
//CRUD Functions
//CREATE
router.post("/", (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
    };
    if (!newUser.name || !newUser.email) {
        return res.sendStatus(400);
    }
    users.push(newUser);
    res.json(users);
});
//UPDATE
router.put("/:id", (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));
    if (found) {
        const updateUser = req.body;
        users.forEach((user) => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name;
                user.email = updateUser.email ? updateUser.email : user.email;
                res.json({ msg: "User updated", user });
            }
        });
    }
    else {
        res.sendStatus(400);
    }
});
//DELETE
router.delete("/:id", (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));
    if (found) {
        users = users.filter((user) => user.id !== parseInt(req.params.id));
        res.json({
            msg: "User deleted",
            users,
        });
    }
    else {
        res.sendStatus(400);
    }
});
/**
 * @tutorial
 * With this route created, we can now export this for use by the API using the following code:
 */
exports.default = router;
