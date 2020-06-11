
# Metric logging and reporting service

[![Netlify Status](https://api.netlify.com/api/v1/badges/319465ae-0562-4d93-af64-4f5b6fd0406d/deploy-status)](https://metric-testing-service.netlify.app/)

By clicking on the badge you can access the interface for testing.

1. You can access https://metric-service.herokuapp.com/metric/all, for all metrics. 
2. You can access https://metric-service.herokuapp.com/metric/{key}/sum, for the sum.

## Problem
Build a metric logging and reporting service that sums metrics by time window for the most recent hour. You will build a lightweight web server that implements the two main APIs defined below.
## APIs
### POST metric

    Request
    POST /metric/{key}
    {
    "value": 30
    }
    Response (200)
    {}

### GET metric sum
Returns the sum of all metrics reported for this key over the past hour.

    Request
    GET /metric/{key}/sum
    Response (200)
    {
    "value": 400
    }
    
 ## Screenshots of the API working
 `base_url = localhost:3333`
 
 POST base_url/metric/active_users (create a metric)
 ![ POST ](/assets/images/create_metric.png)
 
 GET base_url/metric/all (for testing the sum API)
 ![ GET ](/assets/images/list_all_metrics.png)
 
 GET base_url/metric/active_users/sum (sum all metric from last hour)
 ![ GET ](/assets/images/list_by_last_hour_metric_and_sum.png)
 
 ## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.

Installation:

`npm install`
or
`yarn`

To Start Server:

`npm dev:server`
or
`yarn dev:server`

To test the API, use postman or insomnia (./assets/api you can get the requests).
The server has a built-in SQLite server (it's a file that storages everything).
