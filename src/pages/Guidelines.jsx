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
            <p>• The last date to register for the competition is <b>3rd January 2026</b>.</p>
            <p>• A team should consist of a maximum of <b>3 members</b>.</p>
            <p>• An individual can participate through <b>only one team</b>.</p>
            <p>• Members from different colleges are allowed to form a team.</p>

            <p>• The registration fees (per team) are:</p>
            <p>1. IEEE RFID Members: ₹150</p>
            <p>2. IEEE Members: ₹200</p>
            <p>3. Non-IEEE Members: ₹300</p>

            <p>
              <b>Note:</b> Team category is decided by the majority of the team.
            </p>
            <p>
              <b>Example:</b> If two members are IEEE members and one is a Non-IEEE
              member, the team will be considered under the IEEE category.
            </p>
          </div>

          {/* GENERAL GUIDELINES */}
          <div className="guideline-item">
            <h3>General Guidelines</h3>
            <p>• There will be two rounds: a <b>Selection Round</b> and a <b>Final Round</b>.</p>
            <p>• Only <b>5 teams</b> from the Selection Round will advance to the Final Round.</p>
            <p>• The Selection Round will take place from <b>4th January 2026 to 9th January 2026</b>.</p>
            <p>• The Final Round will be held on <b>17th January 2026</b> at <b>MBITS College, Kothamangalam</b>.</p>
            <p>• Participants must adhere to an ethical code of conduct.</p>
            <p>• Any misconduct, dishonesty, or plagiarism will lead to disqualification.</p>
            <p>• Timelines must be followed strictly. Late submissions will not be evaluated.</p>
            <p>• Participants will be responsible for any damage caused to the equipment provided.</p>
            <p>• Lunch, water, and snacks will be provided.</p>
            <p>• Teams can approach volunteers for technical or non-technical support.</p>
            <p>• Organisers reserve the right to change rules or schedules.</p>
            <p>• The decisions of judges and organisers are final and binding.</p>
            <p>• Any changes will be notified to the participants.</p>
          </div>

          {/* SCHEDULE */}
          <div className="guideline-item">
            <h3>Schedule and Details</h3>
            <p>• The competition will be conducted in <b>two phases</b>:</p>
            <p>1. Online Selection Round</p>
            <p>2. Offline Final Round</p>
          </div>

          {/* ONLINE ROUND */}
          <div className="guideline-item">
            <h3>Online Selection Round</h3>
            <p>1. The Selection Round will take place from <b>4th January 2026 to 9th January 2026</b>.</p>
            <p>2. The round will consist of <b>five questions</b>, from basic to advanced level.</p>
            <p>3. The top <b>5 teams</b> with the best solutions will advance to the Final Round.</p>
            <p>4. Teams may build <b>physical or online simulations</b> to support their solutions.</p>
            <p>
              5. Teams must submit <b>code, diagrams, and a demo video</b>
              (physical or simulation-based).
            </p>
          </div>

          {/* FINAL ROUND */}
          <div className="guideline-item">
            <h3>Offline Final Round</h3>
            <p>1. The Final Round will be held on <b>17th January 2026</b>.</p>
            <p>2. Venue: <b>MBITS College, Kothamangalam</b>.</p>
            <p>3. Problem statements will be announced after the Selection Round.</p>
            <p>4. Teams are required to build their project <b>at the venue</b>.</p>
            <p>
              5. Each team will be provided with an <b>Arduino board and Breadboard</b>.
              Other required components must be brought by the participants.
            </p>
            <p>6. Each team must prepare a <b>PowerPoint presentation</b> to support their project.</p>

            <p><b>Timeline:</b></p>
            <p>• Project Build Time: <b>9:00 AM – 3:00 PM</b></p>
            <p>• Presentation Time: <b>3:00 PM – 5:00 PM</b></p>
          </div>

          {/* CONTACT */}
          <div className="guideline-item">
            <h3>For Assistance and Queries, Contact</h3>
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
