import ContentView from 'hyspa-common-components/components/content-view';
import { joinWith } from 'ember-macaroni';
import { get, set, observer } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';
import layout from '../templates/components/project-persistence';

export default ContentView.extend({
  layout,
  classNameBindings: ['colSpan'],
  percentageWidth: 50,
  hyspaFormService: service(),
  editText: 'Edit',
  isEditView: notEmpty('currentProject'),
  editFormHeader: joinWith(' ', 'editText', 'currentProject.projectName'),

  observeFormProperties: observer('currentProject.isFullyLoaded', function() {
    this.buildFormProperties();
  }),

  initComponent() {
    if (get(this, 'currentProject.isFullyLoaded')) {
      this.buildFormProperties();
    }
  },

  buildFormProperties() {
    if (isEmpty(get(this, 'formProperties'))) {
      this.setFormProperties();
    }
  },

  setFormProperties() {
    set(this, 'formProperties', Object.assign(
      get(this, 'hyspaFormService').assignFromModels(get(this, 'currentProject'))
    ));
  }

});
