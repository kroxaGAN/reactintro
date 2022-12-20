import {useEffect, useState} from "react";
import axios from "axios";
import rating from './assets/img/rating.svg'
import cartWhite from './assets/img/cartWhite.svg'
import {Link, useParams} from "react-router-dom";
import arrowBack from './assets/img/arrowBack.svg'
import {Reviews} from "./Reviews";

export const Product = () => {
    const [product, setProduct] = useState<any>(null)
    let params = useParams()
    const [isProductInCart, setIsProductInCart]=useState<boolean>(false)

    useEffect(() => {
        axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products/' + params.productId)
            .then((res) => {
                setProduct(res.data)
            })
    }, [])
    const addToCartHandler=()=>{
        alert('Product add to cart')
        setIsProductInCart(true)
    }

    return (
        <div>
            <div className={'arrowBack'}>
                <Link to={'/'}>
                    <img src={arrowBack}/>
                    Back to Best seller
                </Link>
            </div>
            {
                product === null
                    ? <div className={'loading'}>Loading</div>
                    : <div className={'product'}>
                        <img src={product.image}/>
                        <div className={'info'}>
                            <p className={'title'}>{product.title}</p>
                            <p className={'price'}>{product.price}</p>
                            <div className={'rating'}>
                                <p>Rating:{product.rating.rate}</p>
                                <img src={rating}/>
                            </div>
                            <div className={'category'}>
                                <span>Category: </span>
                                <p> {product.category}</p>
                            </div>
                            <p className={'description'}>{product.description}</p>
                            <button onClick={addToCartHandler}>
                                <img src={cartWhite}/>
                                {isProductInCart
                                ?'Go to cart'
                                :'Add to cart'
                                }

                            </button>
                        </div>

                    </div>
            }
            <Reviews/>


        </div>
    )
}