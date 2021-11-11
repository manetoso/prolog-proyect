import React from 'react'
import PropTypes from 'prop-types'
import './header.css'

const Header = ({title}) => {
    return (
        <header>
            <div className='header-bk'>
                <h1>{title}</h1>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: ''
}

export default Header
