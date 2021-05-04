import React from 'react'
import ReactDOM from 'react-dom'
import {ShortcutButtons} from './ShortcutButtons'

const frameName = document.defaultView.name

console.debug(`init content-script inside the ${frameName}`)

if (frameName === 'menuframe') {
    renderMenuEnhancement()
}

function renderMenuEnhancement() {

    console.debug(`render menu enhancements`)

    const container = document.createElement('div')
    container.id = 'shortcut-root'
    document.body.appendChild(container)

    ReactDOM.render(
        <React.StrictMode>
            <ShortcutButtons/>
        </React.StrictMode>,
        container
    )
}
