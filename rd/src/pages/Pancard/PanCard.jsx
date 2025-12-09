import React from "react";
import "./PanCard.css";
import PanCardForm from "../../forms/PanCardForm";

const PanCard = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>PAN Card Apply / Update Inquiry</h1>
        <p>Submit your details to apply or update your PAN Card.</p>
        <p>PAN (Permanent Account Number) is a 10‑character alphanumeric number issued by the Income Tax Department and printed on a PAN card with your name, father’s name, date of birth, photograph, and signature. It is primarily a tax identity for individuals and entities under the Income Tax Act, and is necessary for filing income tax returns and tracking financial transactions. Indians, NRIs, foreign nationals, firms, companies, and other entities that need to pay tax or do certain financial activities in India can apply for a PAN.</p>
        <p>PAN is mandatory for many high‑value or regulated financial operations such as opening certain types of bank accounts, large cash deposits, buying or selling property above specified limits, investing in mutual funds, and trading in securities. PAN helps the government prevent tax evasion by linking all major financial transactions of a person or entity to one unique number. Because of this tracking role, you should never share your PAN details casually and should report misuse if the card is lost or stolen.</p>
        <p>Having more than one PAN for the same person or entity is illegal, and penalties can apply if multiple PANs are held or used. PAN details (like name or date of birth) can be corrected through NSDL/Protean or UTIITSL portals, and an e‑PAN in digital form is legally valid and often issued quickly. Linking PAN with Aadhaar has been made compulsory for most resident taxpayers, and failure to link by deadlines can lead to penalties or inoperative PAN status.</p>
        <h3>Fill The Given Form For More Details</h3>
        <h4> We Will Contact You Soon...</h4>
      </div>

      <PanCardForm />
    </div>
  );
};

export default PanCard;
