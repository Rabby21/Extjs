Ext.define('Student',{
	extend:'Person',
	schooleName:'unknown',
	constructor:function(name,id,schooleName){
		this.callParent(arguments);
		this.schooleName=schooleName ||'unknown';
	},
	getSchoolName:function(){
		return "From Parent class give us "+this.schooleName+" child class provide us " + 'Name = ' +this.name;
	}
});