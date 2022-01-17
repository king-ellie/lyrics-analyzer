import React from 'react'
function Form() {
    function onSubmit(event) {
        event.preventDefault()
        console.log('hello world')
    }
    return (React.createElement('div', null,
        React.createElement('form', { onSubmit: function (event) { return onSubmit(event) } },
            React.createElement('label', { htmlFor: 'text' }, 'Enter text here:'),
            React.createElement('input', { name: 'text', type: 'text' }),
            React.createElement('button', { type: 'submit' }, 'Submit'))))
}
export default Form
