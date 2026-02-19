document.querySelector('#search').addEventListener('submit', (event) => {
    event.preventDefault();
    //PREVENT DEFAULT BEHAVIOR

    const city = document.querySelector('#city').value;

if (!city){
    return showAlert("Type a city..");
}

const apikey = '7f35dfd2baeca7e607e569d5a71595ef'
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}';
});

function showAlert(msg){
    document.querySelector('#alert').innerHTML = msg;
}