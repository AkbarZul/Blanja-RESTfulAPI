# Blanja-RESTfullAPI 
berisi API sederhana untuk backend saja dibangun dengan node js menggunakan framework express js dan postman untuk testing.


## dibangun dengan 
* npm
    [Node.js](https://nodejs.org/en/download/)
* express js = 4.17.1
```sh
npm i express
```

* mysql = 2.18.1
```sh 
npm i mysql
```



### Endpoint
1.GET
* /products
* /category
* /product/id
* /history
* /products/new
* /products/popular

2.POST 
* /products
* body
```sh 
{"product_color": "", 
"product_price": "", 
"product_description": "", 
"category_id": "", 
"product_rating": "", 
"product_color": "", 
"product_size": "", 
"product_total": "", 
"product_condition": ""}
```

* /history
* body
```sh 
{"name": "", 
"description": "", 
"price": "", 
"id": "", 
"size": "" , 
"total": "", 
"condition": ""}
```

3.PATCH
* /product
* body
```sh 
{"id": "", 
"product_color": ""}
```

4.DELETE
* /products/delete/id

#### Documentasi postman
[click here](https://web.postman.co/collections/11874653-81339449-149c-47d0-bc13-9114ac3cdcb7?version=latest&workspace=a9e8c85d-3ab8-44c6-8a08-00d564783776)

