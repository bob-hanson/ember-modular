import { alias, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-avatar';

export default BaseComponent.extend({
  layout,
  classNames: ['user-avatar'],
  userAvatar: alias('avatarUser.avatar'),
  userInitials: alias('avatarUser.initials'),

  hasUserAvatar: notEmpty('userAvatar')
});
