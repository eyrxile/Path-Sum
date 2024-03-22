class TreeNode{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    if(!root.left && !root.right && root.val === targetSum) return true;

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

//Example usage:
const root1 = new TreeNode(5);
root1.left = new TreeNode(4);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(11);
root1.left.left.left = new TreeNode(7);
root1.left.left.right = new TreeNode(2);
root1.right.left = new TreeNode(13);
root1.right.right = new TreeNode(4);
root1.right.right.right = new TreeNode(1);

const targetSum1 = 22;
console.log(hasPathSum(root1, targetSum1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

const targetSum2 = 5;
console.log(hasPathSum(root2, targetSum2));

const root3 = null;
const targetSum3 = 0;
console.log(hasPathSum(root3, targetSum3));