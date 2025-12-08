import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="page landing-page">
      {/* dark gradient overlay on top of background poster */}
      <div className="landing-backdrop" />

      <div className="landing-hero">
        <div className="landing-main">
          <span className="landing-badge">IEEE RFID Presents</span>

          <h1 className="landing-title">SOLUTIO</h1>
          <p className="landing-subtitle">Arduino Project Competition</p>

          <p className="landing-tagline">
            Showcase your creativity and skills in Arduino technology, highlighting innovation
            and collaboration in tech development.
          </p>

          {/* EVENT DETAILS PILL ROWS */}
          <div className="landing-details">
            <div className="detail-pill">
              <span className="pill-label">Date</span>
              <span className="pill-value">20th December 2025</span>
            </div>
            <div className="detail-pill">
              <span className="pill-label">Time</span>
              <span className="pill-value">9:00 AM – 5:00 PM</span>
            </div>
            <div className="detail-pill">
              <span className="pill-label">Venue</span>
              <span className="pill-value">MBITS, Kothamangalam, Kerala</span>
            </div>
            <div className="detail-pill">
              <span className="pill-label">Eligibility</span>
              <span className="pill-value">Open to all engineering students</span>
            </div>
          </div>

          {/* PRIZE POOL HYPE BLOCK */}
          <div className="prize-highlight">
            <div className="prize-amount">
              <span className="prize-label">Prize Pool</span>
              <span className="prize-value">₹5,000</span>
            </div>
            <div className="prize-split">
              <span>🥇 1st Prize: <b>₹3,000</b></span>
              <span>🥈 2nd Prize: <b>₹2,000</b></span>
            </div>
            <p className="prize-subtext">
              Build, present and win exciting cash prizes before the year ends!
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="landing-cta">
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate('/register')}
            >
              Register Your Team
            </button>
            <button
              className="btn landing-secondary"
              onClick={() => navigate('/guidelines')}
            >
              View Competition Guidelines
            </button>
          </div>

          {/* FOOTER LINE */}
          <p className="landing-footer-text">
            Showcase your talent before the year ends • Follow us on Instagram:
            <span className="landing-ig">@ieeerfidks</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing
