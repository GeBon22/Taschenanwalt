import { useContext} from "react";
import AppContext from "./AppContext";
import styled from "styled-components";

export default function LawyerList(){
    const context = useContext(AppContext);
    return (
<>
        {context.center &&   
                context.lawyers.length > 0 &&
                    context.lawyers.map(lawyer => (
                    <StyledUL key={lawyer.id}>
                        <li>
                            {lawyer.name} <br/>
                            Rating: {lawyer.rating}/5 <br/>
                            Anzahl der Bewertungen: {lawyer.user_ratings_total}<br/>
                            Kontakt: {lawyer.vicinity} <br/>
                            {/* Tel:
                            <a href={`tel:${lawyer.formatted_phone_number}`}>
                            {lawyer.formatted_phone_number}
                            </a> */}
                        </li>
                    </StyledUL>
                    ))}

    </>
    )
}



const StyledUL = styled.ul`
text-decoration: none;
list-style: none;
position: relative;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
text-align: center;
border: 1px solid black;
border-radius: 10px;
padding: 1rem;
margin: 1rem;
font-weight: 700;
`;