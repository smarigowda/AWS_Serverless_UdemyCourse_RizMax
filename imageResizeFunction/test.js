let {
    handler
} = require('./index');

let records = [{
    "eventVersion": "2.0",
    "eventSource": "aws:s3",
    "awsRegion": "eu-west-2",
    "eventTime": "1970-01-01T00:00:00.000Z",
    "eventName": "ObjectCreated:Put",
    "userIdentity": {
        "principalId": "EXAMPLE"
    },
    "requestParameters": {
        "sourceIPAddress": "127.0.0.1"
    },
    "responseElements": {
        "x-amz-request-id": "EXAMPLE123456789",
        "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH"
    },
    "s3": {
        "s3SchemaVersion": "1.0",
        "configurationId": "testConfigRule",
        "bucket": {
            "name": "santosh-images",
            "ownerIdentity": {
                "principalId": "EXAMPLE"
            },
            "arn": "arn:aws:s3:::example-bucket"
        },
        "object": {
            "key": "lambda-large.jpg",
            "size": 1024,
            "eTag": "0123456789abcdef0123456789abcdef",
            "sequencer": "0A1B2C3D4E5F678901"
        }
    }
}];

let event = {
    Records: records
};

(async function () {
    console.log('[test.js]')
    await handler(event);
    return 'done';
})();