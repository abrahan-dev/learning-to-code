const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const groupsTable = process.env.TABLE_GROUPS

exports.handler = async (event) => {
    const result = await docClient.scan({
        TableName: groupsTable,
        Limit: 20
    }).promise()

    return {
        statusCode: 200,
        headers: {
            'Acces-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            items: result.Items
        })
    }
}
