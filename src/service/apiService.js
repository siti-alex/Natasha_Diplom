import axios from 'axios';
//import router from '@/router';

axios.defaults.withCredentials = true;
const api = 'https://192.168.202.115:8004';


const baseURL = `${api}`;

const API = axios.create({
    withCredentials: true,
    baseURL,

    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, X-Requested-With",
        'Content-Type': 'application/json',
        "Set-Cookie": "SameSite=None;",
    }
});

// API.interceptors.response.use(({data}) => data
//     , (error) => {
//         if (error.response && error.response.status === 403 || (error.response && error.response.status === 401)) {
//             router.replace({
//                 name: 'Login',
//                 query: {redirect: router.currentRoute.fullPath},
//             })
//         }
//     });


export default {
    api,
    auth(auth) {
        try {
            const data = new FormData();
            data.append('login', auth.username)
            data.append('passwd', auth.password)
            const response = API.post('/auth', data, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Access-Control-Allow-Origin': 'http://192.168.202.115:8004',
                    // 'Access-Control-Allow-Origin': '*',
                    Accept: 'application/json',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                    'SameSite': 'None'
                },
                withCredentials: true,

            })
            return response;

        } catch (e) {
            return e;
        }
    },
}
