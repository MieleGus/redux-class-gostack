import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { AddProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
    product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
    const dispatch = useDispatch()

    const handleAppProductToCart = useCallback(() => {
        dispatch(AddProductToCart(product));
    }, [dispatch, product])
    
    return (
        <article>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span>{" "}

            <button 
                type="button"
                onClick={handleAppProductToCart}
            >
                Comprar
            </button>
        </article>
    )
}

export default CatalogItem;