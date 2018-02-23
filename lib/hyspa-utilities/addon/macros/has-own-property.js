import { computed, get } from '@ember/object';

export default function hasOwnProperty(object, property) {
  return computed(object, property, {
    get() {
      return property in get(this, object)
    }
  });
}
