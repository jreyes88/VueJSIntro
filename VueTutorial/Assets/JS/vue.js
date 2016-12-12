// Creating a new Vue instance and pass in an options object.
var demo = new Vue({
	
	// A DOM element to mount our view model.
	el: '#main',

    // This is the model.
	// Define properties and give them initial values.
	data: {
		active: 'home'
	},

	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}
});

// Creating a new Vue instance and pass in an options object.
var editDemo = new Vue({

    // A DOM element to mount our view model.
    el: '#mainEdit',

    // Define properties and give them initial values.
    data: {
        show_tooltip: false,
        text_content: 'Edit me.'
    },

    // Functions we will be using.
    methods: {
        hideTooltip: function(){
            // When a model is changed, the view will be automatically updated.
            this.show_tooltip = false;
        },
        toggleTooltip: function(){
            this.show_tooltip = !this.show_tooltip;
        }
    }
})

// Define a custom filter called "currency". 
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demoForm = new Vue({
    el: '#mainForm',
    data: {
    	// Define the model properties. The view will loop
        // through the services array and genreate a li
        // element for every one of its items.
        services: [
        	{
        		name: 'Web Development',
        		price: 300,
        		active:true
        	},{
        		name: 'Design',
        		price: 400,
        		active:false
        	},{
        		name: 'Integration',
        		price: 250,
        		active:false
        	},{
        		name: 'Training',
        		price: 220,
        		active:false
        	}
        ]
    },
    methods: {
    	toggleActive: function(s){
            s.active = !s.active;
    	},
    	total: function(){

        	var total = 0;

        	this.services.forEach(function(s){
        		if (s.active){
        			total+= s.price;
        		}
        	});

    	   return total;
        }
    }
});

var demoSearch = new Vue({
    el: '#mainSearch',
    data: {
        searchString: "",

        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.

        articles: [
            {
                "title": "What You Need To Know About CSS Variables",
                "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-100x100.jpg"
            },
            {
                "title": "Freebie: 4 Great Looking Pricing Tables",
                "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-100x100.jpg"
            },
            {
                "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-100x100.jpg"
            },
            {
                "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
                "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-100x100.png"
            },
            {
                "title": "Learn SQL In 20 Minutes",
                "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/01/learn-sql-20-minutes-100x100.png"
            },
            {
                "title": "Creating Your First Desktop App With HTML, JS and Electron",
                "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2015/12/creating-your-first-desktop-app-with-electron-100x100.png"
            }
        ]
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return articles_array;;
        }
    }
});

var demoGrid = new Vue({
	el: '#mainGrid',
	data: {
        // The layout mode, possible values are "grid" or "list".
		layout: 'grid',

        articles: [{
            "title": "What You Need To Know About CSS Variables",
            "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
            "image": {
                "large": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables.jpg",
                "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-150x150.jpg"
            }
        },
        {
            "title": "Freebie: 4 Great Looking Pricing Tables",
            "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
            "image": {
                "large": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables.jpg",
                "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-150x150.jpg"
            }
        },
        {
            "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
            "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
            "image": {
                "large": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february.jpg",
                "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-150x150.jpg"
            }
        },
        {
            "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
            "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
            "image": {
                "large": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers.png",
                "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-150x150.png"
            }
        },
        {
            "title": "Learn SQL In 20 Minutes",
            "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
            "image": {
                "large": "http://cdn.tutorialzine.com/wp-content/uploads/2016/01/learn-sql-20-minutes.png",
                "small": "http://cdn.tutorialzine.com/wp-content/uploads/2016/01/learn-sql-20-minutes-150x150.png"
            }
        },
        {
            "title": "Creating Your First Desktop App With HTML, JS and Electron",
            "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
            "image": {
                "large": "http://cdn.tutorialzine.com/wp-content/uploads/2015/12/creating-your-first-desktop-app-with-electron.png",
                "small": "http://cdn.tutorialzine.com/wp-content/uploads/2015/12/creating-your-first-desktop-app-with-electron-150x150.png"
            }
        }]

	}
});