type THeadersTitle = {
    name: string;
    sortKey: string;
};

type TRowData = {
    [key: string]: string | number;
};

type TApiData = {
    next: string | null;
    previous: string | null;
    results: TRowData[];
};

interface ITable {
    startRender(): void;
}

class Table implements ITable {
    private body: HTMLElement;
    private header: HTMLElement;
    private wrapper: HTMLTableElement;
    private nextButton: HTMLElement;
    private prevButton: HTMLElement;
    private headersTitle: THeadersTitle[];
    private preloader: HTMLElement;
    private apiData: TApiData;
    private apiURL: string;

    constructor(tableElem: HTMLTableElement, headersTitle: THeadersTitle[], apiURL: string) {
        this.wrapper = tableElem;
        this.header = tableElem.tHead;
        this.headersTitle = headersTitle;
        this.apiURL = apiURL;
    }

    private renderHeader(): void {
        this.header = document.createElement("thead");
        this.header.classList.add("table__head");
        this.wrapper.append(this.header);

        let HTML: string = "<tr>";
        this.headersTitle.forEach(item => {
            HTML += `
                <th class="table__th">${item["name"]}</th>
            `;
        });

        HTML += "</tr>";
        this.header.insertAdjacentHTML('beforeend', HTML);

      
    }

    private renderBody(): void {
        this.body = document.createElement("tbody");
        this.body.classList.add("table__body");
        this.wrapper.append(this.body);
    }

   
    public startRender(): void {
        this.renderHeader();
        this.renderBody();
        this.getResponseOfJson(this.apiURL)
            .then((data) => {
                this.setLinkButtonsAndRenderTableBody(data)
            })
            .catch(console.log)
           
    }

    
    
    
       private renderBodyRows(tableData: TRowData[]): void {
        this.body.innerHTML = "";
        let tableRowHTML: string;
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

    private async getResponseOfJson(apiUrl: string): Promise<TApiData> {
        const response: Response = await fetch(apiUrl);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Ошибка с кодом ${response.status}: ${response.statusText}`)
        }
    }

    private setLinkButtonsAndRenderTableBody(apiData: TApiData): void {
        this.apiData = JSON.parse(JSON.stringify(apiData));
        this.renderBodyRows(apiData["results"]);
    }
  
}

export {Table};

Object.defineProperty(this, "age", {

})