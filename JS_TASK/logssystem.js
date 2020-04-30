logssystem = {
    log: function (title = 'No title', data) {
        console.log('Logsystem >> ' + title, data);
    },
    warning: function (title = 'No title', data) {
        console.warn('Logsystem >> ' + title, data);
    },
    error: function (title = 'No title', data) {
        console.error('Logsystem >> ' + title, data);
    },
    getAvailableServers: function (title = 'No title', data) {
        console.log('Logsystem >> ' + title, data);
    },
    banned: function (title = 'No title', data) {
        console.log('Logsystem >> ' + title, data);
    },
    negative_coins: function (title = 'No title', data) {
        console.warn('Logsystem >> ' + title, data);
    },
    fetch: function (title = 'No title', data) {
        console.error('Logsystem >> ' + title, data);
    },
    change_negative_coins: function (title = 'No title', data) {
        console.log('Logsystem >> ' + title, data);
    },
    updateRow: function (title = 'No title', data) {
        console.log('Logsystem >> ' + title, data);
    },
    active: function (title = 'No title', data) {
        console.log('Logsystem >> ' + title, data);
    }
}

logssystem.error('hello', '1');
logssystem.getAvailableServers('production', '2');
logssystem.warning('', '3');
logssystem.log('', '4');
logssystem.banned('', '5');
logssystem.negative_coins('', '6');
logssystem.fetch('', '7');
logssystem.change_negative_coins('', '8');
logssystem.updateRow('', '9');
logssystem.active('', '10');




