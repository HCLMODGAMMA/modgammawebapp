const LOGIN = "http://localhost:9090/login";
const LIST_ALL_CASE = "http://localhost:9090/listCases";
const VIEW_CASE_DETAILS = "http://localhost:9090/viewCaseDetail?csmNo=";
const SAVE_SUBMIT_CASE = "http://localhost:9090/submitCase";



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
