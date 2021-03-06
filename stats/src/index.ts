import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv'); 

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const matches: MatchData[] = matchReader.matches;

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

const htmlSummary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
);

htmlSummary.buildAndPrintReport(matchReader.matches);
