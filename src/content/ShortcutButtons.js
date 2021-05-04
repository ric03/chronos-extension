import React from "react"
import {ExistingMenuButtonIdMap as Target} from "./ExistingMenuButtonIdMap"
import './ShortcutButtons.css'

export class ShortcutButtons extends React.PureComponent {

    #shortcutButtonList = [
        {text: 'Buchungen anzeigen', idSlug: 'buchungen', target: Target.BUCHUNGEN},
        {text: 'Kommen/Gehen buchen', idSlug: 'buchen', target: Target.BUCHEN},
        {text: 'Urlaub buchen', idSlug: 'urlaub', target: Target.FEHLZEIT},
        {text: 'Krank buchen', idSlug: 'krank', target: Target.FEHLZEIT},
    ].map(({text, idSlug, target}, idx) => (
        <button
            key={idx}
            className='shortcut-btn'
            onClick={() => document.getElementById(target).click()}
        >
            {text}
        </button>
    ))

    render() {
        return (
            <div id='shortcut-btn-container' className='shortcut-btn-container'>
                {this.#shortcutButtonList}
            </div>
        )
    }
}
