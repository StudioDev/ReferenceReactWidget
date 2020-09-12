import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { CSS_CONST } from '../Shared/constants';

const fadeInAnimation = keyframes`
 0% { opacity: 0}
 100% { opacity: 1; }
`


export const EntryWrapper = styled.div`

 animation-name: ${fadeInAnimation};
 animation-duration: 2s;

`;

export const ListView = styled.div`


`;

export const InputButton = styled.div`


`;

export const DeleteButton = styled.div`


`;

