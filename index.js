// create a function that receives a selector as an argument, and RETURNS the first selector using querySelector method
function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){

    //defined a function that pulls the #nested ID
    return document.querySelector('#nested .target')

    // # used for nested because it is an id
    // . used for target because it is a class
    // query syntax - 	(A B)	Any element matching B that is a descendant of an element matching A (that is, a child, or a child of a child, etc.).
      //or
      //return document.getElementById('nested')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
          //create a constant variable that is assigned to the all of the classNames of ranked-list
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    //setup a while loop where initializer starts at 0, a variable l is declared outside of the loop scope as the rankedList length, condition for loop to run as long as the counter is less than the length of the variable l, and increase the incrementor by 1 after each loop)

    let children = rankedLists[i].children
      //create a variable children whose scope is only within each loop (ie children will be redefined for every iteration of the loop)
    for (let j = 0, k = children.length; j < k; j++) {
      //j=counter initiaizer, declare variable k which is how many children, conditional, increase incremental
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
          //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
          //extract the content and increase by argument of n
    }
  }
}

function deepestChild(){
  //return document.querySelector('#grand-node:last-child')
  let node = document.getElementById('grand-node')
  let nextNode=node.children[0]
  while(nextNode){
    node=nextNode
    nextNode=node.children[0]
  }
  return node
}
