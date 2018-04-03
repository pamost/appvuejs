new Vue({
	el:'#app',
	data:{
		name: 'Pavel',
		age: '31',
		currentItem: 'Vuejs',
		items: [],
		url: 'http://megaweb.kz/'
	},
	methods:{
		changeName: function(){
			this.name = "Artem";
		},
		addItem: function(){
			this.items.push(this.currentItem);
		}
	},
	computed:{
		userInfo: function(){
			return this.name + " is " + this.age
		}
	},
	watch:{
		name: function(){
			console.log(this.name);
		}
	}
})
