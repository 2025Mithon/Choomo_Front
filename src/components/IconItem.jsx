import styled from '@emotion/styled';
import icon1_white from '../assets/icon1-white.png';
import icon2_white from '../assets/icon2-white.png';
import icon3_white from '../assets/icon3-white.png';
import icon4_white from '../assets/icon4-white.png';
import icon1_black from '../assets/icon1-black.png';
import icon2_black from '../assets/icon2-black.png';
import icon3_black from '../assets/icon3-black.png';
import icon4_black from '../assets/icon4-black.png';

const iconImageMap = {
    'icon1': {
        'white': icon1_white,
        'black': icon1_black,
    },
    'icon2': {
        'white': icon2_white,
        'black': icon2_black,
    },
    'icon3': {
        'white': icon3_white,
        'black': icon3_black,
    },
    'icon4': {
        'white': icon4_white,
        'black': icon4_black,
    },
};

const StyledImage = styled.img`
    width: 32px;
    cursor: pointer;
    position: relative;
`;

export default function IconItem({ iconName, selected }) { // Removed default color prop
    const effectiveColor = selected ? 'white' : 'black'; // Use black if selected, white otherwise

    const imageSrc = iconImageMap[iconName]?.[effectiveColor];

    if (!imageSrc) {
        console.warn(`Icon not found for name: ${iconName}, color: ${effectiveColor}`);
        return null;
    }

    return (
        <StyledImage src={imageSrc} alt={`${iconName} ${effectiveColor}`} />
    );
}