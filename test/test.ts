import {assert} from '@open-wc/testing'
import '../src/marquee-text-element'

describe('marquee-text-element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('marquee-text')
      assert.equal('MARQUEE-TEXT', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.MarqueeTextElement()
      assert.equal('MARQUEE-TEXT', el.nodeName)
    })
  })
})
