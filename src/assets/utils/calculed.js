import React from "react"
import Swal from "sweetalert2"

var counter = 0
var status = ''
export const calculed = ( gender, corporalMass, corporalFat, muscularMass, visceralFat, waitstMeasurement ) => {
    counter = 0
    calculedCorporalFat(gender, corporalFat)
    calculedWaistMeasurement(gender, waitstMeasurement )
    calculedMuscularMass(gender, muscularMass )
    calculedCorporalMass(corporalMass)
    calculedVisceralFat( visceralFat )
    if( counter < 5 )
    {
        status = 'Bajo'
        return Swal.fire({
            icon: 'succesa',
            title: 'Riesgo ' + status,
            text: 'Todo bien',            
          })
        
    }
    else if ( counter > 4 && counter < 8 )
    {
        status = 'Moderado'
        return Swal.fire({
            icon: 'warning',
            title: 'Riesgo ' + status,
            text: 'Por el momento esta todo bien, pero no bajes la guardia',
            
          })
    }
    else {
        status = 'Elevado'
        return Swal.fire({
            icon: 'error',
            title: 'Riesgo ' + status,
            text: 'Tienes sobrepeso, es necesario tomar medidas y precauciones',            
          })
    }
}

const calculedCorporalFat = (gender, corporalFat ) => {
    //1 es Hombre o Masculino
    //2 es Mujer o Femenino
    if( gender === '1' ) {
        if( corporalFat < 20 ) {
            counter++
        } else {
            counter+=2
        }        
    }
    else {
        if( corporalFat < 32.9 ) {
            counter++
        } else {
            counter+=2
        
        }
    }
}

const calculedMuscularMass = (gender, muscularMass ) => {
    //1 es Hombre o Masculino
    //2 es Mujer o Femenino
    if( gender === '1' ) {
        if( muscularMass < 39.4 ) {
            counter++
        } else {
            counter+=2
        }        
    }
    else {
        if( muscularMass < 30.4 ) {
            counter++
        } else {
            counter+=2
        
        }
    }
}

const calculedWaistMeasurement = (gender, waitstMeasurement ) => {
    //1 es Hombre o Masculino
    //2 es Mujer o Femenino
    if( gender === '1' ) {
        if( waitstMeasurement < 94 ) {
            counter++
        } else {
            counter+=2
        }        
    }
    else {
        if( waitstMeasurement < 80 ) {
            counter++
        } else {
            counter+=2
        
        }
    }
}

const calculedCorporalMass = (corporalMass ) => {
    if( corporalMass < 25 ) {
        counter++
    } else {
        counter+=2
    }
}

const calculedVisceralFat = ( visceralFat ) => {
    if( visceralFat < 10 ) {
        counter++
    } else {
        counter+=2
    }
}