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
let i = 0
function recurse() {
    i++
    console.log(i)
    if (i === 3) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}
recurse()

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