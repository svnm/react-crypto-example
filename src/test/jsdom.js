import {JSDOM} from 'jsdom'

export function setupJsdom () {
  const { document } = (new JSDOM('')).window
  global.document = document
  global.window = document.defaultView
  global.navigator = window.navigator
}
