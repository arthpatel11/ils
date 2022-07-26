import React from "react";

const AccordionItem = ({
   showDescription,
   ariaExpanded,
   fontWeightBold,
   item,
   index,
   onClick,
}) => (
   <div className="custacc list-unstyled" key={item.question}>
      <li>
         <a
            aria-expanded={ariaExpanded}
            aria-controls={`faq${index + 1}_desc`}
            data-qa="faq__question-button"
            className={`faq__question-button ${fontWeightBold}`}
            onClick={() => onClick()}
         >
            {item.question}
         </a>
         <div className="inner">
         <p
            id={`faq${index + 1}_desc`}
            data-qa="faq__desc"
            className={`faq__desc ${showDescription}`}
         >
            {item.answer}
         </p>
      </div>
      </li>
      
   </div>
);

export default AccordionItem;