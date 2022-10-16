import React from "react";
import { SorterButton, SorterContainer, SorterTitle } from "./sorter.styled";

const Sorter = ({setResult, setPageNumber}) => {
    let allowedFields = ["Id", "Name"];
    return (
        <>
            <SorterTitle>Order By</SorterTitle>
            <SorterContainer>            
                    {allowedFields.map((item, index) => {
                        return (
                            <SorterButton name='orderBy{' id={`orderBy-${item}`} key={`${index}-${item}`} onClick={() => {
                                    setResult(item); 
                                    setPageNumber(1);
                                }}>{item}
                            </SorterButton>
                        );
                    })}
            </SorterContainer>
        </>
    );
};

export default Sorter;
