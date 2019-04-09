Ext.define('Person',{
   name: 'Rabby',
   id:1,
   age:99,
   show:function()
   {
   	console.log("name :"+this.name);
   	console.log("age : "+this.age);
   },
   constructor : function(name)
   {
   	//return this.name=name;
   	console.log(this.name=name);
   }

});

var p = Ext.create('Person','Rabby');
p.show();
var p1= Ext.create('Person','kamal');
p1.show();
