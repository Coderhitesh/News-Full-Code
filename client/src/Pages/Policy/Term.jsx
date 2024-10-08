import React, { useEffect } from 'react';

const Term = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },[])
    return (
        <div>
            <div className="container p-3 mt-5 flex flex-col gap-3">
                <h1 className="text-xl font-extrabold">Terms and Conditions (नियम और शर्तें)</h1>
                <p>आम आवाज़ में आपका स्वागत है</p>
                <p>
                    ये नियम और शर्तें <a href="https://www.aamawaz.com/">https://www.aamawaz.com/</a> पर स्थित आम आवाज़ की वेबसाइट के उपयोग के लिए नियम और विनियम बताती हैं। 
                    इस वेबसाइट पर पहुँचकर हम मानते हैं कि आप इन नियमों और शर्तों को स्वीकार करते हैं। यदि आप इस पृष्ठ पर बताए गए सभी नियमों और शर्तों को स्वीकार करने के लिए 
                    सहमत नहीं हैं तो आप आम आवाज़ का उपयोग जारी न रखें।
                </p>

                <h2>Licence (लाइसेंस)</h2>
                <p>
                    जब तक अन्यथा न कहा जाए तब तक इसके लाइसेंसकर्ता आम आवाज़ पर सभी सामग्री के लिए बौद्धिक संपदा अधिकारों के स्वामी हैं। सभी बौद्धिक संपदा अधिकार सुरक्षित हैं। 
                    आप इन नियमों और शर्तों में निर्धारित प्रतिबंधों के अधीन अपने निजी उपयोग के लिए आम आवाज़ से इस तक पहुँच सकते हैं। 
                    आपको ये नहीं करना चाहिए:
                </p>
                <ul>
                    <li>आम आवाज़ से सामग्री का पुनर्प्रकाशन</li>
                    <li>आम आवाज़ से सामग्री को बेचना, किराए पर देना या उप-लाइसेंस देना</li>
                    <li>आम आवाज़ से सामग्री का पुनरुत्पादन</li>
                    <li>आम आवाज़ से सामग्री का पुनर्वितरण</li>
                </ul>
                <p>
                    यह अनुबंध आज की तिथि से शुरू होगा। इस वेबसाइट के कुछ हिस्से उपयोगकर्ताओं को वेबसाइट के कुछ क्षेत्रों में राय और जानकारी पोस्ट करने और 
                    आदान-प्रदान करने का अवसर प्रदान करते हैं। आम आवाज़ वेबसाइट पर उनकी उपस्थिति से पहले टिप्पणियों को फ़िल्टर, संपादित, प्रकाशित या समीक्षा नहीं करता है। 
                    टिप्पणियाँ आम आवाज़ उसके एजेंटों या सहयोगियों के विचारों और राय को नहीं दर्शाती हैं। टिप्पणियाँ उस व्यक्ति के विचारों और राय को दर्शाती हैं जो अपने 
                    विचारों और राय को पोस्ट करते हैं। लागू कानूनों द्वारा अनुमत सीमा तक आम आवाज़ टिप्पणियों के लिए या इस वेबसाइट पर टिप्पणियों के किसी भी उपयोग और/या 
                    पोस्टिंग और/या उपस्थिति के परिणामस्वरूप होने वाली किसी भी देयता, क्षति या व्यय के लिए उत्तरदायी नहीं होगा।
                </p>

                <h2>Cookies (कुकीज़)</h2>
                <p>
                    हम कुकीज़ का उपयोग करते हैं। आम आवाज़ तक पहुँचने में आपने आम आवाज़ की गोपनीयता नीति के साथ समझौते में कुकीज़ का उपयोग करने के लिए सहमति व्यक्त की है। 
                    अधिकांश इंटरैक्टिव वेबसाइटें प्रत्येक विज़िट के लिए उपयोगकर्ता के विवरण को पुनः प्राप्त करने के लिए कुकीज़ का उपयोग करती हैं। हमारी वेबसाइट द्वारा कुकीज़ का 
                    उपयोग कुछ क्षेत्रों की कार्यक्षमता को सक्षम करने के लिए किया जाता है ताकि हमारी वेबसाइट पर आने वाले लोगों के लिए इसे आसान बनाया जा सके। हमारे कुछ सहयोगी/विज्ञापन 
                    भागीदार भी कुकीज़ का उपयोग कर सकते हैं।
                </p>

                <h2>Hyperlinking to Our Content (हमारी सामग्री से हाइपरलिंकिंग)</h2>
                <p>
                    निम्नलिखित संगठन बिना पूर्व लिखित स्वीकृति के हमारी वेबसाइट से लिंक कर सकते हैं: सरकारी एजेंसियाँ, खोज इंजन, समाचार संगठन, ऑनलाइन निर्देशिका वितरक 
                    हमारी वेबसाइट से उसी तरह लिंक कर सकते हैं जैसे वे अन्य सूचीबद्ध व्यवसायों की वेबसाइटों से हाइपरलिंक करते हैं, और सिस्टम वाइड मान्यता प्राप्त व्यवसाय, 
                    गैर-लाभकारी संगठनों, चैरिटी शॉपिंग मॉल, और चैरिटी फंडरेजिंग समूहों को छोड़कर जो हमारी वेबसाइट से हाइपरलिंक नहीं कर सकते हैं।
                </p>
                <p>
                    यदि आप ऊपर पैराग्राफ में सूचीबद्ध संगठनों में से एक हैं और हमारी वेबसाइट से लिंक करने में रुचि रखते हैं, तो आपको आम आवाज़ को एक ई-मेल भेजकर हमें सूचित करना होगा। 
                    कृपया अपना नाम, अपने संगठन का नाम, संपर्क जानकारी और साथ ही अपनी साइट का URL, उन URL की सूची शामिल करें जिनसे आप हमारी वेबसाइट से लिंक करना चाहते हैं, 
                    और हमारी साइट पर मौजूद उन URL की सूची जिनसे आप लिंक करना चाहते हैं। प्रतिक्रिया के लिए 2-3 सप्ताह प्रतीक्षा करें।
                </p>
            </div>
        </div>
    );
};

export default Term;
