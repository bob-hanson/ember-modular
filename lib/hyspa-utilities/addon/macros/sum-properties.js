import { computed, get } from '@ember/object';

export default function sumProperties(...dependentKeys) {
  const computedFunc = computed({
    get() {
      return dependentKeys
        .map((dependentKey) => get(this, dependentKey))
        .reduce(function(total, num) {
          return total + (num || 0) || 0;
        });
    }
  });

  return computedFunc.property.apply(computedFunc, dependentKeys);
}
