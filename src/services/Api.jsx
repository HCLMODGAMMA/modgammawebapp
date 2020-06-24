import axios from 'axios'
import {Config} from './Config';

export function login(userData){
    const serviceURL = Config('login');
    return new Promise((resolve, reject)=>{
        axios.post(serviceURL, userData)
        .then(responseJson=>{
            resolve(responseJson);
        })
        .catch(error=>{
            reject(error);
        })
    });
}

export function submitCase(userData){
    const serviceURL = Config('submitCase');
    return new Promise((resolve, reject)=>{
        axios.post(serviceURL, userData)
        .then(responseJson=>{
            resolve(responseJson);
        })
        .catch(error=>{
            reject(error);
        })
    });
}

export function ListofCases(facilityId){
    const serviceURL = Config('listCases');
    // console.log(serviceURL + facilityId);
    return new Promise((resolve, reject)=>{
        axios.get(serviceURL)
        .then(responseJson=>{
            resolve(responseJson);
        })
        .catch(error=>{
            reject(error);
        })
    });
}