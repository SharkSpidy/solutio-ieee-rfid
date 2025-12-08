import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [amount, setAmount] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  // ✅ CHANGE THIS TO YOUR PAYMENT RECEIVER NUMBER (WITH COUNTRY CODE)
  const whatsappNumber = "918590048254"; // 91XXXXXXXXXX

  // ✅ YOUR UPI ID
  const upiId = "adithyanks1811@oksbi";

  useEffect(() => {
    const fee = localStorage.getItem("reg_fee");
    setAmount(fee ? fee : 0);
  }, []);

  const copyUPI = () => {
    navigator.clipboard.writeText(upiId);
    alert("✅ UPI ID copied to clipboard!");
  };

  const proceedAfterPayment = () => {
    setSubmitting(true);

    const registrationData = JSON.parse(
      localStorage.getItem("registration_data")
    );

    const teamName = registrationData?.team_name || "Not Provided";

    const message = `✅ PAYMENT CONFIRMATION - SOLUTIO EVENT

Team Name: ${teamName}
Amount Paid: ₹${amount}

I have completed the payment. Attaching screenshot below.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");

    // ✅ Use React Router navigation instead of window.location
    navigate("/success");
  };

  return (
    <div className="payment-page">
      <h1>Complete Payment</h1>

      <div className="qr-section">
        <h2>Amount to Pay: ₹{amount}</h2>

        <p style={{ marginTop: "0.6rem", fontSize: "0.95rem" }}>
          Pay using the UPI ID below:
        </p>

        <div
          style={{
            marginTop: "0.6rem",
            padding: "0.6rem 1rem",
            borderRadius: "999px",
            border: "1px solid rgba(148,163,184,0.6)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontWeight: "600"
          }}
        >
          {upiId}
          <button
            onClick={copyUPI}
            style={{
              border: "none",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              color: "#fff",
              borderRadius: "999px",
              padding: "0.3rem 0.7rem",
              cursor: "pointer",
              fontSize: "0.75rem",
              fontWeight: "600"
            }}
          >
            Copy
          </button>
        </div>

        <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#cbd5f5" }}>
          After payment, click below to confirm via WhatsApp by sending your screenshot.
        </p>
      </div>

      <button
        onClick={proceedAfterPayment}
        disabled={submitting}
        style={{ marginTop: "1.5rem" }}
      >
        {submitting ? "Opening WhatsApp..." : "I Have Paid – Send Screenshot on WhatsApp"}
      </button>
    </div>
  );
}

export default Payment;
