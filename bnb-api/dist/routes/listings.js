"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//define router
const router = express_1.default.Router();
const listings_01_109_json_1 = __importDefault(require("../data/Listings/LDN/listings-01-109.json"));
const listings = listings_01_109_json_1.default;
router.get("/ldn", (req, res) => {
    res.json(listings_01_109_json_1.default);
    return res;
});
router.get("/ldn/:id", (req, res) => {
    const found = listings_01_109_json_1.default.some((listing) => listing.id === parseInt(req.params.id));
    if (found) {
        res.json(listings_01_109_json_1.default.filter((listing) => listing.id === parseInt(req.params.id)));
    }
    else {
        res.sendStatus(400);
    }
});
router.get("/ldn-top", (req, res) => {
    const top20Listings = listings
        .sort((a, b) => Number(b.review_scores_rating) - Number(a.review_scores_rating))
        .slice(0, 20);
    res.json(top20Listings);
});
exports.default = router;
