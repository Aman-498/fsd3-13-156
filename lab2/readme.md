# FS (File System) Node JS's Module
it direct connect with client OS rather than browser
## Major tasks of FS Module
- Reading and Writing files
 - readFile()
 - writeFile()
 - appendFile()
- Directory Management
 - mkdir()
 - rmdir() - depricated
 - readdir()
- Metadata/Information
 - stat()
 - lstat()
 - fstat()
- watching for Changes
 - watch()
 - watchFile()
 - unwatchFile()
- Streaming Large File
 - createReadStream()
 - CreateWriteStream()
- File Operations
 - rename () 
 - truncate()
 - unlink()
 - link()
 - syslink()

 ## crud operation

 Create/Insert, Read/Retreive, Update, Delete
 each item(id,name,prize,qty)

 ## Item
 id,name,price,qty

 ## operations
 1. add to cart
 2. show cart
 3. remove item from cart
 4. update quantity from cart
 5. checkout
 NOTE:all items will be stored in hdd, so after termination of program we can retreive cart details

 ## Required files
 1. crud.js - it contains all the methods and entry point
 2. products.json - it contains the product details in array form



