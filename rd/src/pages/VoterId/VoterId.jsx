import React from "react";
import "./VoterId.css";
import VoterIdForm from "../../forms/VoterIdForm";

const VoterId = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Voter ID Registration New/Update Inquiry</h1>
        <p>Fill the form to create or update your Voter ID.</p>
        <p>The Indian Voter ID card, officially called the Elector’s Photo Identity Card (EPIC), is issued by the Election Commission of India to citizens who are 18 years or older and eligible to vote. It serves primarily as a document to prove your identity at polling booths during municipal, state, and national elections. Besides elections, the Voter ID is widely accepted as proof of identity, age, and address for many services, including getting SIM cards or applying for some other government documents.</p>
        <p>To obtain a Voter ID, an eligible citizen usually fills Form‑6 (now often online via NVSP or state portals) and provides proof of age, nationality, and residence such as Aadhaar, PAN, passport, or educational certificates. The card is generally issued after verification of the documents and residence by electoral officials, and your name is then added to the electoral roll of your constituency. People with certain legal disqualifications, like those of “unsound mind” declared by a court or those convicted of specified election‑related offenses, may be barred from voting.</p>
        <p>The Voter ID can also function as a limited travel document for Indian citizens travelling to Nepal and Bhutan by land or air under existing bilateral arrangements. Keeping voter details updated (address changes, name corrections, etc.) is important so that you vote in the correct constituency and your ID matches other documents. Modern voter services also provide digital versions or search tools to verify your name on the electoral roll online, which helps avoid last‑minute problems on polling day.</p>

        <h3>Fill The Given Form For More Details</h3>
        <h4> We Will Contact You Soon...</h4>
      </div>

      <VoterIdForm />
    </div>
  );
};

export default VoterId;
