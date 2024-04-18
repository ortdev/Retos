
document.querySelector('b1').addEventListener('click', function() {
    var ingreso = document.getElementById('in').value;
    var egreso = document.getElementById('egreso').value;
    var concepto2 = document.getElementById('concepto2').value;

    // Perform necessary calculations or operations with the input values

    //Update the disabled input fields with the calculated values
    document.querySelector('table tr:nth-child(1) input').value = ingreso;
    document.querySelector('table tr:nth-child(3) input').value = egreso;
    document.querySelector('table tr:nth-child(4) input').value = concepto2;
});

