var servers = {
    rows: {
        available: [],
        current: "production",
        rows: {
            production: {
                url: "/data/production/",
                name: "Production Server",
                status: "enabled"
            },
            staging: {
                url: "/data/staging/",
                name: "Staging Server",
                status: "enabled"
            },
            dev: {
                url: "/data/staging/",
                name: "Staging Server",
                status: "disabled"
            }
        },
        getRow: function (whereKey = '') {

        },
        updateRow: function (object) {

        },
        deleteRow: function (whereKey = '') {

        }
    },
    getAvailableServers: function () {
        var ans = Object.values(servers.rows.rows);
        var ans2 = Object.keys(servers.rows.rows);
        var result = ans.map(({ status }) => status);
       
        for (var i = 0; i < ans2.length; i++){
            if (result[i] === "enabled"){
                servers.rows.available.push(ans2[i]);
            }
        }
        console.log("Enabled servers in getAvailableServers(): ");
        var z = servers.rows.available;
        return z;   
    }
}

console.log(servers.getAvailableServers());

