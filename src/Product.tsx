import {useEffect, useState} from "react";
import axios from "axios";
import rating from './assets/img/rating.svg'
import cartWhite from './assets/img/cartWhite.svg'

export const Product = () => {
    const [product, setProduct] = useState<any>(null)

    useEffect(() => {
        axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
            .then((res) => {
                setProduct(res.data[1])
            })
    }, [])

    return (
        <div>
            <div>позже</div>

            {
                product===null
                    ? <div className={'loading'}>Loading</div>
                    :  <div className={'product'}>
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
                            <button>
                                <img src={cartWhite}/>
                                Add to cart
                            </button>
                        </div>

                    </div>
            }


        </div>
    )
}