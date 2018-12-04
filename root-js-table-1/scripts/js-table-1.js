var $ = function(id) {
    //helper function
    "use strict";
    return window.document.getElementById(id);
};
window.document.write('<table id="numTable">');
for (var i = 0; i <= 10; i++) {
    window.document.write('<tr>');
    window.document.write('<td>' + i + '</td>');
    for (var j = 0; j <= 10; j++) {
        if (i == 0 && j == 0) {
            //The Pink X
            $("numTable").rows[i].cells[j].innerHTML = 'x';
            $("numTable").rows[i].cells[j].style.color = '#FFC0CB';
        } else if (i > 0 && j == 0) {
            //First Column Color
            $("numTable").rows[i].cells[j].style.color = '#ff0000';
        } else if (i == 0 && j > 0) {
            //First Row & Color
            window.document.write('<td>' + j + '</td>');
            $("numTable").rows[i].cells[j].style.color = '#0000ff';
        } else if (i > 0 && j > 0) {
            //The rest of the table
            window.document.write('<td>' + i * j + '</td>');
        }
        if (i === j && i != 0 && j != 0) {
            // Squared Values Color
            $("numTable").rows[i].cells[j].style.color = '#00ff00';
        }
    }
}
window.document.write('</tr>');
window.document.write('</table>');
