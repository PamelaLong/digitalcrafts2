//For an array A consisting of N integers.
//I am looking to find the maximum K (from 0 to N − 1)
//such that there exists a pair of positions (i, j)
//satisfying K = |i − j| = |A[i] − A[j]|
//where |x| denotes absolute value of x.
//In other words, the distance between positions is equal to the difference between values.
//A position together with itself (when i = j) is always a valid pair for K = 0 (look at the third example).


//that, given an array A of N integers, returns the maximum possible K.

//Sample Input: A = [2, 2, 2, 1]
//The function should return 1 as The furthest valid pair is A[2] = 2 and A[3] = 1, as 1 = |2 − 3| = |2 − 1|.
const A = [1,2,3,4,5];
const K = [0,-1];

function print(array) {
    let length = array.length;
    let k = 0;
    for (i = 0; i < length; i++){
        for (j = i +1; j < length; j++){
            if ((j-i)== array[j] - array[i]){
                if (k < (j-i)){
                    console.log(k)
                }
            }
        }
    }
}
console.log("last k", k)
