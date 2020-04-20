function middleNode(head) {
  const listSize = nodeSize(head);
  let middleNodeNumber = Math.ceil(listSize / 2);
    
    
    //what is heads value
  let resultMiddleNode = head;
    
  if (listSize %2 == 0){
    middleNodeNumber = middleNodeNumber +1;
  }
  for (let i = 1; i < middleNodeNumber; i++ )
  {
      resultMiddleNode = resultMiddleNode.next;
  }
  return resultMiddleNode;
}
/**
 * @param {ListNode} head
 * @return {Number}
 */

//finding the size of the linked list
function nodeSize(head) {
  let size = 1;
  let current = head;
  if (head == null)
  {
    return 0;
  }
  else
  {
    while (current.next != null)
    {
      current = current.next;
      size++;
    }
  }
  return size;
}