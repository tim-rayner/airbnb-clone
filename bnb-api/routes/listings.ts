import express, { Router, Request, Response } from "express";

//define router
const router = express.Router();

import LondonListings109 from "../data/Listings/LDN/listings-01-109.json";
import { Listing } from "../types/listingTypes";

const listings: Listing[] = LondonListings109;

router.get("/ldn", (req: Request, res: Response) => {
  res.json(listings);
  return res;
});

router.get("/ldn/:id", (req: Request, res: Response) => {
  const found = listings.some(
    (listing) => listing.id === parseInt(req.params.id)
  );

  if (found) {
    res.json(
      LondonListings109.filter(
        (listing) => listing.id === parseInt(req.params.id)
      )
    );
  } else {
    res.sendStatus(400);
  }
});

router.get("/ldn-top", (req: Request, res: Response) => {
  const top20Listings = listings
    .sort(
      (a, b) => Number(b.review_scores_rating) - Number(a.review_scores_rating)
    )
    .slice(0, 20);
  res.json(top20Listings);
});

export default router;
