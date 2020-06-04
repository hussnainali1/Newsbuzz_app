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
var request = require("request");
// const jobs_news = require("../../models/jobs_model");
// var fs = require("fs");

exports.getData = async (req, res) => {
  try {
    fs.readFile("./datafiles/newdata/DailyNews.json", (err, data) => {
      if (err) throw err;
      let student = JSON.parse(data);
      for (var key in student) {
        const Dawn = new dawn(student[key]);

        //console.log(Dawn.tilte)
        Dawn.save();
      }
    });
    fs.readFile("./datafiles/newdata/DailyLocalNews.json", (err, data) => {
      if (err) throw err;
      let student = JSON.parse(data);
      for (var key in student) {
        const Dawn = new dawn(student[key]);
        Dawn.save();
      }
    });

    fs.readFile("./datafiles/newdata/DailyBussinesss.json", (err, data) => {
      if (err) throw err;
      let bussi = JSON.parse(data);
      for (var key in bussi) {
        const bus = new buss_m(bussi[key]);
        bus.save();
      }
    });

    fs.readFile("./dataFiles/newdata/BSscholarship_news.json", (err, data) => {
      if (err) throw err;
      let BSstd = JSON.parse(data);
      for (var key in BSstd) {
        const scholarshipNews = new BSscholarNews(BSstd[key]);
        scholarshipNews.save();
      }
    });
    fs.readFile(
      "./dataFiles/newdata/MSscholarPortalscholarship_news.json",
      (err, data) => {
        if (err) throw err;
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
        if (err) throw err;
        let MSstd = JSON.parse(data);
        for (var key in MSstd) {
          const scholarshipNews = new BSscholarNews(MSstd[key]);
          scholarshipNews.save();
        }
      }
    );
    fs.readFile("./dataFiles/newdata/MSscholarship_news.json", (err, data) => {
      if (err) throw err;
      let MSstd = JSON.parse(data);
      for (var key in MSstd) {
        const scholarshipNews = new MSscholarNews(MSstd[key]);
        scholarshipNews.save();
      }
    });

    fs.readFile("./dataFiles/technology.json", (err, data) => {
      if (err) throw err;
      let techno = JSON.parse(data);
      for (var key in techno) {
        const techNews = new tec(techno[key]);
        techNews.save();
      }
    });

    fs.readFile("./dataFiles/worlds.json", (err, data) => {
      if (err) throw err;
      let world = JSON.parse(data);
      for (var key in world) {
        const worldNews = new world_N(world[key]);
        worldNews.save();
      }
      // return res.json({ message: " All the Data saved Successfully" });
    });

    fs.readFile("./dataFiles/newdata/BSadmission_news.json", (err, data) => {
      if (err) throw err;
      let admi = JSON.parse(data);
      for (var key in admi) {
        const BSadmissionNews = new BSadmission_N(admi[key]);
        BSadmissionNews.save();
      }
      // return res.json({ message: " All the Data saved Successfully" });
    });
    fs.readFile("./dataFiles/newdata/MSadmission_news.json", (err, data) => {
      if (err) throw err;
      let admi = JSON.parse(data);
      for (var key in admi) {
        const MSadmissionNews = new MSadmission_N(admi[key]);
        MSadmissionNews.save();
      }
      // return res.json({ message: " All the Data saved Successfully" });
    });

    fs.readFile("./dataFiles/newdata/DailySports.json", (err, data) => {
      if (err) throw err;
      let sport = JSON.parse(data);
      for (var key in sport) {
        const sportNews = new sports_n(sport[key]);
        sportNews.save();
      }
    });

    fs.readFile("./dataFiles/newdata/Jobs.json", (err, data) => {
      if (err) throw err;
      let jobs = JSON.parse(data);
      for (var key in jobs) {
        const jobsNews = new jobs_n(jobs[key]);
        jobsNews.save();
      }
      // return res.json({ message: " All the Data saved Successfully" });
    });
    try {
      const jobs_R = await jobs_n.find();

      let i = 0;

      while (jobs_R[i] != null) {
        // -----------------------------------------------

        console.log("===" + i + "====");
        console.log("this is id without conversion == " + jobs_R[i]._id);
        // console.log("this is id with conversion == " + jobs_R._id[i].toHaxString());
        // -----------------------------------------------

        img_name = jobs_R[i]._id + ".jpg";

        console.log(img_name);
        img_link = jobs_R[i].description_img_link;
        // ====================================

        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            console.log("content-type:", res.headers["content-type"]);
            console.log("content-length:", res.headers["content-length"]);

            request(uri)
              .pipe(fs.createWriteStream("./img_to_be_OCR//" + filename))
              .on("close", callback);
          });
        };

        download(img_link, img_name, function () {
          console.log("done");
        });
        // ===================================
        i = i + 1;
      }
      return res.json({ message: " all images are downloaded" });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server error");
    }
  } catch (error) {
    res.json(error);
  }
};

// exports.getscholar = (req, res) => {};
