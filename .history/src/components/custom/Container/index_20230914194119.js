import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;

@media screen and (max-width: 600px){
    flex-direction: column;
}
`;
