import axios from 'axios'


const baseUrl = 'http://localhost:8081'

export default function  ajax(url,data={},type='GET') {
    if(type === 'GET'){
        return axios.get(baseUrl+url,{params:data})
    }else {
        return axios.post(baseUrl+url,data)
    }
}
