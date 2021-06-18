import axios from 'axios';

export default class productService {

    constructor(){}

    async getAllProducts(){
        try{
            const productList = await axios.get('http://localhost:8000/api/allProducts')
            console.log(productList.data)
            return productList.data.product;

        }catch(err){
            return err;
        }
    }

}