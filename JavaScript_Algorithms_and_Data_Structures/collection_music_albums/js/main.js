// Налаштування
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Змініть код лише під цим рядком
function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    } else if (prop === 'tracks' && value !== '') {
        if (!records[id][prop]) {
            records[id][prop] = [];
            records[id][prop].push(value);
        } else {
            records[id][prop].push(value);
        }
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));