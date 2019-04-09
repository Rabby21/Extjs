Ext.define('Employee',{
   name: 'pritam',
   id:1,
   show:function()
   {
   	console.log("name :"+this.name);
   },
   statics:{
      y:10,

   }
   

});

var emp = Ext.create('Employee');
emp.show();
console.log(Employee.y);
