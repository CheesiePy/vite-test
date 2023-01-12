import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter, setupLinkToggle } from './counter.js'
import { setupDarkModeToggle } from './modules/dark-mode.js'
import typescriptLogo from './Typescript_logo.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img id="vanil" src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="hd">Hello world!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="dark-mode" type="button">Dark-mode</button>
    </div
    <p class="read-the-docs">
    <
      Click on the Vite logo to learn more
    </p>
  </div>
`
setupLinkToggle(document.querySelector("#vanil"), `${typescriptLogo}`);
setupCounter(document.querySelector('#counter'))
setupDarkModeToggle(document.querySelector('#dark-mode'))


