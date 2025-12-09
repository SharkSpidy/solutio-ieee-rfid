import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const emptyMember = {
    name: "",
    college: "",
    phone: "",
    email: "",
    department: "",
    semester: "",
    ieee: false,
    ieee_id: "",
    rfid: false
  };

  const [members, setMembers] = useState([]);
  const [leader, setLeader] = useState({ ...emptyMember });

  const addMember = () => {
    if (members.length < 3) {
      setMembers([...members, { ...emptyMember }]);
    }
  };

  const removeMember = (idx) => {
    setMembers(members.filter((_, i) => i !== idx));
  };

  const updateLeader = (field, value) => {
    setLeader({ ...leader, [field]: value });
  };

  const updateMember = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  // Registration Fee Calculation
  const calculatePrice = () => {
    const allParticipants = [leader, ...members];

    const anyoneWithoutIEEE = allParticipants.some((p) => p.ieee === false);
    const allHaveIEEE = allParticipants.every((p) => p.ieee === true);
    const allHaveRFID = allParticipants.every((p) => p.rfid === true);

    if (anyoneWithoutIEEE) return 300;
    if (allHaveIEEE && !allHaveRFID) return 200;
    if (allHaveIEEE && allHaveRFID) return 150;

    return 200;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const price = calculatePrice();
    localStorage.setItem("reg_fee", price);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(e.target.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) navigate("/payment");
      else alert("Error submitting form.");
    } catch (err) {
      alert("Network error.");
    }
  };

  return (
    <div className="page register-page">
      <div className="content-container">
        <h1 className="page-title">Team Registration</h1>

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mjkneoea"
          method="POST"
        >

          {/* TEAM NAME */}
          <div className="form-group">
            <label>Team Name *</label>
            <input name="team_name" required placeholder="Team Name" />
          </div>

          {/* LEADER DETAILS */}
          <h2>Team Leader Details</h2>

          <div className="form-group">
            <label>Name *</label>
            <input
              name="leader_name"
              required
              value={leader.name}
              onChange={(e) => updateLeader("name", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>College *</label>
            <input
              name="leader_college"
              required
              value={leader.college}
              onChange={(e) => updateLeader("college", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input
              name="leader_phone"
              type="tel"
              pattern="[0-9]{10}"
              required
              value={leader.phone}
              onChange={(e) => updateLeader("phone", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              name="leader_email"
              type="email"
              required
              value={leader.email}
              onChange={(e) => updateLeader("email", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Department *</label>
            <input
              name="leader_department"
              required
              value={leader.department}
              onChange={(e) => updateLeader("department", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Semester *</label>
            <select
              name="leader_semester"
              required
              value={leader.semester}
              onChange={(e) => updateLeader("semester", e.target.value)}
            >
              <option value="">Select Semester</option>
              {[1,2,3,4,5,6,7,8].map((s)=>(
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </div>

          {/* IEEE FOR LEADER */}
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={leader.ieee}
                onChange={(e) => updateLeader("ieee", e.target.checked)}
              />
              IEEE Member?
            </label>
          </div>

          {leader.ieee && (
            <>
              <div className="form-group">
                <label>IEEE Membership ID *</label>
                <input
                  name="leader_ieee_id"
                  required
                  value={leader.ieee_id}
                  onChange={(e) => updateLeader("ieee_id", e.target.value)}
                />
              </div>

              {/* RFID — NO ID REQUIRED */}
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={leader.rfid}
                    onChange={(e) => updateLeader("rfid", e.target.checked)}
                  />
                  RFID Member?
                </label>
              </div>
            </>
          )}

          {/* MEMBERS */}
          <h2>Team Members (Max 2)</h2>

          {members.map((m, i) => (
            <div key={i} className="member-block">
              <h3>Member {i + 1}</h3>

              <input
                name={`member${i+1}_name`}
                placeholder="Name"
                required
                value={m.name}
                onChange={(e) => updateMember(i, "name", e.target.value)}
              />

              <input
                name={`member${i+1}_college`}
                placeholder="College"
                required
                value={m.college}
                onChange={(e) => updateMember(i, "college", e.target.value)}
              />

              <input
                name={`member${i+1}_phone`}
                placeholder="Phone"
                pattern="[0-9]{10}"
                required
                value={m.phone}
                onChange={(e) => updateMember(i, "phone", e.target.value)}
              />

              <input
                name={`member${i+1}_email`}
                type="email"
                placeholder="Email"
                required
                value={m.email}
                onChange={(e) => updateMember(i, "email", e.target.value)}
              />

              <input
                name={`member${i+1}_department`}
                placeholder="Department"
                required
                value={m.department}
                onChange={(e) => updateMember(i, "department", e.target.value)}
              />

              <select
                name={`member${i+1}_semester`}
                required
                value={m.semester}
                onChange={(e) => updateMember(i, "semester", e.target.value)}
              >
                <option value="">Select Semester</option>
                {[1,2,3,4,5,6,7,8].map((s)=>(
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>

              <label>
                <input
                  type="checkbox"
                  checked={m.ieee}
                  onChange={(e) => updateMember(i, "ieee", e.target.checked)}
                />
                IEEE Member?
              </label>

              {m.ieee && (
                <>
                  <input
                    name={`member${i+1}_ieee_id`}
                    placeholder="IEEE Membership ID"
                    required
                    value={m.ieee_id}
                    onChange={(e) => updateMember(i, "ieee_id", e.target.value)}
                  />

                  <label>
                    <input
                      type="checkbox"
                      checked={m.rfid}
                      onChange={(e) => updateMember(i, "rfid", e.target.checked)}
                    />
                    RFID Member?
                  </label>
                </>
              )}

              <button type="button" onClick={() => removeMember(i)}>
                Remove Member
              </button>
            </div>
          ))}

          {members.length < 2 && (
            <button type="button" onClick={addMember}>
              + Add Member
            </button>
          )}

          <button type="submit" className="btn btn-primary">
            Submit Registration
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;
