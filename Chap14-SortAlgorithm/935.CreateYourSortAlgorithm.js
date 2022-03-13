/**
 * Problem: Don't use any sort you have known. Create your own sort algorithm
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a) {
  /**
   * - Bá dơ sort
   * -------0 1 2 3 4
   * - a = [1,2,3,4,5]
   * + step 1: get minimum value of array - done
   * + step 2: write a function to find the closest greater than the number n - done
   * + step 3: move those element to the start index 0,1,2,..
   *
   * -------0 1 2 3 4
   * - a = [1,2,5,4,3]
   * + i = 4
   *   + a[i] = 3
   *   + greaterNear = 4 = a[3]
   *   + swap
   *   + a = [1,2,5,3,4]
   *
   *
   *
   */
  /**
   *
   * @param {Array} a
   */
  function getArrayMinimumNumber(a) {
    let minimumNumber = Number.POSITIVE_INFINITY;

    for (let i = a.length - 1; i >= 0; --i) {
      if (a[i] < minimumNumber) {
        minimumNumber = a[i];
      }
    }

    return minimumNumber;
  }
  /**
   *
   * @param {Array} a
   * @param {Number} n
   */
  function getClosestGreaterNumberNInArray(a, n) {
    /**
     * -------0 1 2 3 4
     * - a = [1,2,3,4,5]
     * - n = 2
     * - ret = 3
     *
     * + i = 0
     *   + a[i] = a[0] = 1 > 2 ? -> false
     * + i = 1
     *   + a[i] = a[1] = 2 > 2 ? -> false
     * + i = 2
     *   + a[i] = a[2] = 3 > 2 ? -> true
     *   + saveNumber = 3
     * + i = 3
     *   + a[i] = a[3] = 4 > 2 ? -> true
     *     + a[i] <= saveNumber ? saveNumber = a[i] : i++
     *
     *
     * - a = [1,3,5,2,4]
     * - n = 2
     * - ret = 3
     *
     * + step 1: get |n-a[i]| array
     * + step 2: get min && min > 0 step 1
     * + step 3: get a[min index]
     *
     *
     */
    let arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement = [];

    for (let i = a.length - 1; i >= 0; --i) {
      arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement = reversePush(
        arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement,
        Math.abs(n - a[i])
      );
    }

    let minimumButNotZero = Number.POSITIVE_INFINITY;
    for (
      let i = arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement.length - 1;
      i >= 0;
      --i
    ) {
      if (
        arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement[i] !== 0 &&
        arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement[i] <
          minimumButNotZero
      ) {
        minimumButNotZero =
          arrayOfTheAbsoluteSubtractionOfNAndAllArrayElement[i];
      }
    }

    let ret = null;

    for (let i = a.length - 1; i >= 0; --i) {
      if (
        Math.abs(n - a[i]) !== 0 &&
        Math.abs(n - a[i]) === minimumButNotZero &&
        a[i] > n
      ) {
        ret = a[i];
      }
    }

    return ret;
  }

  let minimumNumberIncreasinger = getArrayMinimumNumber(a);

  let startIndexIncreasinger = 0;

  let ret = new Array(a.length);

  for (let i = a.length - 1; i >= 0; --i) {
    ret[startIndexIncreasinger] = minimumNumberIncreasinger;
    minimumNumberIncreasinger = getClosestGreaterNumberNInArray(
      a,
      minimumNumberIncreasinger
    );
    startIndexIncreasinger++;
  }

  return ret;
}

/**
 *
 * @param {Array} a
 * @param {any} e
 *
 */
function reversePush(a, e) {
  /**
   * -------0 1 2
   * - a = [1,2,3]
   * - e = 4
   * ---------0 1 2 3
   * - ret = [4,1,2,3]
   */
  const ret = new Array(a.length + 1);

  ret[0] = e;

  for (let i = ret.length - 1; i >= 1; --i) {
    ret[i] = a[i - 1];
  }

  return ret;
}

{
  const a1 = [1, 2, 3, 4, 5]; // [2,3,4,5,6]
  const a2 = [2, 4, 6, 8]; // [3,5,7,9]
  const a3 = [1, 3, 5, 7]; // [2,4,6,8]
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a1)
  );
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a2)
  );
  console.log(
    bringIncreasinglyElementToTheIncreasinglyIndexAscendingOrderSort(a3)
  );
}