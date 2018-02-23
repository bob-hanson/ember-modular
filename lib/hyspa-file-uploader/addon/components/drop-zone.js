import { set } from '@ember/object';
import { isPresent } from '@ember/utils';
import BaseInput from 'hyspa-base-components/components/base-input';
import layout from '../templates/components/drop-zone';

export default BaseInput.extend({
  layout,
  classNames: ['drop-zone'],
  classNameBindings: ['colSpan', 'isDragOver:is-dragged-over'],

  isDragOver: false,

  setHover() {
    set(this, 'isDragOver', true);
  },

  clearHover() {
    set(this, 'isDragOver', false);
  },

  preventPropgation(event) {
    event.preventDefault();
    event.stopPropagation();
  },

  dragEnter(event) {
    this.preventPropgation(event);
    this.setHover();
  },

  dragOver(event) {
    this.preventPropgation(event);
    this.setHover();
  },

  dragLeave(event) {
    this.preventPropgation(event);
    this.clearHover();
  },

  dragEnd(event) {
    this.preventPropgation(event);
    this.clearHover();
  },

  drop(event) {
    this.preventPropgation(event);
    this.clearHover();
    this.processDrop(event);
  },

  processDrop(event) {
    var input = event.dataTransfer;
    if (isPresent(input.files)) {
      set(this, 'selectedFiles', input.files);
      this.attrs.fileDroppedAction(input.files);
    }
  }



});
