const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e){
    // check if they had the shift key down
    let inBetween = false;
   if(e.shiftKey && this.checked){
    checkBoxes.forEach(checkbox => {
        if(checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween;
        }
        if(inBetween){
            checkbox.checked = true;
        }
    })
   }
   lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click',handleCheck))