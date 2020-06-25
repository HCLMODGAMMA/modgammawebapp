
const LOGIN = "http://gammamoderntechhclmicroservice.azurewebsites.net/login";
const LIST_ALL_CASE = "http://gammamoderntechhclmicroservice.azurewebsites.net/listCases";
const VIEW_CASE_DETAILS = "http://gammamoderntechhclmicroservice.azurewebsites.net/viewCaseDetail?csmNo=";
const SAVE_SUBMIT_CASE = "http://gammamoderntechhclmicroservice.azurewebsites.net/submitCase";



export const Config = (serviceName) =>{
    switch(serviceName){
        case 'login':
            return LOGIN;
        case 'listCases':
            return LIST_ALL_CASE;
        case 'viewCaseDetail':
            return VIEW_CASE_DETAILS;
        case 'submitCase':
            return SAVE_SUBMIT_CASE;
    }
}
