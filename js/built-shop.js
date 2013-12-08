/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name (string) to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        return a[propName].localeCompare(b[propName]);
    });
} //sortObjArray()


/* render()
    entries     array of clothing items
*/
function render(entries) {
    var idx;
    var clothingItem;
    var clonedTemplate;  

    var template = $('.template');     
    var container = $('.shop');        

    //for each item the in array...
    for (idx = 0; idx < Clothes.entries.length; ++idx) {
        clothingItem = Clothes.entries[idx]; 

        clonedTemplate = template.clone();
        clonedTemplate.find('.pic').attr({
            src: clothingItem.pic, 
            alt: clothingItem.title
        }); 
        clonedTemplate.find('.title').html(clothingItem.title);
        clonedTemplate.find('.type').html(clothingItem.type);
        clonedTemplate.find('.price').html(clothingItem.price);
        clonedTemplate.find('.description').html(clothingItem.description);
        clonedTemplate.removeClass('template');
        container.append(clonedTemplate);
    } //for each item in the array
} //render()


/* document ready function */
$(function(){

    //sort the clothes array by title of item
    sortObjArray(Clothes.entries, 'type');

    //render the items
    render(Clothes.entries);

    //register event handlers for sort buttons
    $('.sort-ui .btn').click(function(){
        var $this = $(this);                        //sort bytton being clicked
        var sortBy = $this.attr('data-sortby');     //sort by type

        //resort the entries by the sort property name
        sortObjArray(Clothes.entries, sortBy);
        
        //re-render the list
        render(Clothes.entries);

        //remove the 'active' class from the sort button
        //that currently has it, and add the 'active' class
        //to the button that was clicked
        $this.siblings('.active').removeClass('active');
        $this.addClass('active');
    }); //sort-ui click handler

    //configure Bootstrap popovers for the sort UI buttons
    $('.sort-ui .btn').popover({
        content: function() {
            //this dynamically builds the popover content
            //based on the caption of the button that was clicked
            return 'Click to resort by ' + $(this).html();
        },
        container: 'body',      //necessary because this is a button group
        trigger: 'hover',       //triggered on hover
        placement: 'bottom'     //display popover below the button
    }); //popovers
}); //document ready()