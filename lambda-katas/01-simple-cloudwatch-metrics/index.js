const AWS = require('aws-sdk')
const axios = require('axios')
const cloudwatch = new AWS.CloudWatch();

exports.handler = async (event) => {
    let startTime
    let endTime
    let requestWasSuccessful

    try {
        startTime = timeInMs()
        await axios.get(process.env.URL)
        requestWasSuccessful = true
    } catch (e) {
        requestWasSuccessful = false
    } finally {
        endTime = timeInMs()
    }

    await cloudwatch.putMetricData({
        MetricData: [
            {
                MetricName: 'Latency',
                Dimensions: [
                    {
                        Name: 'ServiceName',
                        Value: process.env.SERVICE_NAME
                    }
                ],
                Unit: 'Milliseconds',
                Value: endTime - startTime
            }
        ],
        Namespace: 'MyFunctions/Serveless'
    }).promise()

    await cloudwatch.putMetricData({
        MetricData: [
            {
                MetricName: 'Successful',
                Dimensions: [
                    {
                        Name: 'ServiceName',
                        Value: process.env.SERVICE_NAME
                    }
                ],
                Unit: 'Count',
                Value: requestWasSuccessful ? 1 : 0
            }
        ],
        Namespace: 'MyFunctions/Serveless'
    }).promise()
}

function timeInMs() {
    return new Date().getTime()
}
