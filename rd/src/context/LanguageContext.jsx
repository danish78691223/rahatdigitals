import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  hi: {
    "Home":"होम","Services":"सेवाएँ","Shop":"दुकान","About":"हमारे बारे में","Contact":"संपर्क करें",
    "Welcome to Rahat Digital's":"राहत डिजिटल्स में आपका स्वागत है",
    "Your trusted CSC Service Center for PAN Card, Passport, Voter ID, Job Applications and more.":"PAN कार्ड, पासपोर्ट, वोटर ID, नौकरी के आवेदन और अन्य सेवाओं के लिए आपका विश्वसनीय CSC सेवा केंद्र।",
    "Explore Services":"सेवाएँ देखें","Our Main Services":"हमारी प्रमुख सेवाएँ",
    "PAN Card Apply / Update":"PAN कार्ड आवेदन / अपडेट","Apply or update your PAN Card quickly.":"अपने PAN कार्ड के लिए जल्दी आवेदन करें या विवरण अपडेट करें।",
    "Passport Services":"पासपोर्ट सेवाएँ","Passport forms, updates and applications.":"पासपोर्ट फॉर्म, अपडेट और आवेदन।",
    "Voter ID Registration":"वोटर ID पंजीकरण","Create or update your Voter ID easily.":"अपना वोटर ID आसानी से बनवाएँ या अपडेट करें।",
    "Job Application Forms":"नौकरी आवेदन फॉर्म","Government and private job form filling.":"सरकारी और निजी नौकरी के फॉर्म भरने में सहायता।",
    "Our Services":"हमारी सेवाएँ","Trusted CSC & Digital Seva solutions — fast, secure and reliable.":"विश्वसनीय CSC और डिजिटल सेवा समाधान — तेज़, सुरक्षित और भरोसेमंद।",
    "Apply for new PAN or update existing details.":"नए PAN के लिए आवेदन करें या मौजूदा विवरण अपडेट करें।",
    "New passport, renewal & correction assistance.":"नया पासपोर्ट, नवीनीकरण और सुधार सहायता।",
    "New Voter ID registration or updates.":"नया वोटर ID पंजीकरण या अपडेट।",
    "Government & private job form support.":"सरकारी और निजी नौकरी के फॉर्म में सहायता।",
    "Aadhaar Services":"आधार सेवाएँ","Aadhaar update, correction & download help.":"आधार अपडेट, सुधार और डाउनलोड सहायता।",
    "Govt Certificates":"सरकारी प्रमाणपत्र","Income, Caste, Domicile & other certificates.":"आय, जाति, निवास और अन्य प्रमाणपत्र।",
    "Explore Service →":"सेवा देखें →","About Rahat Digital's":"राहत डिजिटल्स के बारे में",
    "Your Trusted CSC & Digital Service Center":"आपका विश्वसनीय CSC और डिजिटल सेवा केंद्र",
    "Who We Are":"हम कौन हैं","Our Mission":"हमारा मिशन","Our Vision":"हमारा विज़न","Why Choose Rahat Digital's?":"राहत डिजिटल्स क्यों चुनें?",
    "Fast Service":"तेज़ सेवा","Safe & Secure":"सुरक्षित और भरोसेमंद","All Services at One Place":"सभी सेवाएँ एक ही जगह","Trusted Support":"विश्वसनीय सहायता",
    "Quick processing and instant updates without delays.":"बिना अनावश्यक देरी के तेज़ प्रक्रिया और अपडेट।",
    "Your data is handled with full privacy and security.":"आपके डेटा को गोपनीयता और सुरक्षा के साथ संभाला जाता है।",
    "PAN, Passport, Voter ID, Applications & more.":"PAN, पासपोर्ट, वोटर ID, आवेदन और अन्य सेवाएँ।",
    "We believe in transparency and customer satisfaction.":"हम पारदर्शिता और ग्राहक संतुष्टि में विश्वास रखते हैं।",
    "Contact Us":"संपर्क करें","We are here to help you with all digital services":"हम सभी डिजिटल सेवाओं में आपकी सहायता के लिए यहाँ हैं",
    "Get in Touch":"हमसे संपर्क करें","Have questions or need help with a digital service? Feel free to contact us anytime.":"क्या आपका कोई सवाल है या डिजिटल सेवा में सहायता चाहिए? कभी भी हमसे संपर्क करें।",
    "Send Us a Message":"हमें संदेश भेजें","Name":"नाम","Email":"ईमेल","Phone":"फ़ोन","Your Message":"आपका संदेश",
    "Send Message":"संदेश भेजें","Sending...":"भेजा जा रहा है...","Message sent successfully!":"संदेश सफलतापूर्वक भेज दिया गया!","Failed to send message.":"संदेश भेजने में विफल।","Error sending message.":"संदेश भेजने में त्रुटि हुई।",
    "Rahat Digitals Shop":"राहत डिजिटल्स शॉप","Hand-picked Amazon products • Trusted deals • Best prices":"चुने हुए उत्पाद • भरोसेमंद ऑफ़र • बेहतर कीमतें",
    "ALL":"सभी","Electronics":"इलेक्ट्रॉनिक्स","Fashion":"फैशन","Home":"होम","Other":"अन्य","Buy on Amazon →":"Amazon पर खरीदें →",
    "No products are available right now. Please check back soon.":"अभी कोई उत्पाद उपलब्ध नहीं है। कृपया कुछ समय बाद फिर देखें।",
    "Admin Login":"एडमिन लॉगिन","Admin Email":"एडमिन ईमेल","Password":"पासवर्ड","Login":"लॉगिन","Logging in...":"लॉगिन हो रहा है...","Logout":"लॉगआउट",
    "Admin Panel":"एडमिन पैनल","PAN Card":"PAN कार्ड","Voter ID":"वोटर ID","Passport":"पासपोर्ट","Job Forms":"नौकरी फॉर्म","Contact Messages":"संपर्क संदेश","Add Products":"उत्पाद जोड़ें",
    "Submitted At":"जमा करने का समय","Data":"विवरण","Status":"स्थिति","Actions":"कार्रवाई","View":"देखें","Processed":"प्रक्रिया पूरी","Delete":"हटाएँ","Edit":"संपादित करें",
    "Add New Product":"नया उत्पाद जोड़ें","Product Title":"उत्पाद का नाम","Price (₹)":"कीमत (₹)","Image URL":"इमेज URL","Select Category":"श्रेणी चुनें","Amazon Link":"Amazon लिंक","Add Product":"उत्पाद जोड़ें",
    "Product List":"उत्पाद सूची","No products added yet.":"अभी तक कोई उत्पाद नहीं जोड़ा गया।","Loading...":"लोड हो रहा है...","No submissions yet.":"अभी तक कोई सबमिशन नहीं है।",
    "Edit Product":"उत्पाद संपादित करें","Update Product":"उत्पाद अपडेट करें","Close":"बंद करें","Login failed. Try again.":"लॉगिन विफल। दोबारा प्रयास करें।",
    "Invalid credentials":"लॉगिन विवरण गलत हैं","Please sign in to continue.":"जारी रखने के लिए लॉगिन करें।","Page not found":"पेज नहीं मिला","The page you are looking for does not exist.":"आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है।","Back to Home":"होम पर जाएँ",
    "Quick Links":"त्वरित लिंक","Our Services":"हमारी सेवाएँ","All rights reserved.":"सर्वाधिकार सुरक्षित।","Your trusted CSC Service Center for all digital and e-governance services.":"सभी डिजिटल और ई-गवर्नेंस सेवाओं के लिए आपका विश्वसनीय CSC सेवा केंद्र।",
    "Explore":"जानें","Learn More":"और जानें","Get Started":"शुरू करें","Why customers choose us":"ग्राहक हमें क्यों चुनते हैं",
    "Reliable digital assistance, transparent guidance and support at every step.":"भरोसेमंद डिजिटल सहायता, पारदर्शी मार्गदर्शन और हर कदम पर सहयोग।",
    "Simple process":"आसान प्रक्रिया","Personal guidance":"व्यक्तिगत मार्गदर्शन","Local support":"स्थानीय सहायता",
    "Start your application":"अपना आवेदन शुरू करें","Need help choosing a service?":"सेवा चुनने में सहायता चाहिए?","Talk to our team":"हमारी टीम से बात करें"
  },
  mr: {
    "Home":"मुख्यपृष्ठ","Services":"सेवा","Shop":"दुकान","About":"आमच्याबद्दल","Contact":"संपर्क",
    "Welcome to Rahat Digital's":"राहत डिजिटल्समध्ये आपले स्वागत आहे",
    "Your trusted CSC Service Center for PAN Card, Passport, Voter ID, Job Applications and more.":"PAN कार्ड, पासपोर्ट, मतदार ओळखपत्र, नोकरी अर्ज आणि इतर सेवांसाठी आपले विश्वासार्ह CSC सेवा केंद्र.",
    "Explore Services":"सेवा पहा","Our Main Services":"आमच्या प्रमुख सेवा",
    "PAN Card Apply / Update":"PAN कार्ड अर्ज / अपडेट","Apply or update your PAN Card quickly.":"नवीन PAN कार्डसाठी अर्ज करा किंवा तपशील लवकर अपडेट करा.",
    "Passport Services":"पासपोर्ट सेवा","Passport forms, updates and applications.":"पासपोर्ट फॉर्म, अपडेट आणि अर्ज.",
    "Voter ID Registration":"मतदार ओळखपत्र नोंदणी","Create or update your Voter ID easily.":"मतदार ओळखपत्र सहज तयार करा किंवा अपडेट करा.",
    "Job Application Forms":"नोकरी अर्ज फॉर्म","Government and private job form filling.":"सरकारी आणि खासगी नोकरी अर्ज भरण्यास मदत.",
    "Our Services":"आमच्या सेवा","Trusted CSC & Digital Seva solutions — fast, secure and reliable.":"विश्वासार्ह CSC आणि डिजिटल सेवा उपाय — जलद, सुरक्षित आणि विश्वासार्ह.",
    "Apply for new PAN or update existing details.":"नवीन PAN साठी अर्ज करा किंवा विद्यमान तपशील अपडेट करा.",
    "New passport, renewal & correction assistance.":"नवीन पासपोर्ट, नूतनीकरण आणि दुरुस्ती सहाय्य.",
    "New Voter ID registration or updates.":"नवीन मतदार ओळखपत्र नोंदणी किंवा अपडेट.",
    "Government & private job form support.":"सरकारी आणि खासगी नोकरी अर्जांसाठी मदत.",
    "Aadhaar Services":"आधार सेवा","Aadhaar update, correction & download help.":"आधार अपडेट, दुरुस्ती आणि डाउनलोड सहाय्य.",
    "Govt Certificates":"शासकीय प्रमाणपत्रे","Income, Caste, Domicile & other certificates.":"उत्पन्न, जात, रहिवासी आणि इतर प्रमाणपत्रे.",
    "Explore Service →":"सेवा पहा →","About Rahat Digital's":"राहत डिजिटल्सबद्दल",
    "Your Trusted CSC & Digital Service Center":"आपले विश्वासार्ह CSC आणि डिजिटल सेवा केंद्र",
    "Who We Are":"आम्ही कोण आहोत","Our Mission":"आमचे ध्येय","Our Vision":"आमची दृष्टी","Why Choose Rahat Digital's?":"राहत डिजिटल्स का निवडावे?",
    "Fast Service":"जलद सेवा","Safe & Secure":"सुरक्षित आणि विश्वासार्ह","All Services at One Place":"सर्व सेवा एकाच ठिकाणी","Trusted Support":"विश्वासार्ह मदत",
    "Quick processing and instant updates without delays.":"विनाविलंब जलद प्रक्रिया आणि त्वरित अपडेट.",
    "Your data is handled with full privacy and security.":"आपला डेटा पूर्ण गोपनीयता आणि सुरक्षिततेने हाताळला जातो.",
    "PAN, Passport, Voter ID, Applications & more.":"PAN, पासपोर्ट, मतदार ओळखपत्र, अर्ज आणि इतर सेवा.",
    "We believe in transparency and customer satisfaction.":"आम्ही पारदर्शकता आणि ग्राहक समाधानावर विश्वास ठेवतो.",
    "Contact Us":"संपर्क करा","We are here to help you with all digital services":"सर्व डिजिटल सेवांसाठी मदत करण्यासाठी आम्ही येथे आहोत",
    "Get in Touch":"संपर्कात रहा","Have questions or need help with a digital service? Feel free to contact us anytime.":"काही प्रश्न आहेत किंवा डिजिटल सेवेसाठी मदत हवी आहे? कधीही आमच्याशी संपर्क साधा.",
    "Send Us a Message":"आम्हाला संदेश पाठवा","Name":"नाव","Email":"ईमेल","Phone":"फोन","Your Message":"आपला संदेश",
    "Send Message":"संदेश पाठवा","Sending...":"पाठवत आहे...","Message sent successfully!":"संदेश यशस्वीरित्या पाठवला!","Failed to send message.":"संदेश पाठवता आला नाही.","Error sending message.":"संदेश पाठवताना त्रुटी आली.",
    "Rahat Digitals Shop":"राहत डिजिटल्स दुकान","Hand-picked Amazon products • Trusted deals • Best prices":"निवडक उत्पादने • विश्वासार्ह ऑफर्स • उत्तम किंमती",
    "ALL":"सर्व","Electronics":"इलेक्ट्रॉनिक्स","Fashion":"फॅशन","Home":"घर","Other":"इतर","Buy on Amazon →":"Amazon वर खरेदी करा →",
    "No products are available right now. Please check back soon.":"सध्या कोणतीही उत्पादने उपलब्ध नाहीत. कृपया नंतर पुन्हा पहा.",
    "Admin Login":"ॲडमिन लॉगिन","Admin Email":"ॲडमिन ईमेल","Password":"पासवर्ड","Login":"लॉगिन","Logging in...":"लॉगिन होत आहे...","Logout":"लॉगआउट",
    "Admin Panel":"ॲडमिन पॅनेल","PAN Card":"PAN कार्ड","Voter ID":"मतदार ओळखपत्र","Passport":"पासपोर्ट","Job Forms":"नोकरी अर्ज","Contact Messages":"संपर्क संदेश","Add Products":"उत्पादने जोडा",
    "Submitted At":"सादर केल्याची वेळ","Data":"तपशील","Status":"स्थिती","Actions":"कृती","View":"पहा","Processed":"प्रक्रिया पूर्ण","Delete":"हटवा","Edit":"संपादित करा",
    "Add New Product":"नवीन उत्पादन जोडा","Product Title":"उत्पादनाचे नाव","Price (₹)":"किंमत (₹)","Image URL":"प्रतिमा URL","Select Category":"श्रेणी निवडा","Amazon Link":"Amazon लिंक","Add Product":"उत्पादन जोडा",
    "Product List":"उत्पादन सूची","No products added yet.":"अद्याप कोणतेही उत्पादन जोडलेले नाही.","Loading...":"लोड होत आहे...","No submissions yet.":"अद्याप कोणतेही अर्ज आलेले नाहीत.",
    "Edit Product":"उत्पादन संपादित करा","Update Product":"उत्पादन अपडेट करा","Close":"बंद करा","Login failed. Try again.":"लॉगिन अयशस्वी. पुन्हा प्रयत्न करा.",
    "Invalid credentials":"लॉगिन तपशील चुकीचे आहेत","Please sign in to continue.":"पुढे जाण्यासाठी लॉगिन करा.","Page not found":"पृष्ठ सापडले नाही","The page you are looking for does not exist.":"आपण शोधत असलेले पृष्ठ उपलब्ध नाही.","Back to Home":"मुख्यपृष्ठावर जा",
    "Quick Links":"जलद दुवे","Our Services":"आमच्या सेवा","All rights reserved.":"सर्व हक्क राखीव.","Your trusted CSC Service Center for all digital and e-governance services.":"सर्व डिजिटल आणि ई-गव्हर्नन्स सेवांसाठी आपले विश्वासार्ह CSC सेवा केंद्र.",
    "Explore":"पहा","Learn More":"अधिक जाणून घ्या","Get Started":"सुरू करा","Why customers choose us":"ग्राहक आम्हाला का निवडतात",
    "Reliable digital assistance, transparent guidance and support at every step.":"विश्वासार्ह डिजिटल मदत, पारदर्शक मार्गदर्शन आणि प्रत्येक टप्प्यावर सहकार्य.",
    "Simple process":"सोपी प्रक्रिया","Personal guidance":"वैयक्तिक मार्गदर्शन","Local support":"स्थानिक मदत",
    "Start your application":"आपला अर्ज सुरू करा","Need help choosing a service?":"सेवा निवडण्यासाठी मदत हवी आहे?","Talk to our team":"आमच्या टीमशी बोला"
  }
};

const LanguageContext = createContext({ language: "en", setLanguage: () => {}, t: (value) => value });

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("rahatdigitals-language");
    return ["en", "hi", "mr"].includes(saved) ? saved : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("rahatdigitals-language", language);
    document.documentElement.lang = language === "hi" ? "hi" : language === "mr" ? "mr" : "en";
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (value) => translations[language]?.[value] || value
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
