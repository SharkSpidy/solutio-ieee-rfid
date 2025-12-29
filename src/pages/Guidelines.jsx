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
            <p>• There will be two rounds. A <b>Selection Round</b> and <b>Final Round</b>.</p>
            <p>• Only <b>5 teams</b> from Selection round will be advanced to Final round.</p>
            <p>• Registration will be closed on <b>3rd January 2026</b>.</p>
            <p>• The Selection round will take place during <b>4th January 2026 to 9th January 2026</b>.</p>
            <p>• The Final round will be on <b>17th January 2026</b> held at <b>MBITS College, Kothamangalam</b>.</p>
            <p>•</p>
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
            <h3>Online Selection Round</h3>
            <p>1. The Selecion round will take place during <b>4th January 2026 to 9th January 2026</b>.</p>
            <p>2. The round will have <b>five questions</b> (from basic to advanced).</p>
            <p>3. Teams giving the best solutions to most questions will be advanced.</p>
            <p>4. Teams may build <b>physical or online simulations</b>.</p>
            <p>5. Teams must submit <b>Code, Video (Physical/Simulation), Diagrams</b>, etc.</p>
          </div>

          {/* FINAL ROUND */}
          <div className="guideline-item">
            <h3>Final Round</h3>
            <p>1. Final round will be on <b>17th January 2026</b>.</p>
            <p>2. It will take place at <b>MBITS College Kothamangalam</b>.</p>
            <p>3. Top <b>5 teams</b> from the selection round will advance.</p>
            <p>4. The questions for the final round will be announced after Selection round.</p>
            <p>5. Advanced 5 teams are required to build project at the venue.</p>
            <p>6. Each team can improve the solution as their wish.</p>
            <p>7. Each team will be provided with an <b>Arduino board and Breadboard</b>.
            Other required components are requested to bring by the participants.</p>
            <p>8. Each team are required to present their project using ppt at the end.</p>
            <p><b>Timeline:</b></p>
            <p>• Project Build Time: <b>9 AM</b> to <b>3:00 PM</b></p>
            <p>• Presentation Time: <b>3:00 PM – 5:00 PM</b></p>
          </div>

          {/* GENERAL GUIDELINES */}
          <div className="guideline-item">
            <h3>General Guidelines</h3>
            <p>• Participants must adhere to ethical code of conduct.</p>
            <p>• Any misconduct, dishonesty, or plagiarism will lead to disqualification.</p>
            <p>• Timelines must be followed. Late submissions will not be evaluated.</p>
            <p>• Participants are responsible for any damage to provided equipment.</p>
            <p>• Lunch, water, and snacks will be provided.</p>
            <p>• Teams can approach volunteers for any technical or non-technical support.</p>
            <p>• Organisers reserve the right to change rules or schedules.</p>
            <p>• Judges and organisers decisions are final and binding.</p>
            <p>• Any changes will be notified to participants.</p>
          </div>

          {/* CONTACT*/}
          <div className="guidline-item">
            <h3>For any Assistence and Doubts,
              Contact</h3>
              <p>1. <b>Adithyan</b> : 6238260619</p>
              <p>2. <b>Anna</b> : 7594869382</p>
              <p>3. <b>Abhirami</b> : 8590360633</p>
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
