import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './button.css'

const Button = ({label, buttonType, btnOnClick, type}) => {
    return (
        <button
            className={classnames('button', {
                [`button-${buttonType}`]: buttonType,
            })}
            onClick={btnOnClick}
            type = {type}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button']),
    label: PropTypes.string.isRequired,
    buttonType: PropTypes.oneOf(['primary', 'secondary']),
    btnOnClick: PropTypes.func,
}
Button.defaultProps = {
    label: 'button',
    buttonType: 'primary'
}

export default Button
