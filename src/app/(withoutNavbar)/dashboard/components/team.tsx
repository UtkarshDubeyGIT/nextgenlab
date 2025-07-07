import React from "react";

export default function TeamProfilesEditor() {
    

  return (
    <div>
      <h2>Team Profiles</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1rem",
              width: "220px",
              textAlign: "center",
              background: "#fafafa",
            }}
          >
            <img
              src={member.avatar}
              alt={member.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "0.5rem",
              }}
            />
            <h3 style={{ margin: "0.5rem 0 0.25rem" }}>{member.name}</h3>
            <p style={{ fontWeight: "bold", margin: 0 }}>{member.role}</p>
            <p style={{ fontSize: "0.95em", color: "#555" }}>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
