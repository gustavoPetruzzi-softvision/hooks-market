
import styled from 'styled-components';

const Button = styled.button`
    background: white;
    color: ${props => props.danger ? "red" : "#36a8dd"};
    padding: 5px;
    border: 2px solid;
    border-color: ${props => props.danger ? "red" : "#36a8dd"};
    width: ${props => props.width || ''}
`

export default Button;