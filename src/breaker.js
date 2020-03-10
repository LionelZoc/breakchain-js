/*
 * parms: chain Array
 * breaker takes an array of integer and cut it in 3 at P and Q index and return the smallest chain[P] + chain[Q]
 */
const breaker = chain => {
  //chain length must be at least 5 to verify 0<P<Q<N-1 ; P < Q -1 ;
  if (Array.isArray(chain) && chain.length >= 5) {
    const N = chain.length;
    let minPIndex = 1;
    let maxPIndex = N - 4; //maxQIndex -2
    let maxQIndex = N - 2;
    let minQIndex = 3; //minPIndex + 2

    //object to save min cost and corresponding P an Q index
    const minCost = {
      value: chain[minPIndex] + chain[maxQIndex]
    };

    //the trick is to start at the extrem borders of the chain minP and MaxQ , and iterate all possible P with each possible Q and take the smallest sum
    do {
      //reset maxPIndex to respect the P < Q -1
      maxPIndex = maxQIndex - 2;

      //check if chain[maxQIndex] < chain[maxQIndex + 1]
      //i can improve code so that it compare chain[maxQIndex-1] to chain[maxQIndex]and enter loop only if chain[maxQIndex] < chain[maxQIndex-1]
      //this condition means that chain[maxQIndex-1] is a better element to have a smaller chain[P] + chain[Q] "
      if (
        maxQIndex - 1 >= minQIndex &&
        !(chain[maxQIndex] < chain[maxQIndex - 1])
      ) {
        maxQIndex--;
        continue;
      }

      //if current chain[maxQIndex] is not less than previousMaxQindex(chain[maxQIndex + 1]) decrement maxQIndex
      if (
        maxQIndex === N - 2 ||
        (chain[maxQIndex] < chain[maxQIndex + 1] && maxQIndex + 1 <= N - 2)
      ) {
        //iterate from minP to maxP and check sum chain[P] + chain[maxQ]
        for (let i = minPIndex; i <= maxPIndex; i++) {
          const cost = chain[i] + chain[maxQIndex];
          //check if new sum is smaller than previous and save it
          if (cost < minCost.value) {
            minCost.value = cost;
          }
        }
      }

      maxQIndex--;
    } while (maxPIndex >= minPIndex && maxQIndex >= minQIndex);
    //keep looping until maxPIndex and maxQIndex are not reached

    return minCost.value;
  } else {
    return false;
  }
};
export default breaker;
