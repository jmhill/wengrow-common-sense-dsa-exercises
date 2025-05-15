/**
 * searches through an array of items (haystack), one by one,
 * until it finds the requested matching element.
 *
 * @param needle - the item to search for
 * @param haystack - the list of items to search
 * @param [callback] - a function for determining whether the needle matches an item in the haystack. If this parameter is not provided, linearSearch will compare the needle and haystack item based on strict equality (===)
 * @returns the index of the found item, or null if item not found
 */
export function linearSearch<T>(
  needle: T,
  haystack: T[],
  callback?: (needle: T, item: T) => boolean
): number | null {
  const comparison = (needle, item) => callback ? callback(needle, item) : needle === item;

  for (let i = 0; i < haystack.length; i++) {
    if (comparison(needle, haystack[i])) return i;
  }

  return null;
}
