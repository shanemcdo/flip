function random_choice(){
    let yes = document.querySelector('.yes');
    let no = document.querySelector('.no');
    yes.style.display = '';
    no.style.display = '';
    if(Math.random() < 0.5)
        yes.style.display = 'none';
    else
        no.style.display = 'none';
}
document.addEventListener('click', random_choice);
random_choice();
