import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './button.css'

const Button = ({label, buttonType, btnOnClick}) => {
    return (
        <button
            className={classnames('button', {
                [`button-${buttonType}`]: buttonType,
            })}
            onClick={btnOnClick}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    buttonType: PropTypes.oneOf(['primary', 'secondary']),
    btnOnClick: PropTypes.func,
}
Button.defaultProps = {
    label: 'button',
    buttonType: 'primary'
}

export default Button
