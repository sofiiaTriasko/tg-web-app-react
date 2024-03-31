import React from 'react';
import Button from "../Button/Button";

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product)
    }
    return (
        <div>
        <div className={'img'} />
    <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
              <span>Вартість:<b>{product.price}</b></span>
            </div>
            <Button
                className={'add-bth'}
                onClick={onAddHandler}
            >Добавити в корзину:</Button>
        </div>
    );
};

export default ProductItem;
