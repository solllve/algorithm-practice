// The most optimum algorithm scales in constant time and space. This means it does not care at all about the growth of its inputs. Next best is logarithmic time or space, then linear, linearithmic, quadratic, and exponential. The worst is factorial time or space. In Big-O notation:
// Constant: O(1)
// Logarithmic: O(log n)
// Linear: O(n)
// Linearithmic: O(n log n)
// Quadratic: O(n²)
// Expontential: O(2^n)
// Factorial: O(n!)


// In Big O:
// Indexing: O(1)
// Inserting: O(n)
// Deleting: O(n)
// Brute-Force Searching: O(n)
// Optimized Searching: O(log n)

// Native array methods that iterate through all its items are: indexOf, lastIndexOf, includes, fill, and join. Additionally, we can provide a callback function to the following methods: findIndex, find, filter, forEach, map, some, every, and reduce.

// Recursioning
// In a seminal paper, the Church-Turing Thesis proves that any iterative function can be reproduced with a recursive one, and vice versa. Sometimes, a recursive approach is cleaner, clearer, and more elegant. 

function countDown(n) {
    console.log(n);
    let nextNumber = n - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);

//Calculate the sum of n natural numbers

function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
}

sum(5)

// At a high level, there are basically three types of data structures. Stacks and Queues are array-like structures that differ only in how items are inserted and removed. Linked Lists, Trees, and Graphs are structures with nodes that keep references to other nodes. Hash Tables depend on hash functions to save and locate data.

//Binary Tree Example

function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

// Inorder traversal
// A recursive algorithm is the easiest way to get started with binary tree inorder traversal. The idea is as follows:
/**
* @param {TreeNode} root
*/
const inorder = (root) => {
    const nodes = []
    if (root) {
        inorder(root.left)
        nodes.push(root.val)
        inorder(root.right)
    }
    return nodes
}

// for our example tree, this returns [1,2,3,4,5,6]

// Postorder traversal
// A recursive algorithm is the easiest way to get started with the postorder traversal.

// If the node is null, do nothing – else, recursively call the function on the node's left child.
// When there are no more left children, call the function on node.right.
// Finally, do some operation on the node.
// Postorder traversal visits the tree nodes from left, to right, to mid.
/**
* @param {TreeNode} root
*/
const postorder = (root) => {
    const nodes = []
    if (root) {
        postorder(root.left)
        postorder(root.right)
        nodes.push(root.val)
    }
    return nodes
}
// for our example tree, this returns [1,3,2,6,5,4]

// Preorder traversal
// A recursive algorithm is the easiest way to get started with the preorder traversal.

// If the node is null, do nothing – else, do some operation on the node.
// Traverse to the left child of the node and repeat.
// Traverse to the right child of node and repeat.
// Postorder traversal visits the tree nodes from mid, to left, to right.
/**
* @param {TreeNode} root
*/
const preorder = (root) => {
    const nodes = []
    if (root) {
        nodes.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    return nodes
}
// for our example tree, this returns [4,2,1,3,5,6]

// Valid Binary Search Tree
/**
* @param {TreeNode} root
*/
const isValidBST = (root) => {
    const helper = (node, min, max) => {
        if (!node) return true
        if (node.val <= min || node.val >= max) return false
        return helper(node.left, min, node.val) && helper(node.right, node.val, max)
    }
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

//Find Binary Tree Max Depth

// Here, the algorithm is attempting to find the height/depth of our BST. In other words, we are looking at how many 'levels' a BST contains.

// If the node is null, we return 0 as it does not add any depth
// Else we add + 1 to our current depth (we traversed one level)
// Recursively calculate the depth of node's children and return the maximum sum between node.left and node.right

/**
* @param {TreeNode} root
*/
const maxDepth = function(root) {
    const calc = (node) => {
        if (!node) return 0
        return Math.max(1 + calc(node.left), 1 + calc(node.right))
    }
    return calc(root)
};

// How to Find the Lowest Common Ancestor Between Two Tree Nodes

/**
* @param {TreeNode} root
* @param {TreeNode} p
* @param {TreeNode} q
*/
const lowestCommonAncestor = function(root, p, q) {
    let lca = null
    const isCommonPath = (node) => {
        if (!node) return false
        var isLeft = isCommonPath(node.left)
        var isRight = isCommonPath(node.right)
        var isMid = node == p || node == q
        if (isMid && isLeft || isMid && isRight || isLeft && isRight) {
            lca = node
        }
        return isLeft || isRight || isMid
    }
    isCommonPath(root)
    return lca
};

strs = ['flower', 'flow', 'flight']

const longestCommonPrefix = (strs) => {
    return strs
}


// First and last index in sorted array
// use a hash table
const firstAndLastIndex = arr => {
    let hash = {};
    let first = 0;
    let last = 0;
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++;
        } else {
            hash[arr[i]] = 1;
        }
    }
}
const array = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]
firstAndLastIndex(array)

// Kth largest element
// Symmetric tree
// Generate parentheses
// Gas station
// Course schedule
// Kth permutation
// Minimum window substring
// Largest rectangle in histogram

//O(N) Linear Search
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
            console.log(i)
        }
    }
    return -1;
}

//Binary Search is O(log2n)
const binary = (arr, target) => {
    let lower = 0;
    let upper = arr.length - 1;
    while(lower <= upper) {
        //check middle 
        console.log('try')
        const middle = lower + Math.floor((upper - lower) / 2)
        if (target === arr[middle]) {
            return middle;
        }
        if (target < arr[middle]) {
            //left side
            upper = middle - 1;
        }
        else {
            lower = middle + 1
        }
    }
    return -1
}

//recursive and iterative

//binary search only works with sorted arrays

let nums = [2,7,8,10,13,17,19,21]

const iterativeBinary = (array, target) => {
    // define left and right
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        let mid = Math.floor(left + right) / 2
        if (target === array[mid]) {
            //if its in mid
            return mid;
        }
        else if (target < array[mid]) {
            //check left
            right = mid - 1;
            // we don't need to check right
        }
        else {
            left = mid + 1;
            // we don't need to check left
        }
    }
    return false
}

console.log(iterativeBinary(nums, 17))

// Time complexity: o(log(n), space complexity: o(1)

//recursive
function binarySearchRecursive(array, target) {
    // array , target, left, right
    return binarySearchHelper(array, target, 0, array.length - 1);

}

const binarySearchHelper = (array, target, left, right) => {
    if (left > right) {
        return false;
    }
    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]) {
        return mid;
    }
    else if (target < array[mid]) {
        return binarySearchHelper(array, target, left, mid - 1)
    }
    else {
        return binarySearchHelper(array, target, mid + 1, right)
    }
}

console.log(binarySearchRecursive(nums, 7))

// Time complexity O(log(n)), space complexity O(log(n))