let yes = document.querySelector('.yes');
let no = document.querySelector('.no');
let animation_list = document.querySelectorAll('.animate');
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
