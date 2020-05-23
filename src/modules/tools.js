export const tools = (function() {
    const createWithAttributes = function(tag, className = null, id = null) {
      /* 'tag', 'className', and 'id' all NEED to be strings. 
        'className' and 'id' can be null, or any false-y value if not needed */ 
      const element = document.createElement(tag);
      if (!!className) element.classList.add(className);
      if (!!id) element.setAttribute('id', id);
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