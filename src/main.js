// One object to save min (A.p + A.q)
//
// 2 loop
// One loop from pmin to pmax with pmax = N-4, in each iteration save min (p+q) with q a fix value A[n-2]
//
// Second loop ,
// Iterate from qmax to qmin with qmax=A.(n-2)
// Check if A.q is < min(p+q) and A.P < min(p+q) check if total < min total
//
// Else decrement q and increment p(only if p >min total)
//[1, 2, 3, 4, 5]
//[1, 4, 3, 4, 5, 2, 7, 7, 1001, 10]
export default const parseArray = chain => {
  //chain lenght must be at least 5 to verify 0<P<Q<N-1 ; P < Q -1 ;
  if (Array.isArray(chain) && chain.length >= 5) {
    const N = chain.length;
    let minPIndex = 1;
    let maxPIndex = N - 4;//maxQIndex -2
    let maxQIndex = N - 2;
    let minQIndex = 3;//minPIndex + 2

    //object to save min cost and corresponding P an Q index
    const minCost = {
      value: chain[i] + chain[maxQIndex],
      //pIndex: minPIndex,
      //qIndex: maxQIndex
    };
    //iterate through chain and increment P,
    //find min chain[P]
    // for (let i = minPIndex; i <= maxPIndex; i++) {
    //
    //   if (chain[i] >= minCost.value) continue;
    //   const cost = chain[i] + chain[maxQIndex];
    //
    //   if (cost < minCost.value) {
    //     minCost.value = cost;
    //     //minCost.pIndex = i;
    //   }
    // }
    do {
      maxPIndex = maxQIndex -2;
      console.log("in do while with maxPIndex", maxPIndex, "maxQIndex", maxQIndex);
      //check if chain[maxQIndex] < chain[maxQIndex + 1]
      //i can improve code so that it compare chain[maxQIndex-1] to chain[maxQIndex]and enter loop only if chain[maxQIndex] < chain[maxQIndex-1]
      if(( (maxQIndex-1) >= minQIndex ) && ! (chain[maxQIndex] < chain[maxQIndex-1])){
        console.log("there is a better maxQIndex suitable to give a smaller cost ");
        maxQIndex--;
        continue;
      }
      if ( (maxQIndex === N - 2) || ((chain[maxQIndex] < chain[maxQIndex + 1]) && (maxQIndex + 1 <= N - 2) )  ){
        console.log("ill start loop on Pindex");
        for (let i = minPIndex; i <= maxPIndex; i++) {

          //if (chain[i] >= minCost.value) continue;
          const cost = chain[i] + chain[maxQIndex];

          if (cost < minCost.value) {
            minCost.value = cost;
          }
        }
      }

      maxQIndex--;
    } while (maxPIndex >= minPIndex && maxQIndex >= minQIndex);
    // Second loop ,
    // Iterate from qmax to qmin with qmax=A.(n-2)
    // Check if A.q is < min(p+q) and A.P < min(p+q) check if total < min total
    //
    // Else decrement q and increment p(only if p >min total)
    //search for min chain[q]
    //find min chain[q]
    // for (let i = maxQIndex; i >= minQIndex; i--) {
    //   if (chain[i] >= minCost.value) continue;
    //   const cost = chain[minPIndex] + chain[i];
    //   //
    //   if (cost < minCost.value) {
    //     minCost.value = cost;
    //     minCost.qIndex = i;
    //   }
    // }

    return minCost.value;
//this option is not completed
  }else{
    console.log("provide a chain with at least 5 integer")
  }
};
