

const cal = document.getElementById("cel");
const far = document.getElementById("far");
const kel = document.getElementById("kel");

cal.addEventListener("input", calculateTemp);
far.addEventListener("input", calculateTemp);
kel.addEventListener("input", calculateTemp);

function calculateTemp(event){
     const currentValue = parseFloat(+event.target.value);
     console.log("Input Value:", currentValue);

    switch(event.target.name){
        case "cal":
            kel.value = (currentValue + 273.15).toFixed(2);  
            far.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "far":
            cal.value = ((currentValue - 32) / 1.8).toFixed(2);
            kel.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);  // Fixed
            break;
        case "kel":
            cal.value = (currentValue - 273.15).toFixed(2);  
            far.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);  // Fixed
            break;
        default:
            break;       
    }
}
