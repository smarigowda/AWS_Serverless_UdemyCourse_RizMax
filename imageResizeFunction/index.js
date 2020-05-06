const AWS = require('aws-sdk');

const s3 = new AWS.S3();

async function* imageProcessingGenerator(records) {
    console.log('Inside async generator...');
    let i = 0;

    while (i < records.length) {
        let bucket = records[i].s3.bucket.name;
        let filename = records[i].s3.object.key;
        let params;

        params = {
            Bucket: bucket,
            Key: filename
        };

        let file = await s3.getObject(params).promise();
        console.log('file =', file);


        params = {
            Bucket: 'santosh-images-resized',
            Key: 'lambda-large-resized.jpg',
            Body: new Buffer.from(file.Body),
            ContentType: 'image/jpeg'
        };

        let result = await s3.putObject(params).promise();
        console.log('result', result);

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