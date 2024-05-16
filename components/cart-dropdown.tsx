import React, {useState} from 'react';
import {Button} from '@nextui-org/react';
import {CartIcon} from "@/components/icons";


const CartDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <Button className="font-bold" onClick={toggleDropdown}>
                <CartIcon/>
            </Button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <div className="py-2">
                        <p className="text-center font-bold">Your Cart</p>
                        {/* Render cart items here */}
                        <p className="text-center">Cart is empty</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartDropdown;