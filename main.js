import './style.css'
import javascriptLogo from './javascript.svg'
import { setupNavBar } from './components/NavBar.js'
import { form, passwordInput, emailInput, submitBtn } from './modules/login_form.js'
import { login, logout, loggedIn } from './modules/login.js'




if (!loggedIn ){
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
      
    </div
    <p class="read-the-docs">
    <
      Click on the Vite logo to learn more
    </p>
  </div>
`
}else{
  document.querySelector('#app').innerHTML = `
  <div>
  ${form.outerHTML}
  </div>`
}






const navbar = document.querySelector('#navbar')
setupNavBar(navbar)
