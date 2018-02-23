import TextField from '@ember/component/text-field';
import { observer, get, set } from '@ember/object';
import { isPresent } from '@ember/utils';

export default TextField.extend({
  type: 'file',
  classNames: ['file-upload-field'],
  attributeBindings: ['multiple'],
  multiple: true,
  resetInputTrigger: false,
  selectedFiles: null,

  change: function (e) {
    var input = e.target;
    if (isPresent(input.files)) {
      set(this, 'selectedFiles', input.files);
      this.attrs.triggerInputChange(input.files);
    }
  },

  resetFileInputField: observer('selectedFiles.length', function () {
    if (get(this, 'selectedFiles.length') === 0) {
      this.$().val('');
    }
    set(this, 'resetInputTrigger', false);
  })
});
