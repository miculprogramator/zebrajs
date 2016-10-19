/**
 *  Adds one or more classes to each element in the set of matched elements.
 *
 *  @example
 *
 *  // always cache selectors
 *  // to avoid DOM scanning over and over again
 *  var elements = $('selector');
 *
 *  // add a single class
 *  elements.addClass('classname');
 *
 *  // add multiple classes
 *  elements.addClass('classname otherclassname');
 *
 *  // since this method returns the set of matched elements, we can use chaining
 *  elements.addClass('classname otherclassname').css('display', 'none');

 *  @param  {string}    class_name  One or more space-separated class names to be added to each element in the
 *                                  set of matched elements.
 *
 *  @todo               This method currently doesn't work on IE9
 *
 *  @return {$}         Returns the set of matched elements, for chaining.
 */
this.addClass = function(class_name) {

    var i, j;

    // split by space and create an array
    class_name = class_name.split(' ');

    // iterate through the set of matched elements
    for (i in elements)

        // iterate through the class names to add
        for (j in class_name)

            // add class
            elements[i].classList.add(class_name[j]);

    // return the set of matched elements, for chaining
    return $this;

};

