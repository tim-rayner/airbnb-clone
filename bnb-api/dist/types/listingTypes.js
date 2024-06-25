"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = exports.RoomType = exports.HostVerifications = exports.HostResponseTime = exports.HasAvailability = exports.LastScraped = void 0;
var LastScraped;
(function (LastScraped) {
    LastScraped["The19032024"] = "19/03/2024";
    LastScraped["The20032024"] = "20/03/2024";
    LastScraped["The21032024"] = "21/03/2024";
    LastScraped["The22032024"] = "22/03/2024";
})(LastScraped || (exports.LastScraped = LastScraped = {}));
var HasAvailability;
(function (HasAvailability) {
    HasAvailability["Empty"] = "";
    HasAvailability["F"] = "f";
    HasAvailability["T"] = "t";
})(HasAvailability || (exports.HasAvailability = HasAvailability = {}));
var HostResponseTime;
(function (HostResponseTime) {
    HostResponseTime["AFewDaysOrMore"] = "a few days or more";
    HostResponseTime["NA"] = "N/A";
    HostResponseTime["WithinADay"] = "within a day";
    HostResponseTime["WithinAFewHours"] = "within a few hours";
    HostResponseTime["WithinAnHour"] = "within an hour";
})(HostResponseTime || (exports.HostResponseTime = HostResponseTime = {}));
var HostVerifications;
(function (HostVerifications) {
    HostVerifications["Email"] = "['email']";
    HostVerifications["EmailPhone"] = "['email', 'phone']";
    HostVerifications["EmailPhoneWorkEmail"] = "['email', 'phone', 'work_email']";
    HostVerifications["Phone"] = "['phone']";
})(HostVerifications || (exports.HostVerifications = HostVerifications = {}));
var RoomType;
(function (RoomType) {
    RoomType["EntireHomeApt"] = "Entire home/apt";
    RoomType["HotelRoom"] = "Hotel room";
    RoomType["PrivateRoom"] = "Private room";
})(RoomType || (exports.RoomType = RoomType = {}));
var Source;
(function (Source) {
    Source["CityScrape"] = "city scrape";
    Source["PreviousScrape"] = "previous scrape";
})(Source || (exports.Source = Source = {}));
