// const AWS = require('aws-sdk');

async function* imageProcessingGenerator(records) {
    console.log('Inside async generator...');
    let i = 0;

    while (i < records.length) {
        let bucket = records[i].s3.bucket.name;
        let filename = records[i].s3.object.key;
        yield {
            bucket,
            filename
        };
        i++;
    }
}

exports.handler = async (event) => {
    console.log('handler function...');
    for await (let item of imageProcessingGenerator(event.Records)) {
        console.log(item);
    }
}