Ext.define('Student',{
    config : 
    {
        name : 'unnamed',
        schoolName : 'Unknown'
    },

    constructor : function(config){
        this.initConfig(config);
    },
    
    applyName : function(name){
        return Ext.String.capitalize(name);
    },
   
    updateName : function(newValue, oldValue){
        document.write('New value: ' + newValue + ', Old value: ' + oldValue);
    }
});

