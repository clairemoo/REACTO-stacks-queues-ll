function deleteNode(head, deletionIndex) {
  let currentIndex = 0, previousNode, currentNode = head;
  while(currentIndex < deletionIndex - 1) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    currentIndex++;
  }
  previousNode.next = currentNode.next;
}

const mac = {value: 'mac'}
const celine = {next: mac, value: 'celine'}
const orlando = {next: celine, value: 'orlando'}
const jess = {next: orlando, value: 'jess'}

console.log('jess next', jess.next)
console.log('orlando next', orlando.next)
console.log('celine next', celine.next)
console.log('mac next', mac.next)


deleteNode(jess, 2);

console.log('jess next', jess.next)
console.log('orlando next', orlando.next)
console.log('celine next', celine.next)
console.log('mac next', mac.next)
