/**
 * This function calculates the cost of an employee based on the data in its file
 * @param {string} filePath - path to the employee data file
 * @returns {{name: string, cost: number}} - the name and cost of the employee
 */

const fs = require("fs");

function costCalculator(filePath) {
	// TODO: write your code here
	// DON'T TOUCH ANYTHING OUTSIDE THIS FUNCTION

	const info = fs.readFileSync(filePath , 'utf8');
	const employee = JSON.parse(info);

	const costph = employee.salary / employee.hours;
	return{
		name: employee.name,
		cost: costph
		}	

	}


module.exports = {
	costCalculator,
};
