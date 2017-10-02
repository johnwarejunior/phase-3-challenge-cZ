## Part 1: Simple web app

Build a very basic web API which conforms to the routes listed below.

Use Express. You don't need to use an HTML templater like EJS or Pug. (You can use `curl` or `Postman` to check whether the routes work)

The web server should provide the following routes:

```
GET /api/shout/:word
POST /api/array/merge
```

#### Route 1: GET /api/shout/:word
Shout the word back! Return the value of the URL parameter `:word` converted to ALL CAPS and with three exclamation points added to the end.

Example requests:
```
request: GET /api/shout/popcorn
response: POPCORN!!!
status: 200

request: GET /api/shout/friday
response: FRIDAY!!!
status: 200
```

#### Route 2: POST /api/array/merge
When given a request with a JSON body containing two arrays (at keys "a" and "b"), it will respond with JSON containing two arrays merged together at the key "result". By merging array "b" into array "a", the new array will have all the elements from each, but alternating between them. For example:

```javascript
merge([1,2,3], [10,11,12]) => [1,10,2,11,3,12]
```

Example requests:
```
request: POST /api/array/merge
request body: {"a": ["one","two"],
               "b": ["three","four"]}
request content type: application/json
response status code: 200
response: {"result": ["one","three","two","four"]}
response content type: application/json

request: POST /api/array/merge
request body: {"a": [10,100],
               "b": [50,500]}
request content type: application/json
response status code: 200
response: {"result": [10,50,100,500]}
response content type: application/json

request: POST /api/array/merge
request body: {"a": "abcd",
               "b": [5,6]}
request content type: application/json
response status code: 400
response: {"error": "Both keys in request body must be of type Array."}
response content type: application/json
```

### Requirements

- [ ] __10:__ All files are stored under the `part-1/` folder
- [ ] __10:__ All dependencies are specified in a `package.json` file
- [ ] __10:__ Web server can be started with `npm start` command
- [ ] __20:__ GET requests to the `/api/shout/:word` route responds with  content type `text/plain`, as described in the example above
- [ ] __80:__ POST requests to the `/api/array/merge` merge the two arrays provided in the request body and responds with the result. An invalid input should return a 400 response.
