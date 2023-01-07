#!/usr/bin/env ts-node

// const inquirer = require('inquirer');
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

function logo()  {
    figlet.text('HOCKEY',{
        font: 'Slant',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width:100,
        whitespaceBreak: true
        }, 
        function(err:any, data:any) {
            if (err) {
                console.log('Error');
                console.dir(err)
                return;
            }
        // return data
        console.log(chalk.cyanBright.bold(data))
    })
};

logo();
inquirer 
    .prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Select a league:',
            default: 'NHL',
            choices: [
                'NHL', 'OHL', 'WHL', 'QMJHL', 'AHL',
            ],
        },
    ])
    
    .then((answers:any) => {
        console.info('Option:', answers.mainMenu);
    });


// const { program } = require('@caporal/core');

// const pkg = require('../package.json');
// const appName = Object.keys(pkg.bin)[0];
// // NOTE: just use inquirer instead of caporal!!
// program
//     .version(pkg.version)
//     .description(pkg.description)
//     .name(appName)
//     .action((args, options, logger) => {
//         logger.info(`Configuration value: `)
//     })
    
//     // Command options
//     .command('scores', 'Get scores of past and live fixtures')
//     .alias('s')
//     .option('--help', 'Show help')
//     .option('--live', 'Live scores')
//     .option('--team', 'Select team')

//     .command('fixtures', 'Get upcoming and past fixtures of a league and team')
//     .alias('f')
//     .option('--help', 'Show help')
//     .option('--league','League')
//     .option('--team','Team name or substring')
//     .option('--next', 'Next or upcoming matches')

//     .command('standings', 'Get standings of particular league')
//     .option('--help', 'Show help')
//     .option('--league','League to be searches')

//     .command('lists', 'List of codes of various competitions')
//     .option('--help', 'Show help')
//     .option('--refresh','Refresh league ids')

//     .command('config', 'Change configuration and defualts')
//     .option('--help', 'Show help')

// program.run()