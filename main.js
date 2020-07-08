function getApi(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', cb);
    xhr.open('GET', url);
    xhr.send();
}
document.getElementById("all").addEventListener('click', getAll);
document.getElementById("search").addEventListener('click', searchStates);
//Get all states
function getAll(ev) {
    const url = "https://restcountries.eu/rest/v2/all";
    getApi(url, fillStates);
}
//Search the states
function searchStates(ev) {
    let input = document.getElementById("input").value;
    const url = "https://restcountries.eu/rest/v2/name/" + input;
    getApi(url, fillStates);
}
//Build the state in the table
function fillStates() {
    let states = JSON.parse(this.responseText);
    const head = `<tr><th>State Name</th><th>Top Level Domain</th><th>Capital</th><th>Currencies</th><th>Border</th><th>Flag</th></tr>`;
    console.log("ok");
    const html = states.map(state => `<tr>
            <td>${state.name}</td>
            <td>${state.topLevelDomain}</td>
            <td>${state.capital}</td>
            <td>${state.currencies[0].code},  ${state.currencies[0].name},  ${state.currencies[0].symbol}</td>
            <td>${state.borders}</td>
            <td><img src="${state.flag}"</td>
        </tr>`).join('');
    let stateList = document.getElementById("stateList");
    if (stateList) {
        const con = html === "" ? "mistake" : html;
        stateList.innerHTML = "<table border = `1`>" + head + con + "</table>";
    }
}
