$(document).ready(function(){
	var coucou = new Vue({
	 el: '#molkky',
	data : {
		started : true,
		test : "YOLO",
		newPlayerName : '',
		players : [
		{name : "Sylvain", score:0},
		{name : "Taz", score:50}
		]
	},
	methods : {
		resetScores : function(){
			for (var i = this.players.length - 1; i >= 0; i--) {
				this.players[i].score = 0;
			};
		},
		addPlayer : function(){
			console.log(this.newPlayerName);
			this.players.push({name:this.newPlayerName, score:0});
		}
	}
	});
});