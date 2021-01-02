import toOwnString from './toOwnString';

const isObject = (o: unknown) => {
  return toOwnString(o) === '[object Object]'
}


export default isObject
