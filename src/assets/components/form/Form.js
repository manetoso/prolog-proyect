import React from 'react'
import PropTypes from 'prop-types'
import './form.css'

const Form = props => {
    return (
        <div className='form'>
            <label for='input-gender'>Seleccione su sexo</label>
            <select id='input-gender' name='gender'>
                <option>-</option>
                <option value='woman'>Mujer</option>
                <option value='man'>Hombre</option>
            </select>
            <label for='input-imc'>Indique su Índice de Masa Corporal</label>
            <input type='number' id='input-imc'/>
            <label for='input-body-fat'>Indique su Índice de Grasa Corporal en porcentaje</label>
            <input type='number' id='input-body-fat'/>
            <label for='input-muscular-mass'>Indique su Índice de Masa Muscular en porcentaje</label>
            <input type='number' id='input-muscular-mass'/>
            <label for='input-viseral-fat'>Indique su Índice de Grasa Viseral</label>
            <input type='number' id='input-viseral-fat'/>
            <label for='input-waist'>Indique la medida de su cintura en centímetros</label>
            <input type='number' id='input-waist'/>
        </div>
    )
}

Form.propTypes = {

}

export default Form
