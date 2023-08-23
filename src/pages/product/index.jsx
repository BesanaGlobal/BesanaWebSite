import { Navigation } from '../../components/navigation'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHook from './hook'
import {
    Container,
    Row,
    Panel,
    Column,
    Gallery,
    Wrapper,
    Description,
} from "./style.js";


import ProductAction from "../../components/1.molecules/ProductAction";


const Product = () => {
    let { id } = useParams();
    const { product } = useHook(id)
    const [productItem, setState] = useState({});
    useEffect(() => {
        setState(product.find(x => x.id == id))
    }, [product])
    return (
        <>
            <Navigation />
            <Wrapper>
                <Container>
                    <Panel>
                        <Column>
                            <Gallery>
                                <img src={productItem?.img} />
                            </Gallery>
                            <Info product={productItem} />
                        </Column>

                        <Column>
                            <ProductAction product={productItem} />
                        </Column>
                    </Panel>
                </Container>
            </Wrapper></>
    );
}




function Info({ product }) {
    return (
        <Description>
            <h2>Descripcion</h2>
            <p>
                {product?.description}
            </p>
            <br />
            <br />
            <p>
                more...
            </p>
        </Description>
    );
}

export default Product;

