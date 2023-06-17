var val = document.getElementById("card").values;

    if(val.value.lenght() != 16)
    {
        val.style.color = 'red';
    }
    else{
        val.style.color = 'black';
    }