import React from "react";
import PropTypes from "prop-types";
import "./form.css";

const Form = (props) => {
  return (
    <>
      <div className="card border-primary m-3 full-width rounded">
        <div className="card-header text-center">Header</div>
        <div className="card-body text-primary">
          <form>
            <fieldset>
              <legend>lorem ipsum</legend>
              <div className="form-group row">
                <label
                  for="gender"
                  className="col-sm-2 col-form-label text-center"
                >
                  Gender
                </label>
                <div className="col-sm-10">
                  <select className="form-select text-center">
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4">
                    <input
                      for="imc"
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                    />
                    <label for="floatingIMC" className="floatingInput">
                      Indice Masa Corporal
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      for="imc"
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                    />
                    <label for="floatingIMC" className="floatingInput">
                      Indice Grada Corporal
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      for="imc"
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                    />
                    <label for="floatingIMC" className="floatingInput">
                      Indice Masa Muscular
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      for="imc"
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                    />
                    <label for="floatingIMC" className="floatingInput">
                      Indice Grasa Viseral
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="form-floating m-4 mt-0">
                    <input
                      for="imc"
                      type="text"
                      id="floatingIMC"
                      className="form-control text-center"
                      placeholder="imc"
                    />
                    <label for="floatingIMC" className="floatingInput">
                      Medida de cintura
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {};

export default Form;
