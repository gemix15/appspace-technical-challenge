import FilterButton from "../button/filterButton";
import React, { useState } from "react";
import { AccordionBody, AccordionButton, AccordionItem } from "./category.styled";

const Category = ({ title, categories, setCategory, setPageNumber }) => {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <AccordionItem>
                <AccordionButton onClick={handleClick}>{title}</AccordionButton>
                <AccordionBody open={open}>{categories.map((items, index) => {
                    return (
                        <FilterButton name={title.toLowerCase()} index={index} key={index} setPageNumber={setPageNumber} 
                                    task={setCategory} input={items}></FilterButton>
                    );
                })}</AccordionBody>
        </AccordionItem>
    );
};

Category.defaultProps = {
    title    : "title",
};

export default Category;
