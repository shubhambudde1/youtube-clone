export const API_KEY = 'AIzaSyAjMFdoyMRxKYx44N3v9VtsMR65rPdctOo';
export const Value_Converter = (value) => {
    if(value>1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value>1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}