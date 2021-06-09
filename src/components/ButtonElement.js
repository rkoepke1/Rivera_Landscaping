import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)
`   
    background: ${({primary}) => (primary ? '#013220' : '#013220')
    };
    padding: ${({big}) => (big ? '20px 30px' : '12px 30px')
    };
    color: ${({dark}) => (dark ? '#fff' : '#fff')
    };
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')
    };
    font-weight: 900;
    display: flex;
    border-radius: 80px;
    white-space: nowrap;
    outline: none;
    border: 50px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')
        };
        color: ${({dark}) => (dark ? '#000' : '#fff')
        };
    }
`