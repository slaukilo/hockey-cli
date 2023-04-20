import * as dotenv from 'dotenv'
dotenv.config();

import json_data from '../ids.json'
import axios from 'axios';
const API_KEY = process.env.API_KEY;

// Set up axios instance with default headers and base URL
const config = axios.create({
    baseURL: 'https://v1.hockey.api-sports.io/',
    headers: {
        'x-rapidapi-host': 'v1.hockey.api-sports.io',
        'x-rapidapi-key': API_KEY,
    }
});

// Define function to fetch hockey data based on user choices
export async function getHockeyData(league:string, subMenu: string) {
    let endpoint = ''
    switch (subMenu) {
        case 'scores':
            endpoint = `scores/${league}/latest`
            break;
        case 'fixtures':
            endpoint = `fixtures/${league}/next/10`
            break;
        case 'standings':
            endpoint = `standings/${league}/next/10`
            break;
        case 'lists':
            endpoint= `teams/list/${league}`;
            break;
        default:
            try {
                throw new Error('invalid submenu option')
            }
            catch(e) {
                console.log(e)
            }
    }
    const res = await config.get(endpoint);
    return res.data;
}
