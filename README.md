# breakchain-js

simple algo to break a chain of integer in 3 part with some.

you have an array A containing N integers that represent a chain.
the goal is to cut the chain at two different point to have 3 small chains.

the chain will be cut at P and Q with theses conditions

0<P<Q<N-1 ; P < Q -1 ;

the chain can be then cut like this:

[0, P-1][p+1, q-1] [Q+1, N-1]
