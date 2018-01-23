//// Conditional, use functions to clarify conditions
// Mal
if (fsm.state === 'fetching' && isEmpty(listNode)) {
    // ...
 }
// Bien
function shouldShowSpinner(fsm, listNode) {
    return fsm.state === 'fetching' && isEmpty(listNode);
}  
if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
// ...
}