// 175. Combine Two Tables
// Table: Person
//
// +-------------+---------+
// | Column Name | Type    |
// +-------------+---------+
// | PersonId    | int     |
// | FirstName   | varchar |
// | LastName    | varchar |
// +-------------+---------+
// PersonId is the primary key column for this table.
// Table: Address
//
// +-------------+---------+
// | Column Name | Type    |
// +-------------+---------+
// | AddressId   | int     |
// | PersonId    | int     |
// | City        | varchar |
// | State       | varchar |
// +-------------+---------+
// AddressId is the primary key column for this table.
//
// Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:
//
// FirstName, LastName, City, State

// SELECT
// FirstName, LastName, City, State
// FROM
// Person
// LEFT JOIN
// Address
// ON
// Person.PersonId = Address.PersonId;


// 206. Reverse Linked List
// Use two pointer method as well. Use a tempNext variable to store the next of current node after changing curr's next pointer to prev and then update prev to curr, and then update curr to the tempNext varable we orginally stored
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }
    return prev;
};


// 234. Palindrome Linked List
// Given a singly linked list, determine if it is a palindrome.
var isPalindrome = function(head) {
    let original = "";
    let reverse = "";
    while (head !== null) {
        original = original + head.val.toString();
        reverse = head.val.toString() + reverse;
        head = head.next;
    }

    return original == reverse;
};

// The trick is to convert the linked list to strings and then compare if the reverse of that string is the same as the original string.

// 66. Plus One
// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
//
// You may assume the integer do not contain any leading zero, except the number 0 itself.
//
// The digits are stored such that the most significant digit is at the head of the list.
var plusOne = function(digits) {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1]++;
        return digits;
    } else {
        let addOne = true;
        let i = digits.length - 1;
        while (addOne) {
            if (digits[i] === 9) {
                digits[i] = 0;
                if (digits[i-1] && digits[i-1] === 9) {
                    addOne = true;
                } else if (!digits[i-1]) {
                    digits.unshift(1);
                    addOne = false;
                }
                i--;
            } else {
                digits[i]++;
                addOne = false;
            }
        }
    }
    return digits;
};

// 83. Remove Duplicates from Sorted List
// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

var deleteDuplicates = function(head) {
    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

// 88. Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
var merge = function(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2.shift();
    }
    nums1.sort((a,b) => a-b);
};
