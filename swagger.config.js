"use strict";

const { name, version, description } = require("./package.json");

module.exports = {
  openapi: "3.0.3",
  info: {
    title: name,
    version,
    description,
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local API",
    },
  ],
  host: "localhost",
  basePath: "",
  schemas: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  components: {},
  "x-tagGroups": [
    {
      name: "General",
      tags: [
        "Information",
      ],
    },
  ],
};
