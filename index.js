let animation_list = document.querySelectorAll('.animate');
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');

let GET = {};
for(const item of window.location.search.split(/&|\?/).filter(substr => substr)){
    let [key, val] = item.split('=').map(decodeURIComponent);
    GET[key] = val;
    document.querySelector('#' + key).value = val;
}

for(const element of animation_list){
    if(GET.yesText && element.innerHTML == 'Yes')
        element.innerHTML = GET.yesText;
    else if(GET.noText && element.innerHTML == 'No')
        element.innerHTML = GET.noText;
    element.innerHTML = (GET.prefix ? GET.prefix : '') + ' ' + element.innerHTML + ' ' + (GET.postfix ? GET.postfix : '')
    if(GET.case === 'upper')
        element.innerHTML = element.innerHTML.toUpperCase();
    else if(GET.case === 'lower')
        element.innerHTML = element.innerHTML.toLowerCase();
    element.style.fontSize = GET.fontSize;
}
yes.style.color = '#' + GET.yesHexFG;
yes.style.background = '#' + GET.yesHexBG;
no.style.color = '#' + GET.noHexFG;
no.style.background = '#' + GET.noHexBG;

function random_choice(){
    for(const element of animation_list){
        element.style.animation = 'none';
        element.offsetHeight; //trigger update
        element.style.animation = '';
    }
    yes.style.display = '';
    no.style.display = '';
    if(GET.rigged == 'no' || Math.random() < 0.5 && !GET.rigged)
        yes.style.display = 'none';
    else
        no.style.display = 'none';
}
document.querySelector('#wrapper').addEventListener('click', random_choice);
random_choice();
