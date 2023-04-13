const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
    return this.data;
  }

  add(data) {
    this.data = addNode(this.data, data);

    function addNode(node, value) {
      if(!node) {
        return new Node(value);
      }

      if(node.data === value) {
        return node;
      }

      if(value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.data, data);
    
    function hasNode(node, value) {
      if(!node) {
        return false;
      }

      if(node.data === value) {
        return true;
      }

      return value < node.data ? hasNode(node.left, value) : hasNode(node.right, value);
    }

  }

  find(data) {
    return findNode(this.data, data);

    function findNode(node, value) {

      if(!node) {
        return null;
      }

      if(node.data === value) {
        return node;
      }

      return value < node.data ? findNode(node.left, value) : findNode(node.right, value);

    }
  }

  remove(data) {
    this.data = removeNode(this.data, data);

    function removeNode(node, value) {

      if(!node) {
        return null;
      }

      if(value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if(value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }

    }
  }


  min() {
    if(!this.data) {
      return;
    }

    let node = this.data;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.data) {
      return;
    }

    let node = this.data;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};