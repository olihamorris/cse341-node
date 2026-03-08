
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "CSE341 Contacts API with CRUD operations"
  },
  host: "localhost:3000",
  schemes: ["http"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);

