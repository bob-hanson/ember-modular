import { helper } from '@ember/component/helper';

export function formatDate([value, format]) {
  return moment(value).format(format || 'M/DD/YYYY');
}

export default helper(formatDate);
