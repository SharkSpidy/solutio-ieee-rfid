import { useNavigate } from 'react-router-dom'

function Guidelines() {
  const navigate = useNavigate()

  return (
    <div className="page guidelines-page">
      <div className="content-container">
        <h1 className="page-title">Competition Guidelines</h1>

        <div className="guidelines-list">

          {/* REGISTRATION */}
          <div className="guideline-item">
            <h3>Registration</h3>
            <p>• The registration and selection (of final teams) closes on <b>15th December 2025 at 11:59 PM</b>.</p>
            <p>• A team should consist of a maximum of <b>3 members</b>.</p>
            <p>• An individual can only participate through <b>one team</b>.</p>
            <p>• Members from different colleges are allowed to form a team.</p>
            <p>• The registration fees (per team) are:</p>
            <p>1. IEEE RFID Members: 150</p>
            <p>2. IEEE Members: ₹200</p>
            <p>3. Non-IEEE Members: ₹300</p>
            <p><b>Note:</b> Team category is decided by the majority of the team.</p>
            <p><b>Example:</b> If two are IEEE members and one is a Non-IEEE member, the team will be in IEEE category.</p>
          </div>

          {/* REQUIREMENTS */}
          <div className="guideline-item">
            <h3>Requirements</h3>
            <p>• Solutions must be built using an <b>Arduino board</b>.</p>
          </div>

          {/* SCHEDULE */}
          <div className="guideline-item">
            <h3>Schedule and Details</h3>
            <p>• The competition will be held in <b>two phases</b>:</p>
            <p>1. Online Selection Round</p>
            <p>2. Offline Final Round</p>
          </div>

          {/* ONLINE ROUND */}
          <div className="guideline-item">
            <h3>Online Selection Round (Before 15th December 2025)</h3>
            <p>1. The round will be completed within <b>15th December 2025</b>.</p>
            <p>2. The round will have <b>five questions</b> (from basic to advanced).</p>
            <p>3. Teams giving the best solutions to most questions will be advanced.</p>
            <p>4. Teams may build <b>physical or online simulations</b>.</p>
            <p>5. Teams must submit <b>Code, Video (Physical/Simulation), Diagrams</b>, etc.</p>
          </div>

          {/* FINAL ROUND */}
          <div className="guideline-item">
            <h3>Final Round (20th December 2025)</h3>
            <p>1. Top <b>5 teams</b> from the selection round will advance.</p>
            <p>2. The final question will be announced at the venue.</p>
            <p><b>Timeline:</b></p>
            <p>• Project Build Time: Up to <b>3:00 PM</b></p>
            <p>• Presentation Time: <b>3:00 PM – 5:00 PM</b></p>
          </div>

          {/* GENERAL GUIDELINES */}
          <div className="guideline-item">
            <h3>General Guidelines</h3>
            <p>• Participants must adhere to ethical code of conduct.</p>
            <p>• Any misconduct, dishonesty, or plagiarism will lead to disqualification.</p>
            <p>• Timelines must be followed. Late submissions will not be evaluated.</p>
            <p>• Arduino board and RFID tag (if required) will be provided for the <b>first 3 registered teams</b>.</p>
            <p>• Participants are responsible for any damage to provided equipment.</p>
            <p>• Lunch, water, and snacks will be provided.</p>
            <p>• Teams can approach volunteers for any technical or non-technical support.</p>
            <p>• Organisers reserve the right to change rules or schedules.</p>
            <p>• Judges' and organisers' decisions are final and binding.</p>
            <p>• Any changes will be notified to participants.</p>
          </div>

        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate('/register')}
        >
          Proceed to Registration
        </button>
      </div>
    </div>
  )
}

export default Guidelines
