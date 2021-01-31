const CAPTION_CLASS = 'navigation-container__captions-container__caption',
      CAPTION_ACTIVE_CLASS = `${CAPTION_CLASS}-active`,
      CIRCLE_CLASS = 'navigation-container__circles-container__circle-block__circle',
      CIRCLE_ACTIVE_CLASS = `${CIRCLE_CLASS}-active`;

const SECTION_IDS = ['main', 'about', 'projects', 'contact']

const buttonCaptions = document.querySelectorAll(`div.${CAPTION_CLASS}, div.${CAPTION_ACTIVE_CLASS}`),
      buttonCircles = document.querySelectorAll(`div.${CIRCLE_CLASS}, div.${CIRCLE_ACTIVE_CLASS}`),
      activeCaption = document.querySelector(`div.${CAPTION_ACTIVE_CLASS}`),
      activeCircle = document.querySelector(`div.${CIRCLE_ACTIVE_CLASS}`);

function init () {
  const setIndexes = (element, index) => {
    element.dataset.index = index
  }

  buttonCaptions.forEach(setIndexes)
  buttonCircles.forEach(setIndexes)
}

function select({target}) {
  const changeState = (targetCLicked, nodeList, unactiveClass, activeClass) => {
    buttons.forEach((button, index) => {
      if(button.id === index) {
        if(button.active) {
          nodeList.item(index).classList.remove(activeClass)
          nodeList.item(index).classList.add(unactiveClass)
        }

        if(button.id.toString() == targetCLicked.dataset.index) {
          nodeList.item(index).classList.remove(unactiveClass)
          nodeList.item(index).classList.add(activeClass)

          window.scrollTo({
            top: document.querySelector(`section#${SECTION_IDS[button.id]}`).getBoundingClientRect().top,
            behavior: 'smooth'
          })
        }
      }
    })
  }

  let buttons = []
  buttonCaptions.forEach((t, index) => {
    buttons[index] = {}
    buttons[index].id = index
    buttons[index].active = t.classList.contains(CAPTION_ACTIVE_CLASS) 
  })

  changeState(target, buttonCaptions, CAPTION_CLASS, CAPTION_ACTIVE_CLASS)
  changeState(target, buttonCircles, CIRCLE_CLASS, CIRCLE_ACTIVE_CLASS)
}

document.addEventListener('DOMContentLoaded', init)
buttonCaptions.forEach(addEventListener('click', select))
buttonCaptions.forEach(addEventListener('click', select))