import { Container } from "./styles";  // Corrigido o erro de digitação
import { useEffect } from "react";
import { useAuth } from "../../hook/AuthHook";
import { useNavigate } from "react-router-dom";
import { useNavHook } from "../../hook/navHook";
import { useCartHook } from "../../hook/cartHook";
import { CartItem } from "../CartItem";
import { Button } from "../Button";

export function CartMenu({ menuIsVisible }) {

    const { user, signOut } = useAuth();
    const { setIsVisible, cartSetIsVisible } = useNavHook();
    const { cart, request } = useCartHook();

    const navigate = useNavigate();

    function handleCheckout() {
        navigate("/checkout");
        cartSetIsVisible(false);
    }

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container $isvisible={menuIsVisible}>
            <div>
                {cart.length ? cart.map((e, index) => (
                    <CartItem 
                        key={index} 
                        title={e.title} 
                        image={e.image} 
                        price={e.price}
                        index={index}
                    />
                )) : (
                    <span>Adicione pedidos ao seu carrinho</span>
                )}
            </div>
            <Button type="button" disabled={!cart.length} onClick={handleCheckout}>
                Finalizar Pedido
            </Button>
        </Container>
    );
}
