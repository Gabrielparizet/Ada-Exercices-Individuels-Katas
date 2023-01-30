const urlWeatherTest = "https://api.open-meteo.com/v1/forecast?latitude=replace1&longitude=replace2&current_weather=true";


// La fonction createUrl changera la latitude et la longitude dans l'URL de l'api Open Meteo avec les valeurs obtenues grâce à la localisation de l'utilisateur. 
function createUrl (url){
    let firstStep = url.replace("replace1", "4");
    let resultUrl = firstStep.replace("replace2", "5");
    return resultUrl;
}
 console.log(createUrl(urlWeatherTest));

 