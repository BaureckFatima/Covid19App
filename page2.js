function getData()
{
    setTimeout(function timeOut(){
        const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";

        fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => showData(data, "Mauritius"))
        .catch((err) => handleError(err));
    }, 2000);
}

function processData(data)
{
    var mru = data["Mauritius"];
    console.log(mru[mru.length - 1]);
}

function handleError(err)
{
    console.log('%c' + err, 'background: #222; color: #bada55');
}

function extractMauritiusData(data)
{
    console.table(data[country]);

}

function showData(data, country)
{
    let id_confirm = document.getElementById("confirmed");
    let id_recovered = document.getElementById("recovered");
    let id_deaths = document.getElementById("deaths");

    let slice_data = data[country].slice(-1);
    let confirmed = slice_data[0]["confirmed"];
    let recovered = slice_data[0]["recovered"];
    let deaths = slice_data[0]["deaths"];
    console.log(slice_data);   

    id_confirm.innerHTML = confirmed;
    id_recovered.innerHTML = recovered;
    id_deaths.innerHTML = deaths;

}

getData();

   
