import { useState, useEffect } from "react";

function Payment() {
  const [amount, setAmount] = useState(0);
  const [screenshot, setScreenshot] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fee = localStorage.getItem("reg_fee");
    setAmount(fee ? fee : 0);
  }, []);

  const handleSubmitPayment = async () => {
    if (!screenshot) {
      alert("Please upload payment screenshot.");
      return;
    }

    setSubmitting(true);

    const registrationData = JSON.parse(
      localStorage.getItem("registration_data")
    );

    const finalData = new FormData();
    for (let key in registrationData) {
      finalData.append(key, registrationData[key]);
    }

    // Add Screenshot
    finalData.append("payment_screenshot", screenshot);

    try {
      const response = await fetch(
        "https://formspree.io/f/mgvglnby",
        {
          method: "POST",
          body: finalData,
          headers: { Accept: "application/json" }
        }
      );

      if (response.ok) {
        localStorage.removeItem("registration_data");
        localStorage.removeItem("reg_fee");

        alert("✅ Registration Completed Successfully!");

        // ✅ OPEN WHATSAPP GROUP IN NEW TAB
        window.open(
          "https://chat.whatsapp.com/C8t8OOztvrBDBAg1sK6np2?mode=hqrt3",
          "_blank"
        );

        // ✅ OPTIONAL: Redirect to success page after 1 second
        setTimeout(() => {
          window.location.href = "/success";
        }, 1000);

      } else {
        alert("❌ Error submitting payment confirmation.");
      }
    } catch (err) {
      alert("❌ Network error.");
    }

    setSubmitting(false);
  };

  return (
    <div className="payment-page">
      <h1>Complete Payment</h1>

      <div className="qr-section">
        <h2>Amount: ₹{amount}</h2>
        <img src="/gpay-qr.jpg" alt="QR" className="qr-image" />
      </div>

      <div className="upload-section">
        <label>Upload Payment Screenshot *</label>
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setScreenshot(e.target.files[0])}
        />
      </div>

      <button onClick={handleSubmitPayment} disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Payment & Confirm Registration"}
      </button>
    </div>
  );
}

export default Payment;
