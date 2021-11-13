import React from "react";
import PropTypes from "prop-types";
import "./form.css";
import { useForm } from "../../../hooks/useForm";
import Button from "../../button/Button";
import { calculed } from "../../utils/calculed";
import Swal from "sweetalert2";

const Form = (props) => {
  const [formValues, handleInputChange, reset]  = useForm({
    gender : '',
    corporalMass: '',
    corporalFat: '',
    muscularMass: '',
    visceralFat: '',
    waitstMeasurement: ''
  })
  const { gender, corporalMass, corporalFat,
          muscularMass, visceralFat, waitstMeasurement 
        } = formValues

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    calculed(gender, corporalMass, corporalFat, muscularMass, visceralFat, waitstMeasurement)
  }
  return (
    <>
      <div className="card border-primary m-3 full-width rounded">
        <div className="card-header text-center">Salud, dinero y amor</div>
        <div className="card-body text-primary">
          <form onSubmit = { onSubmit }>
            <fieldset>
              <legend>Calculo de datos</legend>
              <div className="form-group row">
                <label
                  htmlFor="gender"
                  className="col-sm-2 col-form-label text-center"
                >
                  Genero
                </label>
                <div className="col-sm-10">
                  <select className="form-select text-center"
                          name='gender' onChange= { handleInputChange }>
                    <option >-</option>
                    <option value="1" >Masculino</option>
                    <option value="0">Femenino</option>
                  </select>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4">
                    <input                      
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                      name = 'corporalMass'
                      value = { corporalMass }
                      onChange = { handleInputChange }
                    />
                    <label htmlFor="floatingIMC" className="floatingInput">
                      Indice Masa Corporal
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                      name = 'corporalFat'
                      value = { corporalFat }
                      onChange = { handleInputChange }
                    />
                    <label htmlFor="floatingIMC" className="floatingInput">
                      Indice Grasa Corporal
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                      name = 'muscularMass'
                      value = { muscularMass }
                      onChange = { handleInputChange }
                    />
                    <label htmlFor="floatingIMC" className="floatingInput">
                      Indice Masa Muscular
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                      name = 'visceralFat'
                      value = { visceralFat }
                      onChange = { handleInputChange }
                    />
                    <label htmlFor="floatingIMC" className="floatingInput">
                      Indice Grasa Viseral
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                      name = 'waitstMeasurement'
                      value = { waitstMeasurement }
                      onChange = { handleInputChange }
                    />
                    <label htmlFor="floatingIMC" className="floatingInput">
                      Medida de cintura
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className='d-flex justify-content-evenly'>
            <Button            
              buttonType="primary"
              label="Terminar"
              type="submit"
            />
             <Button
            btnOnClick={() => {
              reset()
            }}
            buttonType="secondary"
            label="Limpiar"
            type="button"
          />
            </div>
          </form>                   
        </div>
      </div>
    </>
  );
};

Form.propTypes = {};

export default Form;
