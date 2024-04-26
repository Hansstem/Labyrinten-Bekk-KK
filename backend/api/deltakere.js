const express = require("express");

const participantsRoute = express.Router()

const participants = ["Anniken", "Kristian", "Øyvind", "Magnus"]

participantsRoute.post("/deltakere", async (req, res) => {
  const participant = req.body.participant

  participants.push(participant)
  return res.status(200).json({ participants })
});

participantsRoute.get("/deltakere", async (req, res) => {
  return res.status(200).json({ participants })
})

module.exports = participantsRoute