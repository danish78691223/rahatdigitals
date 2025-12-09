import React from "react";
import "./Passport.css";
import PassportForm from "../../forms/PassportForm";

const Passport = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Passport Apply Update/New Inquiry</h1>
        <p>Apply for a new passport or update/renew your existing passport.</p>
        <p>An Indian passport is an official travel document issued by the Government of India that certifies the identity and nationality of an Indian citizen for international travel. It is required for travel to most foreign countries and also acts as a very strong proof of identity, age, and address within India. The Ministry of External Affairs issues passports through the Passport Seva system in different types such as ordinary passports, official/service passports, and diplomatic passports depending on the holder’s status.</p>
        <p>You usually apply online through the Passport Seva portal, pay the required fee, schedule an appointment at a Passport Seva Kendra or Post Office PSK, and undergo police verification in most cases. The passport contains personal data like name, date of birth, photo, signature, passport number, date of issue/expiry, and details of the issuing authority. Keeping your passport safe is crucial, because loss or damage requires immediate reporting and reissue, and misuse by others can cause serious legal and immigration problems.</p>
        <p>Passports have a validity period (typically 10 years for adults and 5 years for children), and they must be renewed before expiry if you want to continue travelling abroad. Many countries also require that your passport be valid for at least six months beyond your travel date and that it has enough blank pages for visas and entry/exit stamps. For some nearby countries like Nepal and Bhutan, Indians may travel without a passport using other documents, but for most destinations an Indian passport is mandatory.</p>
        <h3>Fill The Given Form For More Details</h3>
        <h4> We Will Contact You Soon...</h4>
      </div>

      <PassportForm />
    </div>
  );
};

export default Passport;
