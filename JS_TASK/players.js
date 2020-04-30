var players = {
    rows: {
        current: null,
        rows: [],
        getRow: function (whereKey = '') {

        },
        updateRow: function () {

        },
        deleteRow: function (whereKey = '') {

        }
    },
    fetch: function () {
        const users = require("./players.json");
        var ans = Object.values(users);
        console.log("BEGIN fetch()")
        console.log("ALL USERS!");
        console.log(ans);
        console.log("END fetch()");

        var result = ans.map(({ status }) => status);
        var data = [];
        players.rows.rows = ans;
        data.push(players.rows.rows);
        return data;
    },
    updateRow: function (id, device_os, name, login, status, level, coins) {
        var id;
        const users = require("./players.json");
        console.log("Inside updateRow(): ");
        console.log();
        var ans = Object.values(users);

        ans[id].device_os = device_os;
        ans[id].name = name;
        ans[id].login = login;
        ans[id].status = status;
        ans[id].level = level;
        ans[id].coins = coins;

        return ans[id];
    },
    active: function () {
        const users = require("./players.json"); 
        var ans = Object.values(users);
        console.log("Active users: ");
        var result = ans.map(({ status }) => status);
       
        for (var i = 0; i < ans.length; i++) {
            if (result[i] === "active") {
                console.log("BEGIN ACTIVE!");
                console.log(ans[i]);
                console.log("END ACTIVE!");
            }
        }

    },
    banned: function () {
        const users = require("./players.json"); 
        var ans = Object.values(users);
        console.log("Banned users: ");
        var result = ans.map(({ status }) => status);
       
        for (var i = 0; i < ans.length; i++) {
            if (result[i] === "banned") {
                console.log("BEGIN BANNED!");
                console.log(ans[i]);
                console.log("END BANNED!");
            }
        }
    },
    negative_coins: function () {
        console.log("In function negative_coins(): ");
        const users = require("./players.json");
        var ans = Object.values(users);
        var result = ans.map(({ coins }) => coins);
       
        for (var i = 0; i < ans.length; i++) {
            if (result[i] < 0) {
               console.log();
               console.log("NEGATIVE VALUE:");
               console.log(result[i]);
               console.log();
               console.log("BEGIN NEGATIVE");
               console.log(ans[i])
               console.log("END NEGATIVE");
               console.log();
            }
        }
    },
    change_negative_coins: function (n) {
        console.log("In function change_negative_coins(): ");
        console.log();
        const users = require("./players.json");
        var ans = Object.values(users);
        var result = ans.map(({ coins }) => coins);
       
        for (var i = 0; i < ans.length; i++) {
            if (result[i] < 0) {
               console.log();
               console.log("BEGIN CHANGE!")
               console.log(result[i]);
               console.log(ans[i])
               result[i] = result[i] + n * 10;
               console.log("New change_negative_coins() result: ");
               console.log(result[i]); 
               console.log();
               ans[i].coins = result[i];
               console.log(ans[i]);
               console.log("END CHANGE!");
               console.log();
            }
        }
    }
}
console.log();
console.log();
console.log(players.fetch());
console.log();
console.log();
players.active();
console.log();
console.log();
players.banned();
console.log();
console.log();
players.negative_coins();
console.log();
console.log();
players.change_negative_coins(5);
console.log();
console.log();
console.log(players.updateRow(4, 'android', 'Thomas', 'thom', 'active', '1', '3700'));








