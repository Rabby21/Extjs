Ext.define('Student',{
	//extend:'Person',
	schooleName:'unknown',
	mixins:{
		getName:'Person',
		getId:'Person'
	},
	constructor:function(name,id,schooleName){
		this.name=name;
		this.id=id;
		this.callParent(arguments);
		this.schooleName=schooleName ||'unknown';
	},
	getSchoolName:function(){
		return "School name is: "+this.schooleName+"<br>"+" Name is: " +this.name+"<br>Id is: "+this.id;
	}
});