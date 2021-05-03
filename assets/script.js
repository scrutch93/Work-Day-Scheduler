var displayTime = moment().toString();

document.getElementById("time").innerHTML = displayTime;

//Starter code from askBCS to help get started.
$(".row").each(function(index, element){
    console.log("index is:", index)
    console.log("element is:", element) 
    if(index < 5){
      element.style.backgroundColor = "green"
    } else {
      element.style.backgroundColor = "orange"
    }
  })



