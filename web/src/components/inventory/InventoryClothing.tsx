import React from 'react';

import { FaShirt, FaMaskFace, FaVest, FaGlasses } from 'react-icons/fa6';
import { PiPants } from 'react-icons/pi';
import { FaHatCowboy } from 'react-icons/fa';
import { GiConverseShoe, GiGymBag } from 'react-icons/gi';
import { BsWatch } from 'react-icons/bs';
import { onClothing } from '../../dnd/onClothing';

import { fetchNui } from '../../utils/fetchNui';
import { Locale } from '../../store/locale';

const InventoryClothing: React.FC = () => {
    const handleClothingClick = (type: string) => {
        onClothing(type);
    };
    return (
        <>
            <div className="wrapper-clothing">
                <div className="container-clothing">
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('shirt')}>
                        <FaShirt size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('hat')}>
                        <FaHatCowboy size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('mask')}>
                        <FaMaskFace size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('vest')}>
                        <FaVest size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('glasses')}>
                        <FaGlasses size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('watch')}>
                        <BsWatch size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('bag')}>
                        <GiGymBag size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('pants')}>
                        <PiPants size="2em" />
                    </button>
                    <button className="labelWrapper-clothing-button" onClick={() => handleClothingClick('shoes')}>
                        <GiConverseShoe size="2em" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default InventoryClothing;