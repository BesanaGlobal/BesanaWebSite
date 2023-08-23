import React from 'react';

import {
    Container,
    ProductKind,
    Row,
    HeartIcon,
    ShareIcon,
    CartIcon,

    PriceCard,
    PriceRow,

    MethodCard,
    PaymentIcon,

    Actions,
    Button,

} from './styles';



const ProductAction = ({ product }) => {
    const handleClick = () => {
        var cardItemList = JSON.parse(localStorage.getItem('cardItemList'));
        cardItemList = cardItemList ?? []
        cardItemList.push(product)
        var x = window.open("", "myWindow", "width=200,height=100");
        x.localStorage.setItem('cardItemList', JSON.stringify(cardItemList))
        x.close();



    }
    return (
        <Container>
            <ProductKind>Categoria</ProductKind>

            <Row>
                <h1>{product?.name}</h1>
                <div>
                    <HeartIcon title="Salvar como favorito" />
                    <ShareIcon title="Compartilhar" />
                    <CartIcon title="Adicionar ao carrinho" />
                </div>
            </Row>

            <PriceCard>
                <PriceRow>
                    <span className="symbol">$</span>
                    <span className="fraction">{product?.price}</span>
                </PriceRow>


            </PriceCard>

            <MethodCard>
                <div id="payment-title">
                    <PaymentIcon />
                    <span>Formas de pago</span>
                </div>
                <span className="details">Formas de pago</span>
                <div id="payment-icons-div">
                    <img className="payment-icon" src="https://img.icons8.com/fluency/48/000000/mastercard.png" />
                    <img className="payment-icon" src="https://img.icons8.com/color/48/000000/visa.png" />
                </div>
            </MethodCard>

            <Actions>
                <Button solid onClick={handleClick}>Comprar Ahora</Button>
                <Button>Adicionar al carrito</Button>
            </Actions>
        </Container>
    )
}

export default ProductAction;