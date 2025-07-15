const cal = document.getElementById("cel");
const far = document.getElementById("far");
const kel = document.getElementById("kel");

function cal(event){
    const currentValue = +event.target.value;

    switch(event.target.value){
        case "cal":
            kel.value = (currentValue + 273.32).toFixed(2);
            far.value = (currentValue * 1.8 +32).toFixed(2);
            break;
        case "far":
            cal.value    
    }
        
}