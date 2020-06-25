
const LOGIN = "https://gammamoderntechhclmicroservice.azurewebsites.net/login";
const LIST_ALL_CASE = "https://gammamoderntechhclmicroservice.azurewebsites.net/listCases";
const VIEW_CASE_DETAILS = "https://gammamoderntechhclmicroservice.azurewebsites.net/viewCaseDetail?csmNo=";
const SAVE_SUBMIT_CASE = "https://gammamoderntechhclmicroservice.azurewebsites.net/submitCase";



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
