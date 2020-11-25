<template>
<div>
    <b-container fluid class="bv-example-row mt-4">
        <b-row>
            <b-col cols="3" v-for="(product, index) in products" :key="index">
                <b-card
                    :title=product.name
                    :img-src="require('@/assets/products/product'+(index+1)+'.jpg')"
                    img-alt="product"
                    img-top
                    tar="article"
                    class="mb-4"
                >
                    <b-card-text>
                        <h5> Price: ${{product.price}}.00 </h5>
                        <h6 class="text-muted"> Category </h6>
                    </b-card-text>

                    <b-button v-if="!product.cart" :disabled="product.cart" @click="product.cart=true,addtocart(JSON.parse(JSON.stringify(product)))" block href="#" variant="success"> Add to Cart </b-button>
                    <b-button v-if="product.cart" :disabled="product.cart" block href="#" variant="warning"> Already added to Cart </b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    data(){
        return {
            products: [
                {
                    id: 1,
                    quantity:1,
                    name: 'Jeans',
                    price: 1,
                    img: '@/assets/products/product1.jpg',
                    cart: false
                },
                {
                    id: 2,
                    quantity:2,
                    name: 'Sweater',
                    price: 2,
                    img: '@/assets/products/product2.jpg',
                    cart: false    
                },
                {
                    id: 3,
                    quantity:3,
                    name: 'Hat',
                    price: 3,
                    img: '@/assets/products/product3.jpg',
                    cart: false    
                },
                {
                    id: 4,
                    quantity:4,
                    name: 'Blouse',
                    price: 4,
                    img: '@/assets/products/product4.jpg',
                    cart: false    
                },
                {
                    id: 5,
                    quantity:5,
                    name: 'Gray Jean',
                    price: 5,
                    img: '@/assets/products/product5.jpg',
                    cart: false    
                },
                {
                    id: 6,
                    quantity:6,
                    name: 'Shoes',
                    price: 6,
                    img: '@/assets/products/product6.jpg',
                    cart: false    
                },
            ]
        }
    },
    methods: {
        addtocart(product){
            let cart = []
            if(JSON.parse(localStorage.getItem('products'))) {
                cart = JSON.parse(localStorage.getItem('products'))
            }else{
                cart = []
            }
            cart.push(product);
            localStorage.setItem('products', JSON.stringify(cart))
        }
    },
    created(){
        let cart = []
        if( JSON.parse(localStorage.getItem('products')) ) {
            cart = JSON.parse(localStorage.getItem('products'))
        }else{
            cart = []
        }
        for (let index = 0; index < cart.length; index++) {
            for (let indexk = 0; indexk < this.products.length; indexk++) {
                if( cart[index].id == this.products[indexk].id ){
                    this.products[indexk].cart = true
                }   
            }
        }
    }
}
</script>