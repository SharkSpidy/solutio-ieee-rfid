import { useEffect } from "react";

function Success() {
  const whatsappGroupLink =
    "https://chat.whatsapp.com/C8t8OOztvrBDBAg1sK6np2?mode=hqrt3";

  // ✅ Use the same number as in Payment.jsx
  const paymentWhatsappNumber = "918590048254";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openGroup = () => {
    window.open(whatsappGroupLink, "_blank");
  };

  const sendPaymentAgain = () => {
    const message = `✅ PAYMENT CONFIRMATION - SOLUTIO EVENT

Hi, I have completed the payment. Sharing screenshot again for confirmation.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${paymentWhatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="page success-page">
      <div className="content-container success-container">
        <div className="success-icon">✅</div>

        <h1 className="page-title">Registration Successful!</h1>

        <p className="success-text">
          Your registration has been completed successfully. Our team will verify
          your payment and update you shortly.
        </p>

        <p className="success-subtext">
          Please make sure you join the official WhatsApp group for all updates,
          instructions, and announcements.
        </p>

        <div className="success-actions">
          <button className="btn btn-primary btn-large" onClick={openGroup}>
            ✅ Join Official WhatsApp Group
          </button>

          <button className="btn success-secondary" onClick={sendPaymentAgain}>
            📤 Send Payment Screenshot Again
          </button>
        </div>

        <p className="success-footer">
          If you face any issues, feel free to contact the organizers.  
          We’re excited to see you at <b>SOLUTIO 2025</b>! 🚀
        </p>
      </div>
    </div>
  );
}

export default Success;
