/**
* 1. Simple Text Interpolation:
* Vue will render out the following message onto the DOM
*
* Feel free to open the browser console and alter app.message to a different string
*/
var app = new Vue({
	el: '#app',
	data: {
	  message: 'Howdy world!'
	}
})

/**
* 2. Directives:
* the `v-bind` attribute is called a directive.
* Directives are prefixed with v- to indicate that they are special attributes provided by Vue
* Directives apply special reactive behavior to the rendered DOM
*
* Feel free to open the browser console and alter app2.message to a different string.
*/
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

/**
* 3. Conditionals and Loops:
* It's easy to toggle the presence of an element, too
*
* Feel free to enter app3.seen = false;. The message will disappear
* Special Note: Vue allows you to apply transition effects for when a DOM item is inserted, updated, or removed.
* for more information on transition effects: https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components
*/
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

/**
* the v-for directive can be used for displaying a list of items using the data from an Array
* Feel free to enter app4.todos.push({ text: 'New item' }) into the console. A new item will be appended to the list
*/
var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
})

/**
* 4. Handling User Input:
* To let users interact with your app, use the v-on directive to attach event listeners that invoke methods on our Vue instances.
* Note: in the method we simply update the state of our app, we do not touch the DOM.
* All DOM manipulations are handled by Vue.
* The code you write is focused on the underlying logic
*/
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

/**
* Vue also provides the v-model directive that makes two-way binding between form input and app state a breeze.
* 
*/
var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
})

/**
* 5. Components:
* The component system is another important concept in Vue, because it’s an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components.
* In Vue, a component is essentially a Vue instance with pre-defined options. Registering a component in Vue is straightforward:
*/
Vue.component('todo-item', {
	props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ text: 'Vegetables' },
			{ text: 'Cheese' },
			{ text: 'Whatever else humans are supposed to eat' }
		]
	}
})