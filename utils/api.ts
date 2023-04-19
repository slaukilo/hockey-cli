import * as dotenv from 'dotenv'
dotenv.config();

import axios from 'axios';
const API_KEY = process.env.API_KEY;

const config = axios.create({
    baseURL: 'https://api-hockey.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'api-hockey.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
    }
});

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
