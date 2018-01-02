// 189. Rotate Array
// Rotate an array of n elements to the right by k steps.
//
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
var rotate = function(nums, k) {
    const realShift = k % nums.length;
    // let i = 0;
    // while (i < realShift) {
    //     nums.unshift(nums.pop());
    //     i++;
    // }
    nums.unshift(...nums.splice(nums.length - realShift, realShift));
};

// 136. Single Number
// Given an array of integers, every element appears twice except for one. Find that single one.
var singleNumber = function(nums) {
    const sorted = nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i= i+2) {
        if (sorted[i] !== sorted[i + 1]) {
            return sorted[i];
        }
    }
};

// 181. Employees Earning More Than Their Managers
// The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.
//
// +----+-------+--------+-----------+
// | Id | Name  | Salary | ManagerId |
// +----+-------+--------+-----------+
// | 1  | Joe   | 70000  | 3         |
// | 2  | Henry | 80000  | 4         |
// | 3  | Sam   | 60000  | NULL      |
// | 4  | Max   | 90000  | NULL      |
// +----+-------+--------+-----------+
// Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.
//
// +----------+
// | Employee |
// +----------+
// | Joe      |
// +----------+

SELECT a.Name AS Employee
FROM Employee AS a
JOIN Employee AS b
ON a.ManagerId = b.id
WHERE a.Salary > b.Salary

// self-join table and filter out the employee with salary higher than their managers
