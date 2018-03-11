
'use strict'

//..............................................................................

P.load_layout = () => {

  const current_layout = P.layouts[P.S.current_layout]

  P.D.screen_title.innerHTML = current_layout.text
  P.D.screen.style.backgroundImage = 'url(' + current_layout.image + ')'
}

