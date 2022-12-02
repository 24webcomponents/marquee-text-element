const DEFAULT_DURATION = '5s'

/**
 * ```html
 * <marquee-text duration="2s">
 *   This text will scroll across the page over 2s
 * </marquee-text>
 * ```
 */
class MarqueeTextElement extends HTMLElement {
  static observedAttributes = ['duration']

  #renderRoot = this.attachShadow({mode: 'open'})

  get duration() {
    const value = this.getAttribute('duration')
    return value ?? DEFAULT_DURATION
  }

  set duration(value: string) {
    this.setAttribute('duration', value)
  }

  attributeChangedCallback(name: 'duration', oldValue: null | string, newValue: null | string) {
    if (oldValue === newValue) return
    if (newValue === null) return
    if (newValue) this.style.setProperty('--animation-duration', newValue)
  }

  connectedCallback(): void {
    // eslint-disable-next-line github/no-inner-html
    this.#renderRoot.innerHTML = `
    <style>
      @keyframes marqueeeee {
        0% {
          translate: -100%;
        }
        100% {
          translate: 100vw;
        }
      }
      :host slot {
        animation: var(--animation-duration, ${DEFAULT_DURATION}) linear infinite marqueeeee;
        display: inline-block;
      }
      :host {
        overflow: hidden;
        max-width: 100vw;
        display: block;
      }
      @media (prefers-reduced-motion) {
        :host slot {
          animation: none;
        }
      }
    </style>
    <slot></slot>
    `
  }
}

declare global {
  interface Window {
    MarqueeTextElement: typeof MarqueeTextElement
  }
}

export default MarqueeTextElement

if (!window.customElements.get('marquee-text')) {
  window.MarqueeTextElement = MarqueeTextElement
  window.customElements.define('marquee-text', MarqueeTextElement)
}
