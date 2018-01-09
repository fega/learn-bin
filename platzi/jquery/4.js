/**
 * READY
 */
// this
$(document).ready(() => console.log('hola'))
// is equal to
$().ready(() => console.log('hola'))
// and equal to
$(() => console.log('hola'))

/**
 * SELECTORS
 */
// this search the selector items in the context, context is a jQueryObject
var context = $('ContextSelector')
$('selector', context)

// valid
var $selection = $([document, 'selector'])

/**
 *  filters
 */
$('selector').has('if has something')
$('selector').find('find this selector')
$('selector').not('if doesn\'t has this selector or inner element')
$('selector').filter('filter by this selector')
$('selector').first()

/**
 *  Create element and append it
 */
var $a = $('<a>', {
  href: 'link',
  target: '_blank',
  html: 'text'
})
$('body').append($a)

/**
 * Get and set
 */
var log = console.log
log($a.attr('href')) // Getter
$a.attr('href', 'newLink') // setter
  .attr('html', 'new text') // chaining
  .attr({
    href: 'alternative',
    html: 'another text'
  })
// Classes
$a.addClass('newClass')
$a.removeClass('newClass')
$a.toggleClass('newClass')
// css
$a.css({'font-size': '4px'})
