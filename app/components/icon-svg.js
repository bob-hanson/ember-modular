import BaseComponent from 'hyspa-base-components/components/base-component';
import { get, set, computed } from '@ember/object';
import layout from '../templates/components/icon-svg';

export default BaseComponent.extend({
  layout,
  classNames: ['icon-svg'],
  svgType: null,
  svg: null,

  initComponent() {
    this.setSvg();
  },

  setSvg() {
    set(this, 'svg', get(this, `svgDictionary.${get(this, 'svgType')}`));
  },

  svgDictionary: computed(function() {
      return {
        "warning_outline": `<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="alert_icon">
                                        <path d="M21.64,23.36 L21.64,16.64 L18.36,16.64 L18.36,23.36 L21.64,23.36 Z M21.64,30 L21.64,26.64 L18.36,26.64 L18.36,30 L21.64,30 Z" id="warning---material"></path>
                                        <polygon id="Triangle-3" points="20 4 39 36 1 36"></polygon>
                                    </g>
                                </g>
                            </svg>`,
        "info_outline": `<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="update_not_icon">
                                    <g id="Group" transform="translate(1.000000, 1.000000)">
                                        <circle id="Oval-6-Copy-6" cx="19" cy="19" r="19"></circle>
                                        <polygon id="Shape" points="22.7083333 19.7083333 22.7083333 12.7416667 23.5791667 12.7416667 23.5791667 11 14.8708333 11 14.8708333 12.7416667 15.7416667 12.7416667 15.7416667 19.7083333 14 21.45 14 23.1916667 18.5283333 23.1916667 18.5283333 28.4166667 19.9216667 28.4166667 19.9216667 23.1916667 24.45 23.1916667 24.45 21.45"></polygon>
                                    </g>
                                </g>
                            </g>
                        </svg>`,
        "non_urgent_outline": `<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="info_non_urgent">
                                            <circle id="Oval-6-Copy-10" cx="20" cy="20" r="19"></circle>
                                            <path d="M18.6594661,14.36 L18.6594661,11 L21.9394661,11 L21.9394661,14.36 L18.6594661,14.36 Z M18.6594661,27.72 L18.6594661,17.72 L21.9394661,17.72 L21.9394661,27.72 L18.6594661,27.72 Z" id="info_outline---material"></path>
                                        </g>
                                    </g>
                                </svg>`,
        "error_outline": `<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="error_icon">
                                    <circle id="Oval-6-Copy-7" cx="20" cy="20" r="19"></circle>
                                    <path d="M18.6594661,12 L21.9394661,12 L21.9394661,22 L18.6594661,22 L18.6594661,12 Z M18.6594661,25.36 L21.9394661,25.36 L21.9394661,28.72 L18.6594661,28.72 L18.6594661,25.36 Z" id="error_outline---material"></path>
                                </g>
                            </g>
                        </svg>`,
        "success_outline": `<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="status_icon">
                                        <circle id="Oval-6-Copy-9" cx="20" cy="20" r="19"></circle>
                                        <path d="M 15.908902,25.022403 10.468,19.841884 8.6543664,21.568724 15.908902,28.476082 31.454333,13.6746 29.640701,11.94776 Z" style="stroke-width:1.66129708" />
                                    </g>
                                </g>
                            </svg>`
      }
  })

});
