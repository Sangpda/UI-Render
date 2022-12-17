import html from "../core.js";
import { connect } from "../store.js"

const connector = connect ()


function appName (state) {
    return html`<h1>Hello React</h1>
    <button onclick = "dispatch('ADD', 'exportGiThiImportNhanCaiDo')" > Add Car </button>
    <ul>
        ${state.cars.map(car => `<li>${car}</li>`)} 
    </ul>
    `
} 

export default connector(appName)