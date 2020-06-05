const fs = require("fs");
const dawn = require("../models/dawn");
const BSscholarNews = require("../models/BSscholarnews");
const MSscholarNews = require("../models/MSscholarnews");
const tec = require("../models/tech");
const world_N = require("../models/worldNews");

const BSadmission_N = require("../models/BSadmission");
const MSadmission_N = require("../models/MSadmission");

const jobs_n = require("../models/jobs_model");

const sports_n = require("../models/sports");
const buss_m = require("../models/business_model");

exports.getData = (req, res) => {
  try {
    fs.readFile("./datafiles/newdata/DailyNews.json", (err, data) => {
      if (err) console.log(error);
      let student = JSON.parse(data);
      for (var key in student) {
        const Dawn = new dawn(student[key]);

        //console.log(Dawn.tilte)
        Dawn.save();
      }
    });
    fs.readFile("./datafiles/newdata/DailyLocalNews.json", (err, data) => {
      if (err) console.log(error);
      let student = JSON.parse(data);
      for (var key in student) {
        const Dawn = new dawn(student[key]);
        Dawn.save();
      }
    });

    fs.readFile("./datafiles/newdata/DailyBussinesss.json", (err, data) => {
      if (err) console.log(error);
      let bussi = JSON.parse(data);
      for (var key in bussi) {
        const bus = new buss_m(bussi[key]);
        bus.save();
      }
    });

    fs.readFile("./dataFiles/newdata/BSscholarship_news.json", (err, data) => {
      if (err) console.log(error);
      let BSstd = JSON.parse(data);
      for (var key in BSstd) {
        const scholarshipNews = new BSscholarNews(BSstd[key]);
        scholarshipNews.save();
      }
    });
    fs.readFile(
      "./dataFiles/newdata/MSscholarPortalscholarship_news.json",
      (err, data) => {
        if (err) console.log(error);
        let MSstd = JSON.parse(data);
        for (var key in MSstd) {
          const scholarshipNews = new MSscholarNews(MSstd[key]);
          scholarshipNews.save();
        }
      }
    );
    fs.readFile(
      "./dataFiles/newdata/BSscholarPortalscholarship_news.json",
      (err, data) => {
        if (err) console.log(error);
        let MSstd = JSON.parse(data);
        for (var key in MSstd) {
          const scholarshipNews = new BSscholarNews(MSstd[key]);
          scholarshipNews.save();
        }
      }
    );
    fs.readFile("./dataFiles/newdata/MSscholarship_news.json", (err, data) => {
      if (err) console.log(error);
      let MSstd = JSON.parse(data);
      for (var key in MSstd) {
        const scholarshipNews = new MSscholarNews(MSstd[key]);
        scholarshipNews.save();
      }
    });

    fs.readFile("./dataFiles/technology.json", (err, data) => {
      if (err) console.log(error);
      let techno = JSON.parse(data);
      for (var key in techno) {
        const techNews = new tec(techno[key]);
        techNews.save();
      }
    });

    fs.readFile("./dataFiles/worlds.json", (err, data) => {
      if (err) console.log(error);
      let world = JSON.parse(data);
      for (var key in world) {
        const worldNews = new world_N(world[key]);
        worldNews.save();
      }
      // return res.json({ message: " All the Data saved Successfully" });
    });

    fs.readFile("./dataFiles/newdata/BSadmission_news.json", (err, data) => {
      if (err) console.log(error);
      let admi = JSON.parse(data);
      for (var key in admi) {
        const BSadmissionNews = new BSadmission_N(admi[key]);
        BSadmissionNews.save();
      }
      // return res.json({ message: " All the Data saved Successfully" });
    });
    fs.readFile("./dataFiles/newdata/MSadmission_news.json", (err, data) => {
      if (err) console.log(error);
      let admi = JSON.parse(data);
      for (var key in admi) {
        const MSadmissionNews = new MSadmission_N(admi[key]);
        MSadmissionNews.save();
      }
      // return res.json({ message: " All the Data saved Successfully" });
    });

    fs.readFile("./dataFiles/newdata/DailySports.json", (err, data) => {
      if (err) console.log(error);
      let sport = JSON.parse(data);
      for (var key in sport) {
        const sportNews = new sports_n(sport[key]);
        sportNews.save();
      }
    });

    fs.readFile("./dataFiles/newdata/Jobs.json", (err, data) => {
      if (err) console.log(error);
      let jobs = JSON.parse(data);
      for (var key in jobs) {
        const jobsNews = new jobs_n(jobs[key]);
        jobsNews.save();
      }
      return res.json({ message: " All the Data saved Successfully" });
    });
  } catch (error) {
    console.log(error)
    res.json(error);
  }
};

// exports.getscholar = (req, res) => {};
