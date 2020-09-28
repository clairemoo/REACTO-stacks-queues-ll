function inLevelOrder(bst) {
  const queue = [bst], inLevelOrder = [];
  while(queue.length > 0) {
    const currentNode = queue.shift();
    inLevelOrder.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }
  return inLevelOrder;
}

const node5 = {value: 5};
const node4 = {value: 4};
const node2 = {left: node4, right: node5, value: 2}
const node3 = {value: 3}
const node1 = {left: node2, right: node3, value: 1};
console.log(inLevelOrder(node1))