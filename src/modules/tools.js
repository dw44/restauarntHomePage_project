export const tools = (function() {
  const createWithAttributes = function(tag, className = null, id = null, text = null) {
    /* 'tag', 'className', 'id'  and 'text' all NEED to be strings. 
    'className' 'id', and 'text' can be null, or any false-y value if not needed */ 
    const element = document.createElement(tag);
    if (!!className) element.classList.add(className);
    if (!!id) element.setAttribute('id', id);
    if (!!text) element.textContent = text;
    return element;
  }
  
  const addChildren = function(parent, ...children) {
    for (const child of children) {
      parent.appendChild(child);
    }
  }
  
  return {
    createWithAttributes,
    addChildren
  };

})();