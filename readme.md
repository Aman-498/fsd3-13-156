localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server

every request from the client has a pair of {request,response}

npm - node package manager
used to install, run, uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm, the project must be npm project,
to create npm project we can use
- npm init -y
- it creates a package.json file automatically
package.json holda all the information realted to install
package for npm
- update package.json,set type = 'module'
- it also creates a folder node_modules automatically
- node_modules holds the package/Library files
- generally we ignore the node_modules by .gitignore


Nodemon - it restart the server automatically when file changes,to install

> npm i nodemon -D

Note: -D flag will install this package as developer dependency

- to execute any program, update the package.json file then start the server as
  <b>npm run dev</b>

- start -> it will execute the app on deployment   
- dev -> it will start server in development phase (only for developer)
- res: it will return contents (json/html/plain)to the user/client
- req : it will retrive the information from the client to the server
- server send also statusCodes to the client, that indicates the error/success messages
## Status Codes
- 200 -> Ok
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> forbidden
- 404 -> Not found
- 500 -> Internal Server Error

## Content Type

- text/plain
- text/html
- application/json
- text/css

the content type Aand status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode

## response as HTML content
1. res.end
- end(any HTML content/key)
2. html file
- read by createReadStream
- pipe with res 

## send html file to client
1. html file
- read html file using createReadStream
- pipe it with res object
2. html content
- send any html tags/content by using res.end('<any html tag>')

## JSON (java script oriented notation)
- server return data only not html content bcz html contents will be return by frontend developer.
The data is in JSON format.
- JSON always store data in key, value pair enclosedd by {}.
- Array can be stored by [].
- one pair of curly bracket will represent one object and its properrty will be separated by ','.
  ex-
   ```
  {
    id:1,
    name:'mobile',
    price:25000,
    rating:4.5,
    review:200
  }
  ```
  