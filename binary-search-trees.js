class Tree {
  constructor(root=null) {
    this.root = root;
  }

  insert(value, currentNode=this.root) {
    if(!root) {
      root = new Node(value);
    } else if(value < currentNode.value) {
      // go left
      // BASE CASE: if there is not left currentNode, add it
      if(!currentNode.left) {
        currentNode.left = new Node(value);
      } else {
      // if there is a left currentNode, call insert with that currentNode
        this.insert(value, currentNode.left);
      }
    } else if(value > currentNode.value) {
      // go right
      if(!currentNode.right) {
        currentNode.right = new Node(value);
      } else {
        this.insert(value, currentNode.right);
      }
    }
  }

  printTree(node=this.root) {
    console.log(node.value);
    if(node.right) {
      this.printTree(node.right);
    }
    if(node.left) {
      this.printTree(node.left)
    }
  }

  search(value, node=this.root) {
    if(value === node.value) {
      return true;
    }
    if(value < node.value) {
      // go left
      if(!node.left) {
        return false;
      } else {
        return this.search(value, node.left);
      }
    }
    if(value > node.value) {
      // go right
      if(!node.right) {
        return false;
      } else {
        return this.search(value, node.right);
      }
    }
  }

  dfs(node=this.root, callback) {
    // create a queue
    // push root (or first node) into queue
    // start while loop:
    // - check node in queue
    // - if it has child nodes, push those into queue (from left to right)
    // - (optional) perform function on node
    // - keep executing loop
    // after no nodes left in queue, search is complete

    const queue = [];
    queue.push(node);
    while(queue.length > 0) {
      let currentNode = queue.shift();
      if(!currentNode) break;
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
      if(callback) callback(currentNode)
    }

  }

  getHeight(node) {
    if(!node) return 0;
    else return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
  }

  checkBalancedNode(node=this.root) {
    if(Math.abs(this.getHeight(node.left) - this.getHeight(node.right)) < 2) return true;
    else return false;
  }

  checkBalancedTree(root=this.root) {
    this.dfs(root, this.checkBalancedNode)
    const queue = [];

  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const testTree = new Tree(new Node(10));
const vals1 = [11, 12, 9, 1, 3, 22, 18, 23, 2, 5, 7, 6, 19];

testTree.insert(9);
testTree.insert(11);
testTree.insert(8);
testTree.insert(12);
testTree.insert(7);
testTree.insert(13);

console.log(testTree.getHeight(testTree.root));
console.log(testTree.checkBalancedTree());
