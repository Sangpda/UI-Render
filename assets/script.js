import { attach } from "./store.js"
import component from "./component/app.js"

const root = document.getElementById("root")
attach (component, root)


