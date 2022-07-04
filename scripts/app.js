const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];

select.addEventListener('change', changeURLlanguage);
function changeURLlanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changelanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    // document.querySelector('#lng-textprogrammer').innerHTML = langArr['textprogrammer'][hash];
    for(let key in langArr){
        document.querySelector('#lng-' + key).innerHTML = langArr[key][hash];
    }
}

changelanguage();
//class="animate__animated animate__rollIn"