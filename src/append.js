/**
 *  Inserts content, specified by the parameter, to the end of each element in the set of matched elements.
 *
 *  > If there is more than one target element, clones of the inserted element will be created for each target except for
 *  the last one. For the last target, the original item will be inserted.
 *
 *  > If an element selected this way is inserted elsewhere in the DOM, clones of the inserted element will be created for
 *  each target except for the last one. For the last target, the original item will be moved (not cloned).
 *
 *  @example
 *
 *  // always cache selectors
 *  // to avoid DOM scanning over and over again
 *  var parent = $('#selector');
 *
 *  // append a div that we create on the fly
 *  parent.append($('<div>').text('hello'));
 *
 *  // same thing as above
 *  parent.append($('<div>hello</div>'));
 *
 *  // append one or more elements that already exist on the page
 *  // if "parent" is a single element than the list will be moved inside the parent element
 *  // if "parent" is a collection of elements, clones of the list element will be created for
 *  // each target except for the last one; for the last target, the original list will be moved
 *  parent.append($('ul'));
 *
 *  // append a text node we create on the fly
 *  parent.append(document.createTextNode('hello'));
 *
 *  // append a string (which will be transformed in HTML)
 *  // this is more efficient memory wise
 *  parent.append('<div>hello</div>');
 *
 *  // since this method returns the set of matched elements, we can use chaining
 *  parent.append($('div')).addClass('appendedDiv');
 *
 *  @param  {mixed}     content     DOM element, text node, HTML string, or ZebraJS object to insert at the end of each
 *                                  element in the set of matched elements.
 *
 *  @return {$}         Returns the set of matched elements (the parents, not the appended elements), for chaining.
 */
this.append = function(content) {

    var i, j;

    // if element to append is an $ object, we'll use the array of DOM elements
    if (content instanceof $) content = content.get();

    // if content to append is a DOM element or a text node, wrap it in an array
    else if (content instanceof Element || content instanceof Text) content = [content];

    // if content to append is not a string, don't go further
    else if (typeof content !== 'string') return false;

    // iterate through the set of matched elements
    for (i in elements)

        // if content to append is a string (plain text or HTML)
        if (typeof content === 'string')

            // add it like this
            elements[i].insertAdjacentHTML('beforeend', content);

        // since content is an array of DOM elements or text nodes
        // iterate over the array
        else for (j in content)

            // add a clone to each parent except for the last one where we add the element itself
            elements[i].appendChild(i < elements.length - 1 ? content[j].cloneNode(true) : content[j]);

    // return the set of matched elements, for chaining
    return $this;

}
