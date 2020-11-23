# Blanja-RESTfullAPI 
berisi API sederhana untuk backend saja dibangun dengan node js menggunakan framework express js dan postman untuk testing.


## dibangun dengan 
* express js = 4.17.1
* mysql = 2.18.1

* npm
    [Node.js](https://nodejs.org/en/download/)

* express js
```sh
npm i express
```

* mysql
```sh 
npm i mysql
```



### Endpoint
1.GET
* localhost:1000/products
* localhost:1000/category
* localhost:1000/product/id
* localhost:1000/history
* localhost:1000/products/new
* localhost:1000/products/popular

2.POST 
* [localhost:1000/products](https://www.getpostman.com/collections/5d47c117b741843dfd37)
* {"product_color": "", "product_price": "", "product_description": "", "category_id": "", "product_rating": "", "product_color": "", "product_size": "", "product_total": "", "product_condition": ""}

* [localhost:1000/history](https://www.getpostman.com/collections/3d6fb70f4ad1be3a2ebf)
* {"name": "", "description": "", "price": "", "id": "", "size": "" , "total": "", "condition": ""}

3.PATCH
* [localhost:1000/product](https://www.getpostman.com/collections/50c2c59de487d1155eff)
* {"id": "", "product_color": "",}

4.DELETE
* [localhost:1000/products/delete/id](https://www.getpostman.com/collections/43939cb2ba8ec0b2f61e)

