"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//create an object that satisfies the "DataReader" interface
// const csvFileReader = new CsvFileReader('football.csv')
//create an instance of MatchReader and pass in something that satisfies the "DataReader" interface
// const matchReader = new MatchReader(csvFileReader)
//let matcher reader transform the data into something more readable
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
//now we will get matches to iterate from , such as matchReader.matches
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
