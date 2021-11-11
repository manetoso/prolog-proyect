import React from 'react'

import './app.css'
import Header from './assets/components/header/Header'
import MainColumn from './assets/components/main-column/main-column'

const App = props => {
  return (
    <div>
      <Header title='Easy Weights'/>
      <MainColumn/>
    </div>
  )
}

export default App
