#!/usr/bin/env ts-node

// const inquirer = require('inquirer');
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

// cli logo funtion **doesn't call before prompt
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


async function CLI() {
    // logo();
    // Fonts from http://patorjk.com/software/taag/#p=testall&f=Graffiti&t=HOCKEY
    // Optional fonts: Slant, ANSI Shadow, Speed, Larry 3D, Greek, NT Greek, Stop
    console.log(chalk.redBright.bold(figlet.textSync('HOCKEY', {font: 'Larry 3D'})));

    // Prompt the user to select a league
    const leagueAnswer = await inquirer.prompt([
        {
            type: 'list',
            name: 'league',
            message: 'Select a league',
            default:'NHL',
            choices: ['NHL', 'OHL', 'WHL', 'QMJHL', 'AHL']
        },
    ]);

    // Prompt the user to select a sub-menu based on the selected league
    const subMenuAnswer = await inquirer.prompt([
        {
            type: 'list',
            name: 'stats',
            message: `Select an option for ${leagueAnswer.league}`,
            default:'scores',
            choices: ['scores', 'fixtures', 'standing', 'lists']
        },
    ]);

    // Log the user's answers
    console.log(`Selected league: ${chalk.green.bold(leagueAnswer.league)}`);
    console.log(`Selected sub-menu: ${chalk.green.bold(subMenuAnswer.stats)}`);    
}

CLI();
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