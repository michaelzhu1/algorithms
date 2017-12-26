var isPalindrome = function(s) {
    //轉小寫
    s = s.toLowerCase();
    //取代非文字部分
    s = s.replace(/[^a-z0-9]/ig,"");
    //反轉
    var rev = s.split("").reverse().join("");
    //判斷反轉後是否與之前處理過的字串相等
    return s.indexOf(rev) == 0;
};

console.log(isPalindrome('abbubba'));
