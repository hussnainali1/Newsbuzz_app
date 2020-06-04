var http = require("http"); // 1 - Import Node.js core module
const fs = require("fs");
const path = require("path");
const jobs_n = require("../../models/jobs_model");

exports.img_data_update_to_db = async (req, res) => {
  function readFiles(dir, processFile) {
    // read directory
    fs.readdir(dir, (error, fileNames) => {
      if (error) throw error;

      fileNames.forEach((filename) => {
        // get current file name
        const name = path.parse(filename).name;
        // get current file extension
        const ext = path.parse(filename).ext;

        // get current file path
        const filepath = path.resolve(dir, filename);

        // get information about the file
        fs.stat(filepath, function (error, stat) {
          if (error) throw error;

          // check if the current path is a file or a folder
          const isFile = stat.isFile();

          // exclude folders
          if (isFile) {
            // callback, do something with the file
            processFile(filepath, name, ext, stat);
          }
        });
      });
    });
  }

  readFiles(
    "D:/Project/react/final_project/After_70-_events-work/NewsBuzz/server/img_text_files/",
    (filepath, name, ext, stat) => {
      // console.log("file path:", filepath);0
      console.log("file name:", name.toString());

      fs.readFile(filepath, async (err, data) => {
        if (err) throw err;
        let jobs = JSON.parse(data);
        var data = jobs.img_description;

        // ================================================
        console.log("===================================================");
        console.log("this id readed from a file = " + jobs._id);

        // ================================================

        var myquery = { _id: jobs._id };
        var newvalues = { $set: { description_img_link_data: data } };
        // ====================================================================

        try {
          // await jobs_n.findOne({ "_id": jobs._id }, function (err, doc) {
          //   console.log(doc)
          // });
          jobs_n.updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log(res);
          });
        } catch (error) {
          console.log(error);
        }
      });
    }
  );
  return res.json({ message: " all image data save to database" });
};
