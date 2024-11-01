/**
 * LeetCode | #933 | Easy
 * 
 * You have a RecentCounter class which counts the number of recent requests within a certain time frame.
 * 
 * Implement the RecentCounter class:
 * - RecentCounter() Initializes the counter with zero recent requests.
 * - int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns
 * the number of requests that has happened in the past 3000 milliseconds (including the new request).
 * Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
 * 
 * It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
 * 
 * Constraints:
 * - 1 <= t <= 10^9
 * - Each test case will call ping with strictly increasing values of t.
 * - At most 10^4 calls will be made to ping.
 * 
 */


/**
 * Solution 1 (slowest -- resembling a queue with "shift" which is slow)
 * Time Complexity: O(n) - Space complexity: ?
 */

const RecentCounter = function () {
  this.recentReqsQueue = [];
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function (t) {
  this.recentReqsQueue.push(t);
  const minRangeVal = Math.max(t - 3000, 0);

  while (this.recentReqsQueue.length > 0 && this.recentReqsQueue[0] < minRangeVal) {
    this.recentReqsQueue.shift();
  }

  return this.recentReqsQueue.length;
};

/**
 * Solution 2 (fastest -- resembling a queue behaviour by using a pointer)
 * Time Complexity: O(n) - Space complexity: O(n)
 */

const RecentCounter2 = function () {
  this.i = 0;
  this.recentReqsQueue = [];
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter2.prototype.ping = function (t) {
  this.recentReqsQueue.push(t);
  const minRangeVal = Math.max(t - 3000, 0);

  while (this.recentReqsQueue.length > 0 && this.recentReqsQueue[this.i] < minRangeVal) {
    this.i++;
  }

  return this.recentReqsQueue.length - this.i;
};

/** 
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/
