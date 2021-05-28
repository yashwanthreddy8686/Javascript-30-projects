const panels = document.querySelectorAll('.panel');

function handleToggle(){
    this.classList.toggle('open');
}

function handleToggleOpenActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click',handleToggle));

panels.forEach(panel => panel.addEventListener('transitionend',handleToggleOpenActive));