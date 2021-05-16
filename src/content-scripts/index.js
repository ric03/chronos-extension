import {last} from 'lodash'
import React from 'react'
import {renderShortcutButtons} from './menu/ShortcutButtons'

const frameName = document.defaultView.name

console.debug(`init content-script inside the ${frameName}`)

if (frameName === 'menuframe') {
    renderShortcutButtons()
} else if (frameName === 'mainframe') {
    renderConditionalContent()
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
