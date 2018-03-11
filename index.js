
'use strict'

//..............................................................................

P.start = () =>
{
  // isso é uma função de sequência de inicialização

  P.load_layout()

  P.update()
}

//..............................................................................

P.update = () =>
{
  // isso é uma função de loop do site

  window.requestAnimationFrame(P.update)
}

//..............................................................................

P.start()

