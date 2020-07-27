// const fs = require("fs");
// const express = require("express");
// const app = express();
// app.use(bodyparser.json());
const event = require("../models/saveevent");

// const bodyparser = require("body-parser");

exports.save_event = async (req, res) => {
  try {
    console.log(req.body.Manager_name);
    const eventObj = new event();
    eventObj.eventManager_name = req.body.Manager_name;
    eventObj.eventManager_mobile = req.body.Manager_phone;
    eventObj.eventManager_email = req.body.Manager_email;
    eventObj.location = req.body.Manager_locatioin;
    eventObj.city = req.body.Event_city;
    eventObj.Event_time = req.body.Event_time;
    eventObj.Event_date = req.body.Event_date;
    eventObj.Event_name = req.body.Event_title;
    eventObj.Sitting_Cap = req.body.sitting_capacity;
    eventObj.description = req.body.Event_description;
    eventObj.status = "un-approved";

    try {
      console.log(eventObj);
      await eventObj.save();
      res.json({ message: "aaaa" });
    } catch (error) {
      console.log(error);
      res.json(null);
    }
    // await eventObj.save();
    // res.send(eventObj);
  } catch (error) {
    console.log(error);
    // res.status(500);
  }

  // return res.json(null);
};

// exports.getscholar = (req, res) => {};
