import {last} from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import {ShortcutButtons} from './ShortcutButtons'

const frameName = document.defaultView.name

console.debug(`init content-script inside the ${frameName}`)

if (frameName === 'menuframe') {
    renderMenuEnhancement()
} else if (frameName === 'mainframe') {
    renderConditionalContent()
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

function renderConditionalContent() {
    const page = getPageName(window.location.href);

    switch (page) {
        // Personaldaten
        case 'AusweisHistorie.jsp':  // Ausweisverwaltung
        case 'Urlaubskonten.jsp': // Urlaubskonten
        case 'JahresblattView.jsp': // Jahresblatt
        case 'PersoBuchungen.jsp': // Buchungen
            console.debug('not yet implemented')
            break

        // Workflow
        case 'Buchen.jsp': // Buchen
        case 'BuchenFehlzeit.jsp': // Fehlzeit
            console.debug('not yet implemented')
            break

        // Dienste
        case 'InfoRead.jsp': // Informationen lesen
            console.debug('not yet implemented')
            break

        // Passwort ändern
        case 'Passwort.jsp': // Passwort ändern
            console.debug('not yet implemented')
            break

        default:
            console.error(`Unknown page '${page}'`)
    }

}

function getPageName(href) {
    const urlParts = href.split('/')
    return removeQueryString(last(urlParts))
}

function removeQueryString(str) {
    return str.replace(/\?.*$/)
}
