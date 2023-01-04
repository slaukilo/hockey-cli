#!/usr/bin/env ts-node

const { program } = require('@caporal/core');

const pkg = require('../package.json');
const appName = Object.keys(pkg.bin)[0];

program
    .version(pkg.version)
    .description(pkg.description)
    .name(appName)
    .action((args, options, logger) => {
        logger.info(`Configuration value: `)
    })
    
    // Command options
    .command('scores', 'Get scores of past and live fixtures')
    .aliad('s')
    .option('--help', 'Show help')
    .option('--live', 'Live scores')
    .option('--team', 'Select team')

    .command('fixtures', 'Get upcoming and past fixtures of a league and team')
    .alias('f')
    .option('--help', 'Show help')
    .option('--league','League')
    .option('--team','Team name or substring')
    .option('--next', 'Next or upcoming matches')

    .command('standings', 'Get standings of particular league')
    .option('--help', 'Show help')
    .option('--league','League to be searches')

    .command('lists', 'List of codes of various competitions')
    .option('--help', 'Show help')
    .option('--refresh','Refresh league ids')

    .command('config', 'Change configuration and defualts')
    .option('--help', 'Show help')

program.run()