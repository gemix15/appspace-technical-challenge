import React from 'react';
import { SorterButton, SorterContainer, SorterItemContainer, SorterTitle } from './sorter.styled';

const Sorter = ({setResult, setPageNumber}) => {
    let allowedFields = ["Id", "Name"];
    return (
        <SorterContainer>            
            <SorterTitle>Order By</SorterTitle>
                {allowedFields.map((item, index) => {
                    return (
                        <SorterItemContainer>
                            <SorterButton name='orderBy{' id={`orderBy-${item}`} key={`${index}-${item}`} onClick={() => {
                                    setResult(item); 
                                    setPageNumber(1);
                                }}>{item}
                            </SorterButton>
                        </SorterItemContainer>
                    )
                })}
                
        </SorterContainer>
    );
}

export default Sorter;
