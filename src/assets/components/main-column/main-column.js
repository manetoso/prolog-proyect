import React from 'react'
import PropTypes from 'prop-types'
import './column.css'
import Form from '../form/Form'
import Button from '../../button/Button'

const MainColumn = props => {
    return (
        <div className='column'>
            <div className='column-bk'>
                <Form />
                <div className='column-buttons'>
                    <Button
                        btnOnClick={() => {
                            console.log('Clean')
                        }}
                        buttonType='secondary'
                        label='Limpiar'
                    />
                    <Button
                        btnOnClick={() => {
                            console.log('Calculate')
                        }}
                        buttonType='primary'
                        label='Terminar'
                    />
                </div>
            </div>
        </div>
    )
}

MainColumn.propTypes = {

}

export default MainColumn
