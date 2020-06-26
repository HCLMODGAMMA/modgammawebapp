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

export function listAllCases(){
    const serviceURL = Config('listCases');
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

export function viewCase(csmNo){
    const serviceURL = Config('viewCaseDetail');
    console.log(serviceURL + csmNo);
    return new Promise((resolve, reject)=>{
        axios.get(serviceURL + csmNo)
        .then(responseJson=>{
            resolve(responseJson);
        })
        .catch(error=>{
            reject(error);
        })
    });
}