'use strict';


function Robot() {
	// implement your solution here!
	this.bearing = 'north',
	this.orient = function(direction) {
		if (directions.indexOf(direction) !== -1) {
			this.bearing = direction;
			return;
		}
		throw new Error('Invalid Robot Bearing');
	},
	this.turnRight = function() {
		this.bearing = directions[ (directions.indexOf(this.bearing) + 1) % 4 ];
	},
	this.turnLeft = function() {
		var index = directions.indexOf(this.bearing) - 1;
		this.bearing = directions[index >= 0 ? index : 3];
	},
	this.coordinates = [0, 0],
	//function() { return [this.x, this.y]; }(),
	this.at = function(x, y) {
		this.coordinates = [x, y];
	},
	this.place = function(dict) {
		this.at(dict["x"], dict["y"]);
		this.orient(dict["direction"]);
	},
	this.advance = function() {
		var x = this.coordinates[0];
		var y = this.coordinates[1];

		switch (this.bearing) {
			case 'north':
				this.coordinates[1] = y + 1;
				break;
			case 'east':
				this.coordinates[0] = x + 1;
				break;
			case 'south':
				this.coordinates[1] = y - 1;
				break;
			case 'west':
				this.coordinates[0] = x - 1;
				break;
		}
	},
	this.instructions = function(allInstructions) {
		return allInstructions.split("").map( instruction => {
			switch (instruction) {
				case 'A':
					return "advance";
				case 'L':
					return "turnLeft";
				case 'R':
					return "turnRight";
				default:
					return "";
			}
			return "";
		})
	},
	this.evaluate = function(allInstructions) {
		this.instructions(allInstructions).forEach( function(instruction) {
			//console.log(instruction);
			//this[instruction]();
			switch (instruction) {
				case "advance":
					this.advance();
					break;
				case "turnLeft":
					this.turnLeft();
					break;
				case "turnRight":
					this.turnRight();
					break;
			}
		}, this);
	}
 }

var directions = ['north', 'east', 'south', 'west'];