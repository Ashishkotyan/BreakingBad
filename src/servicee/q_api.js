import axios from 'axios';


export const quotesdata = async (text) => {
    return await axios.get(`https://breakingbadapi.com/api/quotes`)
}


