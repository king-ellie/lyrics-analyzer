import React from 'react'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Form from './form/Form'

function App() {
    return (
        <div>
            <h1>React Component has rendered</h1>
            <Form />
        </div>
    )
}

export default App
