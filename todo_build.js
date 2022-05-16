function add() {
    title = document.getElementById('title').value;
    disc = document.getElementById('disc').value;
    console.log("Updating...");

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([title, disc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title, disc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}

function update() {

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    let tbody = document.getElementById("tbody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="del(${index})">DELETE</button>
            </td>
        </tr> `;
    });
    tbody.innerHTML = str;
}


function del(items) {
    console.log("Delete", items);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    itemJsonArray.splice(items, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    update();
}

function clrall() {
    console.log("Clearing the storage");
    localStorage.clear();
    document.getElementById("title").value = "";
    document.getElementById("disc").value = "";
    update();
}
