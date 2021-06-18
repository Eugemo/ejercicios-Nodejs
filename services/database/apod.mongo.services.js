const mongoose = require ('mongoose');
const apod = require ('../../config/schema/apod.schema');

async function saveApod(){
    const apodToday = new apod({title: 'my apod'});
    await apodToday.save((err, apodToday) => {
        if (err) return console.log(err);
        console.log('new element added to the BD', apodToday);
    });
    return {status: 'ok'};
}

module.exports = {saveApod};
