/**
 * Facebook prep: Change in a Foreign Currency
 * Given a list of the available denominations, determine if it's possible to
 * receive exact change for an amount of money targetMoney. Both the
 * denominations and target amount will be given in generic units of that
 * currency.
 * 
 * Constraints:
 * 1. 1 <= |denominations| <= 100
 * 2. 1 <= denominations[i] <= 10000
 * 3. 1 <= targetMoney <= 1000000
 */

 /**
  * 
  * @param {number} targetMoney - The target money to check if there's an exact change for
  * @param {number[]} denominations - All possible denomination changes sorted in ascending order
  */
function canGetExactChange(targetMoney, denominations) {
  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    if (targetMoney < denomination) {
      return false;
    }
    
    const remaining = targetMoney % denomination;
    if (remaining === 0 || canGetExactChange(remaining, denominations)) {
      return true;
    }
  }
  return false;
}