function createOrderedList(array) {
    let listHTML = `<ol>`;
    for (let i = 1; i < array.length; i += 1) {
        if (array[0] === "correct") {
            listHTML += `
            <li>
                <strong>Q:</strong> ${array[i].Q}<br>
                <strong>A:</strong> ${array[i].A}
            </li>`
        } else {
            listHTML += `
            <li>
                <strong>Q:</strong> ${array[i].Q}<br>
                <strong>A:</strong> ${array[i].A}  <em style="opacity: 0.5">(Your answer: ${array[i].R})</em>
            </li>`
        }
    }
    listHTML += `</ol>`;
    return listHTML;
}