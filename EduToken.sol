// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract EduToken {
    string public name = "EduToken";
    string public symbol = "EDU";
    uint256 public totalSupply = 1000000 * 10**18;
    uint8 public decimals = 18;
    
    mapping(address => uint256) public balances;
    mapping(address => mapping(uint256 => bool)) public unlockedCourses;

    address public owner;

    event TokensEarned(address indexed user, uint256 amount);
    event CourseUnlocked(address indexed user, uint256 courseId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        balances[owner] = totalSupply;
    }

    function earnTokens(address user) external {
        uint256 reward = 0.001 * 10**18; // 0.001 EDU Tokens
        balances[user] += reward;
        emit TokensEarned(user, reward);
    }

    function unlockCard(uint256 cardId) external {
        require(balances[msg.sender] >= 0.002 * 10**18, "Not enough tokens");
        balances[msg.sender] -= 0.002 * 10**18; // Deduct token cost
        unlockedCourses[msg.sender][cardId] = true;
        emit CourseUnlocked(msg.sender, cardId);
    }

    function checkUnlocked(uint256 cardId) external view returns (bool) {
        return unlockedCourses[msg.sender][cardId];
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}
