var mFormElement = 
console.log(mFormElement);

if (mFormElement != null){

    document.getElementById("makesForm").addEventListener("input", function(){

        if (document.getElementById("makesInput").value != ""){

            document.getElementById("bruh").innerHTML = document.getElementById("makesInput").value;
            console.log("input");
        }
    });
}