Ext.define('Person',{
	name:'',
	id:'',
	constructor:function(name,id){
		if(name&&id){
			this.name=name;
			this.id=id;
		}
	},
	getName:function(){
		return this.name+" "+this.id;
	}
});