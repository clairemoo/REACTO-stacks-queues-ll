function preorder(bst) {
  const stack = [bst], preorder = [];
  while(stack.length > 0) {
    const currentNode = stack.pop();
    preorder.push(currentNode.value);
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
  return preorder;
}

const node5 = {value: 5};
const node4 = {value: 4};
const node2 = {left: node4, right: node5, value: 2}
const node3 = {value: 3}
const node1 = {left: node2, right: node3, value: 1};

console.log(preorder(node1));

