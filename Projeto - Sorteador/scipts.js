
function drawButton(){


    const min = Math.ceil(document.querySelector(".input-1").value)
    const max = Math.floor(document.querySelector(".input-2").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (max > min){
        const result = Math.floor(Math.random() * max - min + 1) + min

        alert(result)
    } else {
        alert("O valor mínimo tem que ser MENOR que o valor MÁXIMO")
    }

}