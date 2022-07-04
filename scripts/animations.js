var elem1 = document.getElementById("img1s");
let elem2 = document.getElementById("img2s");
var logos = ["zoomIn","flash","swing","jackInTheBox","rollIn","slideInUp","zoomInRight"];
var offices = ["zoomIn","flash","swing","jackInTheBox","rollIn","slideInUp","zoomInRight"];
let table = document.querySelector('#table');
let table2 = document.querySelector('#table2');
let i = 0;
let i2 = 0;

logos.forEach((element) => {
    let td = document.createElement('td');
    td.innerHTML = logos[i];
    td.id = logos[i];
    td.setAttribute("onclick","changeanim(this.id)");
    element++
    i++
    table.appendChild(td);
})
        
function changeanim(value){
    elem1.className = 'animate__animated animate__' + value;
    var element1style = value;
    document.cookie = "animname=" + element1style;
}

// document.cookie = element1style;

offices.forEach((element) => {
    let td = document.createElement('td');
    td.innerHTML = offices[i2];
    td.id = offices[i2];
    td.setAttribute("onclick","changeanim2(this.id)");
    element++
    i2++
    table2.appendChild(td);
})
        
function changeanim2(value){
    elem2.className = 'animate__animated animate__' + value;
    var element2style = value;
    document.cookie = "anim2name=" + element2style;
}
