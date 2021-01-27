const fs = require("fs");
const parse = require("csv-parse");

const _directory = "./csv";
const _file = "/003_2020-M-LDC - Sheet1.csv";

const parser = parse({ columns: true }, function (err, questions) {
  console.log(questions);
});

fs.createReadStream(_directory + _file).pipe(parser);
