(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
class Table {
    constructor(tableElem, headersTitle, apiURL) {
        this.wrapper = tableElem;
        this.header = tableElem.tHead;
        this.headersTitle = headersTitle;
        this.apiURL = apiURL;
    }
    renderHeader() {
        this.header = document.createElement("thead");
        this.header.classList.add("table__head");
        this.wrapper.append(this.header);
        let HTML = "<tr>";
        this.headersTitle.forEach(item => {
            HTML += `
                <th class="table__th">${item["name"]}</th>
            `;
        });
        HTML += "</tr>";
        this.header.insertAdjacentHTML('beforeend', HTML);
    }
    renderBody() {
        this.body = document.createElement("tbody");
        this.body.classList.add("table__body");
        this.wrapper.append(this.body);
    }
    startRender() {
        this.renderHeader();
        this.renderBody();
        this.getResponseOfJson(this.apiURL)
            .then((data) => {
            this.setLinkButtonsAndRenderTableBody(data);
        })
            .catch(console.log);
    }
    renderBodyRows(tableData) {
        this.body.innerHTML = "";
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
            this.body.insertAdjacentHTML("beforeend", tableRowHTML);
        });
    }
    async getResponseOfJson(apiUrl) {
        const response = await fetch(apiUrl);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(`Ошибка с кодом ${response.status}: ${response.statusText}`);
        }
    }
    setLinkButtonsAndRenderTableBody(apiData) {
        this.apiData = JSON.parse(JSON.stringify(apiData));
        this.renderBodyRows(apiData["results"]);
    }
}
exports.Table = Table;
Object.defineProperty(this, "age", {});
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = void 0;
const apiUrl = "https://swapi.dev/api/people/";
exports.apiUrl = apiUrl;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./constants/api");
const Table_1 = require("./components/Table");
const tableElem = document.querySelector(".table");
let tableClass = new Table_1.Table(tableElem, [
    { name: "Имя", sortKey: "name" },
    { name: "Рост", sortKey: "height" },
    { name: "Вес", sortKey: "mass" },
    { name: "Пол", sortKey: "gender" },
], api_1.apiUrl);
tableClass.startRender();
},{"./components/Table":1,"./constants/api":2}]},{},[3])
