const apiUrl = "https://swapi.dev/api/people/";

const table = document.querySelector(".table");
const tableBody = table.tBodies[0];
const tableHeader = table.tHead;



let tableData = {};

// Первоначальная выгрузка данных API в таблицу
getResponseOfJson(apiUrl).then(setLinkButtonsAndRenderTableBody).catch(console.log);


function handlerButtonClick(e) {
    tableBody.innerHTML = "";
    getResponseOfJson(e.target.dataset.link).then(setLinkButtonsAndRenderTableBody).catch(console.log);
}

async function getResponseOfJson(apiUrl) {
    const response = await fetch(apiUrl);
    if(response.ok) {
        return response.json();
    } else {
        return new Error(`Ошибка с кодом ${response.status}: ${response.statusText}`)
    }
}



function renderTableBody(tableBody, tableData ) {
    tableBody.innerHTML = "";
    let tableRowHTML;
    tableData.forEach(item => {
        tableRowHTML = `
            <tr>
                <td>${item["name"]}</td>
                <td>${item["height"]}</td>
                <td>${item["mass"]}</td>
                <td>${item["gender"]}</td>
            </tr>
        `;

        tableBody.insertAdjacentHTML("beforeend", tableRowHTML);
    });
}


 
 
function setLinkButtonsAndRenderTableBody(data) {
    tableData = JSON.parse(JSON.stringify(data));

    renderTableBody(tableBody, tableData["results"]);
}
