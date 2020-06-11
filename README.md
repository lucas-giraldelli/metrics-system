
# Metric logging and reporting service

## Problem
Build a metric logging and reporting service that sums metrics by time window for the most
recent hour. You will build a lightweight web server that implements the two main APIs defined
below.
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

    Returns the sum of all metrics reported for this key over the past hour
    Request
    GET /metric/{key}/sum
    Response (200)
    {
    "value": 400
    }
