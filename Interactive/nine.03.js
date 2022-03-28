// const sueldoBs = 430;
const tasa$ = 4.30;
// const cantidadMes = 8;

// let dividirSueldo_Tasa = sueldoBs / tasa$; // sale el sueldo reflejado en $
// let multiplicarSueldo_Mes = dividirSueldo_Tasa * cantidadMes; // muestra la cantidad de dinero que se tendrá.

    // console.log({
    //     sueldoBs,
    //     tasa$,
    //     cantidadMes,
    //     dividirSueldo_Tasa,
    //     multiplicarSueldo_Mes
    // });

//PASOS: TENER EL SUELDO Y DIVIDIRLO ENTRE LA TASA(ESTE SERÁ EL UNICO VALOR FIJO), DESPUÉS ESTE VALOR OBTENIDO SE MULTIPLICA POR LA CANTIDAD DE MESES DESEADOS.

    function calcularSueldoAlMes(sueldoBs, cantidadMes) {
        let dividirSueldo_Tasa = sueldoBs / tasa$; // sale el sueldo reflejado en $
        let multiplicarSueldo_Mes = parseInt(dividirSueldo_Tasa * cantidadMes); // muestra la cantidad de dinero que se tendrá.

        return multiplicarSueldo_Mes;
    }

    function onClickButtonSalaryMonth(){
        const inputBs = document.getElementById("inputBs");
        const bsValue = inputBs.value;

        const inputSalary = document.getElementById("inputSalary");
        const  salaryValue = inputSalary.value;
        
        const multiplicarSueldo_Mes = calcularSueldoAlMes(bsValue, salaryValue);

        const mostrarSueldoMensual = document.getElementById("mostrarSueldoMensual");

        mostrarSueldoMensual.innerText = "Tu sueldo dentro de " + salaryValue + " meses será de " +  multiplicarSueldo_Mes + " dólares.";

        // // //
        
      

    }


