//You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.//
function loop_size(node) {
    var loopArr = [];
    while (node && loopArr.indexOf(node) < 0) {
      loopArr.push(node);
      node = node.next;
    }
    var firstIndex = Math.max(0, loopArr.indexOf(node));
    return loopArr.length - firstIndex;
  }
