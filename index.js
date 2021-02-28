let animation_list = document.querySelectorAll('.animate');
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');

let GET = {};
for(const item of window.location.search.split(/&|\?/).filter(substr => substr)){
    let [key, val] = item.split('=').map(decodeURIComponent);
    GET[key] = val;
}

for(const element of animation_list){
    element.innerHTML = (GET.prefix ? GET.prefix : '') + ' ' + element.innerHTML + ' ' + (GET.postfix ? GET.postfix : '')
    if(GET.case === 'upper')
        element.innerHTML = element.innerHTML.toUpperCase();
    else if(GET.case === 'lower')
        element.innerHTML = element.innerHTML.toLowerCase();
}

function random_choice(){
    for(const element of animation_list){
        element.style.animation = 'none';
        element.offsetHeight; //trigger update
        element.style.animation = '';
    }
    yes.style.display = '';
    no.style.display = '';
    if(Math.random() < 0.5)
        yes.style.display = 'none';
    else
        no.style.display = 'none';
}
document.addEventListener('click', random_choice);
random_choice();
