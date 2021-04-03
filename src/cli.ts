import { Command } from 'commander';
import { translate } from './main'; // in TypeScript
const program = new Command();

program
  .version('0.0.1')
  .name('fy')
  .usage('<English>')
  .arguments('<English>')
  .action((english) => {
    translate(english);
  });

program.parse(process.argv);