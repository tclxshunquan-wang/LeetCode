/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

  let current = head;
  let result = null
  while (current != null) {
    let temp=current.next
    current.next=result
    result=current
    current=temp
  }
  return result
};