import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'

//create an object that satisfies the "DataReader" interface
// const csvFileReader = new CsvFileReader('football.csv')
//create an instance of MatchReader and pass in something that satisfies the "DataReader" interface
// const matchReader = new MatchReader(csvFileReader)
//let matcher reader transform the data into something more readable
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()
//now we will get matches to iterate from , such as matchReader.matches

const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches)
