import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  const accordionData = [
    {
        question: "WHERE DO YOU OPERATE? WHAT AREAS DO YOU SERVE?",
        answer: "We primarily operate in and service Los Angeles, California. However, we do also service many of the surrounding areas."
    },
    {
        question: "WHEN ARE YOU OPEN? HOW DO YOUR BUSINESS HOURS WORK?",
        answer: "Essentially, our office is open from 8:00am-6pm, Monday thru Saturday. We also do have 24 hour emergency services available. As for scheduling, we typically have appointment times during the weekdays, but have some availability during evenings & weekends."
    },
    {
        question: "WHAT ARE YOUR PRICES?",
        answer: "Every project is different and we would need to setup a quote to give you an accurate price."
    },
    {
        question: "WHO DO YOU PROVIDE SERVICES TO?",
        answer: "We provide services to both residential and commercial clients. This includes homeowners, businesses, and property managers."
    },
    {
        question: "DO I PROVIDE NECESSARY MATERIALS FOR MY PROJECT?",
        answer: "In some cases we prefer that customers purchase some of the items needed for a job. Items such as light fixtures, faucets, toilets, shelves, ceiling fans, tile, laminate flooring, and others that are to our customer’s liking or preference. Construction items such as drywall, lumber, repair parts, etc. are better purchased by us, so that we get the correct items."
    },
    {
        question: "DO I NEED TO BE PRESENT AT THE TIME OF SERVICE?",
        answer: "It is not absolutely necessary, but we prefer to have someone at the home that is at least 18 years old. You may arrange for us to gain access to your property and to lock it after we leave. If you are out-of-state, we can provide pictures of the finished job that would be emailed along with the invoice. In all cases we treat your home with the utmost respect and care."
    },
    {
        question: "CAN I TRUST THE HANDYMAN IN MY HOME OR OFFICE?",
        answer: "All of our technicians go through a thorough screening process. Our technicians have a minimum of 10 years experience and their own hand-tools. We know that trust is a major factor when you have someone coming into your home or business, so we make certain all of our technicians are prompt, clean, and professional!"
    },
    {
        question: "DO YOU GUARANTEE YOUR SERVICES?",
        answer: "All of our services are backed by our 100% satisfaction guarantee. If you are not happy with any of our services, please notify us immediately. We will do our very best to correct or satisfy any issue."
    },

];
  const AccordionItem = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false);
    const contentRef = useRef(null);
  
    useEffect(() => {
      if (isActive) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.height = '0px';
      }
    }, [isActive]);
  
    return (
      <>
          <div className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <div><strong>{question}</strong></div>
              <div>{isActive ? '-' : '+'}</div>
            </div>
            <div 
              ref={contentRef}
              className={`accordion-content ${isActive ? 'expanded' : ''}`}
            >
              <div>{answer}</div>
            </div>
          </div>

      </>
    );
  }
    return (
      <h1>You’ve got questions, <br/> We’ve got answers!</h1>,
      <div className="accordion">
      {
        accordionData.map((item, index) => (
            <AccordionItem question={item.question} answer={item.answer}/>
        ))
      }
      </div>
  );
};

export default App;
