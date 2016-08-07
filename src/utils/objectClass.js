/**
 * get the toString value of object
 *
 * @param {any} object
 * @returns {string}
 */
const getObjectClass = (object) => {
  return Object.prototype.toString.call(object);
};

export default getObjectClass;
