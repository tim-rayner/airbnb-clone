export interface Listing {
  id: number;
  listing_url: string;
  scrape_id: number;
  last_scraped: LastScraped;
  source: Source;
  name: string;
  description: string;
  neighborhood_overview: string;
  picture_url: string;
  host_id: number;
  host_url: string;
  host_name: string;
  host_since: string;
  host_location: string;
  host_about: string;
  host_response_time: HostResponseTime;
  host_response_rate: string;
  host_acceptance_rate: string;
  host_is_superhost: HasAvailability;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: string;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: HostVerifications;
  host_has_profile_pic: HasAvailability;
  host_identity_verified: HasAvailability;
  neighbourhood: string;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed: string;
  latitude: number;
  longitude: number;
  property_type: string;
  room_type: RoomType;
  accommodates: number;
  bathrooms: number | string;
  bathrooms_text: string;
  bedrooms: number | string;
  beds: number | string;
  amenities: string;
  price: string;
  minimum_nights: number;
  maximum_nights: number;
  minimum_minimum_nights: number;
  maximum_minimum_nights: number;
  minimum_maximum_nights: number;
  maximum_maximum_nights: number;
  minimum_nights_avg_ntm: number;
  maximum_nights_avg_ntm: number;
  calendar_updated: string;
  has_availability: HasAvailability;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: LastScraped;
  number_of_reviews: number;
  number_of_reviews_ltm: number;
  number_of_reviews_l30d: number;
  first_review: string;
  last_review: string;
  review_scores_rating: number | string;
  review_scores_accuracy: number | string;
  review_scores_cleanliness: number | string;
  review_scores_checkin: number | string;
  review_scores_communication: number | string;
  review_scores_location: number | string;
  review_scores_value: number | string;
  license: string;
  instant_bookable: HasAvailability;
  calculated_host_listings_count: number;
  calculated_host_listings_count_entire_homes: number;
  calculated_host_listings_count_private_rooms: number;
  calculated_host_listings_count_shared_rooms: number;
  reviews_per_month: number | string;
}

export enum LastScraped {
  The19032024 = "19/03/2024",
  The20032024 = "20/03/2024",
  The21032024 = "21/03/2024",
  The22032024 = "22/03/2024",
}

export enum HasAvailability {
  Empty = "",
  F = "f",
  T = "t",
}

export enum HostResponseTime {
  AFewDaysOrMore = "a few days or more",
  NA = "N/A",
  WithinADay = "within a day",
  WithinAFewHours = "within a few hours",
  WithinAnHour = "within an hour",
}

export enum HostVerifications {
  Email = "['email']",
  EmailPhone = "['email', 'phone']",
  EmailPhoneWorkEmail = "['email', 'phone', 'work_email']",
  Phone = "['phone']",
}

export enum RoomType {
  EntireHomeApt = "Entire home/apt",
  HotelRoom = "Hotel room",
  PrivateRoom = "Private room",
}

export enum Source {
  CityScrape = "city scrape",
  PreviousScrape = "previous scrape",
}
