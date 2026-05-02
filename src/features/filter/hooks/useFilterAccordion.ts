import { useState } from "react";

const useFilterAccordion = () => {

    const filterOptions = [
        {
            item: 'LANEIGE',
            quantity: 7
        },
        {
            item: 'PERIPERA',
            quantity: 7
        },
        {
            item: 'CLUB CLIO',
            quantity: 7
        },
        {
            item: 'BBIA',
            quantity: 7
        },
        {
            item: 'CNP',
            quantity: 7
        },
        {
            item: 'MAC',
            quantity: 7
        },
        {
            item: 'SUGARPLUM',
            quantity: 7
        },
        {
            item: 'ESSANCE',
            quantity: 7
        },
        {
            item: 'CLUB CLIO',
            quantity: 7
        },
        {
            item: 'BBIA',
            quantity: 7
        },
        {
            item: 'CNP',
            quantity: 7
        },
        {
            item: 'MAC',
            quantity: 7
        },
        {
            item: 'SUGARPLUM',
            quantity: 7
        },
        {
            item: 'ESSANCE',
            quantity: 7
        },
        {
            item: 'CLUB CLIO',
            quantity: 7
        },
        {
            item: 'BBIA',
            quantity: 7
        },
        {
            item: 'CNP',
            quantity: 7
        },
        {
            item: 'MAC',
            quantity: 7
        },
        {
            item: 'SUGARPLUM',
            quantity: 7
        },
        {
            item: 'ESSANCE',
            quantity: 7
        },
        {
            item: 'CLUB CLIO',
            quantity: 7
        },
        {
            item: 'BBIA',
            quantity: 7
        },
        {
            item: 'CNP',
            quantity: 7
        },
        {
            item: 'MAC',
            quantity: 7
        },
        {
            item: 'SUGARPLUM',
            quantity: 7
        },
        {
            item: 'ESSANCE',
            quantity: 7
        },
    ];
    
    const [showMore, setShowMore] = useState(false);

    const [numberItems, setNumberItems] = useState(5);

    const visibleItems = filterOptions.slice(0, numberItems);

    const updateItem = () => {
        setShowMore(true);
        setNumberItems(prev => prev + 5);
    };

    return { filterOptions, showMore, numberItems, visibleItems, updateItem };
};

export default useFilterAccordion;