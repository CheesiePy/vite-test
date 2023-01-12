export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter((counter + 1)*2))
  setCounter(0)
}

export function setupLinkToggle(img, source){
  img.addEventListener("click", () => {
    img.setAttribute("src", source);
  })

}

