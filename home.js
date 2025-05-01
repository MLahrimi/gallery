"use strict"
function VisibitityFaceGrinWide(){
    document.getElementById("face-grin-wide").style.visibility = "hidden";
}

function passwordVisibilitySwitch(){
    let passwordBox = document.getElementById("pswInput");

    if (passwordBox.type == "password") {
        passwordBox.type = "text";  
    } else {
        passwordBox.type = "password";
    }

}





