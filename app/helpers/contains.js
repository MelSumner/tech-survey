import { helper } from '@ember/component/helper';

export function contains(params/*, hash*/) {
  if(!params[1]) {
    return false;
  }
  
  return params[1].includes(params[0]);
}

export default helper(contains);
