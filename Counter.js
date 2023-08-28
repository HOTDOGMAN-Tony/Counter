let number = 0


function decreasea_button() {
    number -= 1;

    document.querySelector ('.display_text') 
      .innerHTML = (`${number}`);


    if (number < 0){
        document.querySelector(".display_text").style.color = "red"
    }else if (number > 0){
        document.querySelector(".display_text").style.color = "green"
    } else{
        document.querySelector(".display_text").style.color = "orange"
    }

}

function reset_button() {
    number = 0

    document.querySelector ('.display_text') 
      .innerHTML = (`${number}`);

    if (number < 0){
        document.querySelector(".display_text").style.color = "red"
    }else if (number > 0){
        document.querySelector(".display_text").style.color = "green"
    } else{
        document.querySelector(".display_text").style.color = "orange"
    }
}

function increase_button() {
    number += 1

    document.querySelector ('.display_text') 
      .innerHTML = (`${number}`);

    if (number < 0){
        document.querySelector(".display_text").style.color = "red"
    }else if (number > 0){
        document.querySelector(".display_text").style.color = "green"
    } else{
        document.querySelector(".display_text").style.color = "orange"
    }
}

