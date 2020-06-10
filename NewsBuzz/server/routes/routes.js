const express = require("express");
// const app = express();
// app.use(bodyparser.json());
const router = express.Router();
const { getData } = require("../controllers/read");
const { getapi } = require("../controllers/api/news");
const { getscholar } = require("../controllers/api/BSscholarship");
const { MSgetscholar } = require("../controllers/api/MSscholarship");
const { getTechnology } = require("../controllers/api/technology-news");

const { getBSadmission } = require("../controllers/api/BSadmission");
const { getMSadmission } = require("../controllers/api/MSadmissioln");

const { getsport } = require("../controllers/api/sports");
const { save_event } = require("../controllers/saveEvent");
const { getBussiness } = require("../controllers/api/bussiness");
const { getWorld } = require("../controllers/api/worls");
const { getJobs } = require("../controllers/api/jobs");
const { Search_latest_news } = require("../controllers/searchApi/searchLatest");
// ==========Events
const {
  Search_registerEvent,
} = require("../controllers/registerEventsAPI/DisplayApprovedEvents");

const {
  updateEventStatus,
} = require("../controllers/registerEventsAPI/changeEventStatus");

const {
  Reaact_Search_registerEvent,
} = require("../controllers/registerEventsAPI/react_Event_display");

// ===============
// const {
//   getAllEvent
// } = require("../controllers/registerEventsAPI/getAllEvents");

const {
  Search_bussiness_news,
} = require("../controllers/searchApi/searchBussiness");

const { Search_sport_news } = require("../controllers/searchApi/searchSport");

const {
  Search_technology_news,
} = require("../controllers/searchApi/searchTechnology");

const { Search_world_news } = require("../controllers/searchApi/searchWorld");

const {
  Search_BSscholarship_news,
} = require("../controllers/searchApi/BSscholarship");
const {
  Search_MSscholarship_news,
} = require("../controllers/searchApi/MSschoolarship");

const {
  Search_BSadmission_news,
} = require("../controllers/searchApi/BSadmission");
const {
  Search_MSadmission_news,
} = require("../controllers/searchApi/MSadmission");

const { Search_jobs_news } = require("../controllers/searchApi/jobs");

const {
  Search_Event_ID,
} = require("../controllers/registerEventsAPI/getEventById");

// ------------------------------------------------------

const { readJobs } = require("../controllers/img_download_api/img_download");
const {
  img_data_update_to_db,
} = require("../controllers/img_download_api/img_data_read");
// ------------------------------------------------------
// save_event

router.get("/", getData);
// router.get("/scrap", scrap);

router.get("/api/news", getapi);
router.get("/api/BSscholarship", getscholar);
router.get("/api/MSscholarship", MSgetscholar);
router.get("/api/tech", getTechnology);
router.get("/api/BSadmission", getBSadmission);
router.get("/api/MSadmission", getMSadmission);
router.get("/api/sports", getsport);
router.get("/api/world", getWorld);
router.get("/api/bussiness", getBussiness);
router.get("/api/jobs", getJobs);

// =======================================img download===========================
router.get("/api/img/download", readJobs);
router.post("/api/img/DBdata/update", img_data_update_to_db);
// =======================================img download===========================

router.post("/saveEvent", save_event);

router.post("/api/search/latest", Search_latest_news);
router.post("/api/search/bussiness", Search_bussiness_news);
router.post("/api/search/sports", Search_sport_news);
router.post("/api/search/technology", Search_technology_news);
router.post("/api/search/world", Search_world_news);
router.post("/api/search/MSadmission", Search_MSadmission_news);
router.post("/api/search/BSadmission", Search_BSadmission_news);
router.post("/api/search/MSscholarship", Search_MSscholarship_news);
router.post("/api/search/BSscholarship", Search_BSscholarship_news);
router.post("/api/search/searchjobs", Search_jobs_news);

router.post("/api/display/registerEvent", Search_registerEvent);
router.get("/api/display/registerEvent/detail", Search_Event_ID);

router.get("/api/display/react/registerEvent", Reaact_Search_registerEvent);

router.post("/api/display/registerEvent/updateStatus", updateEventStatus);

module.exports = router;