import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "What is crowdfunding?",
      answer: "Crowdfunding is a quick and easy way to raise money using the internet and social media. Using an online fundraising platform, you can raise the required amounts through donations from across India to help with any social, medical, personal, or creative need. Campaigners have used online crowdfunding platforms to raise funds for medical treatment such as cancer care or transplant. Everyone can easily get financial assistance for medical bills, regardless of religion, caste, creed, or social status. With expert crowdfunding guidance, you can reduce the cost of medical bills."
    },
    {
      question: "Is crowdfunding legal in India?",
      answer: "Yes, online donation-based crowdfunding for social, medical, and personal causes is legal in India. The Securities and Exchange Board of India (SEBI) considers all forms of crowdfunding legal in India except for equity crowdfunding. Specific crowdfunding organisations are registered under the Income Tax Act as charitable trusts. Contributions made to such donation platforms are eligible for income tax deductions under section 80G."
    },
    {
      question: "How much does it cost to start a fundraiser on ImpactGuru?",
      answer: "In just a few minutes, you can start a fundraiser on ImpactGuru - India’s leading online crowdfunding platform. Depending on your fundraising needs and the type of fundraising plan you choose, the fee is deducted as a certain percentage from the amount you raised. ImpactGuru even offers online fundraising at a 0% platform fee to help you receive the maximum funds raised through an online campaign."
    },
    {
      question: "Do we need to return the funds raised through crowdfunding?",
      answer: "Money contributed towards your fundraiser on ImpactGuru is considered a donation or a gift, and you are not liable to return the money at any point. This no-payback liability ensures you can pay for a medical or personal need without worrying about debt."
    },
    {
      question: "What do I need to start a fundraiser?",
      answer: "You can immediately start a fundraiser on ImpactGuru and add relevant images and information to inform donors why you require funds. ImpactGuru will then reach out to verify your information through identity proofs, medical bills, and other relevant documents. Start creating your fundraiser for medical expenses and get stepwise help from our experts to run it!"
    },
    {
      question: "When will I receive the raised funds?",
      answer: "You can request a withdrawal once your fundraiser has raised a certain amount. Once ImpactGuru verifies your bank details, the funds will be transferred within a few working days. You can request multiple fund withdrawals as and when required."
    },
    {
      question: "What if I don't see the medical treatment I want to raise funds for?",
      answer: "At ImpactGuru, one can raise funds for anything - from diseases as rare as Spinal Muscular Atrophy (SMA) or common yet deadly illnesses such as cancer and kidney failure to even accident-related injuries. Medical crowdfunding on ImpactGuru empowers you to raise funds for any medical emergency. You can gain further clarity by contacting us here: info@impactguru.com or 1800 891 2903."
    },
    {
      question: "What is the difference between medical crowdfunding and medical loans?",
      answer: "Medical crowdfunding and medical loans are two distinct methods of financing healthcare expenses. Key differences include: \n\
      a) Source of funds: \n\
          - Medical crowdfunding: Funds are raised by many people, typically through an online crowdfunding platform. These contributors can include friends, family, acquaintances, and even strangers who support the cause. \n\
          - Medical loans: Funds are borrowed from a financial institution, such as a bank or a specialized medical loan provider, which must be paid back over time with interest. \n\
      b) Repayment: \n\
          - Medical crowdfunding: Generally, there is no requirement to repay the funds received through crowdfunding, as the money is raised through donations. \n\
          - Medical loans: Borrowers are required to repay the loan, including principal and interest, over a specified period according to the loan agreement. \n\
      c) Interest and fees: \n\
          - Medical crowdfunding: While most crowdfunding platforms charge a small percentage of the funds raised as a fee, there is usually no interest charged on the funds received. \n\
          - Medical loans: Interest rates and fees are applied to medical loans, increasing the overall cost of the loan over time. \n\
      d) Impact on credit score: \n\
          - Medical crowdfunding: Raising funds through crowdfunding typically does not impact the borrower's credit score. \n\
          - Medical loans: Borrowing a medical loan can affect the borrower's credit score. Timely repayment of the loan can improve the credit score, while late or missed payments can negatively impact it. \n\
      e) Eligibility and approval: \n\
          - Medical crowdfunding: There is usually no stringent eligibility criteria to start a medical crowdfunding campaign. However, the success of the campaign depends on the ability to attract donors and effectively communicate the need for funds. \n\
          - Medical loans: Eligibility for medical loans depends on factors such as credit score, income, employment history, and existing debts. Approval can take time and may not be guaranteed."
    },
    {
      question: "Why is ImpactGuru the best crowdfunding platform?",
      answer: "In 2014, Impact Guru was set up to offer a more compassionate solution to those fighting critical illnesses and to empower individuals and communities to help those in need. Over time, Impact Guru has strived to be the best fundraising platform and has made it very easy for patients to raise money online on our platform. \n\
      - Focus on social causes: Impact Guru primarily targets social, personal, and medical causes, making it an appealing choice for individuals and organizations looking to raise funds for these purposes. \n\
      - User-friendly interface: The platform is designed to be easy to use, with a clean layout and intuitive navigation, making it simple for campaigners to create and manage their projects. \n\
      - Multiple payment options: Impact Guru accepts a wide range of payment methods, making it convenient for donors from different countries to contribute. \n\
      - Global reach: Impact Guru supports fundraising campaigns from all over the world, giving it a broad audience and increasing the chances of campaign success. \n\
      - Dedicated support: The platform offers dedicated support to campaigners through its team of crowdfunding experts, helping them create compelling campaigns and reach their fundraising goals. \n\
      - Marketing assistance: Impact Guru also offers marketing support, including social media promotion and email marketing, to help campaigns gain visibility and reach their target audience."
    },
    {
      question: "How does crowdfunding help?",
      answer: "Crowdfunding can be an effective way to raise money for medical treatments when you're facing financial difficulties. Here's how crowdfunding can help you when you need money for your treatment: \n\
      - Financial support: By creating a crowdfunding campaign, you can share your story and ask for donations from friends, family, and even strangers. This can help you gather the funds needed to cover your medical expenses, such as hospital bills, medication, therapy, or surgery. \n\
      - Emotional support: Sharing your story and asking for help can create a community of supporters who not only contribute financially but also offer emotional support during your treatment journey. This can provide a sense of comfort and encouragement during a challenging time. \n\
      - Spreading awareness: A crowdfunding campaign can help raise awareness about your medical condition and the challenges you're facing. This can educate others about the importance of timely treatment and may even inspire them to support similar causes or take preventative measures for their own health. \n\
      - Networking opportunities: By reaching out to your network and beyond, you might connect with people who have experienced similar situations, medical professionals, or organizations that can provide additional support, guidance, or resources. \n\
      - Reducing stress: Medical treatments can be both physically and emotionally taxing. Crowdfunding can help alleviate some of the financial stress associated with your treatment, allowing you to focus on your recovery and well-being."
    },
    {
      question: "Is ImpactGuru a donation platform?",
      answer: "Yes, Impact Guru is a donation-based crowdfunding platform that primarily focuses on social, personal, and medical causes. Individuals and organizations can create campaigns on Impact Guru to raise funds for various purposes, such as medical emergencies, disaster relief, education, and environmental projects. Donors can contribute to these campaigns and support the causes they care about. \n\
      Impact Guru offers a user-friendly interface, multiple payment options, and dedicated support to help campaigners create and manage their projects effectively. In addition to raising funds, the platform helps spread awareness about various causes and enables campaigners to build a community of supporters."
    }
  ];

  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="mb-5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full lg:w-10/12 sm:w-full">
            <p className="text-2xl font-bold mb-5">FAQ's</p>
            <hr className="divider" style={{ marginBottom: 50 }} />
            {data.map((item, index) => (
              <section key={index} className="mb-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left py-2 px-4 rounded-lg flex items-center justify-between ${
                    accordionOpen === index ? "text-blue-500" : ""
                  }`}
                >
                  {item.question}
                  <span className="ml-2">
                    {accordionOpen === index ? (
                      <text> -</text>
                    ) : (
                      <text>+</text>
                    )}
                  </span>
                </button>
                <hr className="my-2 ml-4" style={{ borderColor: "gray" }} />
                {accordionOpen === index && (
                  <div
                    className="text-left p-4 border-l-2 border-blue-500"
                    style={{ marginBottom: 10 }}
                  >
                    {item.answer}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;