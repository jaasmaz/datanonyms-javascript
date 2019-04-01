
function previewFile(){
    var preview = document.querySelector("#img-upload"); //selects the query named img
    var nonBtn  = document.querySelector(".anon-btn"); 
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        nonBtn.classList.toggle("anon-btn")
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

function fetchImg(){
    document.querySelector("#loading").classList.toggle("hide-loading")
    setTimeout(function(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            if(xhr.status == 200){
                document.querySelector("#img-upload").src = xhr.response
                console.log(xhr.responseText);
            }
            if(xhr.status ==404){
                console.log("File or resource not found!")
            }
        }
    };
    xhr.open('get', 'db.txt', true);
    xhr.send();
} ,3000)
setTimeout(function() {document.querySelector("#loading").classList.toggle("hide-loading")},3000)
}

function clearAll(){
    
}