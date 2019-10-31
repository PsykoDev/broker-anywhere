	module.exports = function TradeAnywhere(mod){
    
		mod.command.add('broker', () => {
		mod.send('S_NPC_MENU_SELECT', 1 , {type:28})
		});
		
		mod.command.add('fishchest', () => { 
		mod.send('S_NPC_MENU_SELECT', 1 , {type:1001})
		});
		
		mod.command.add('fishboy', () => {
        mod.send('S_NPC_MENU_SELECT', 1 , {type:1000})
		});	
	
		mod.command.add('signumtrader', () => {
        mod.send('S_NPC_MENU_SELECT', 1 , {type:16095})
		});	
	
		mod.command.add('trader', () => {
        mod.send('S_NPC_MENU_SELECT', 1 , {type:16062})
		});
	
		mod.command.add('fishtrader', () => {
        mod.send('S_NPC_MENU_SELECT', 1 , {type:16094})	
		});
	
		mod.command.add('alchi', () => {
		mod.send('S_NPC_MENU_SELECT', 1 , {type:193})
		});
	
		mod.command.add('warehouse', () => {
        mod.send('S_NPC_MENU_SELECT', 1 , {type:4})	
		}); 
	
};


