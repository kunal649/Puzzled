import MediaCard from "./card.jsx";

export default function UserSec() {
  // Data for the cards
  const cardData = [
    {
      title: "Operational Security",
      bio: "Operational Security (OpSec) is safeguarding sensitive information by identifying threats, minimizing risks, and ensuring security through careful behavior and practices.",
      imageUrl: "../../../public/unnamed.png",
    },
    {
      title: "Web3 Security with Skynet",
      bio: "Web3 Security with Skynet ensures real-time monitoring, risk assessment, and proactive alerts, safeguarding blockchain projects and user assets effectively.",
      imageUrl: "../../../public/img5.png",
    },
    {
      title: "Team and Insider Risks",
      bio: "Team and insider risks involve intentional or accidental threats from employees or partners, requiring strict access controls, monitoring, and awareness training.",
      imageUrl: "../../../public/img4.png",
    },
    {
      title: "Choosing a Secure Exchange",
      bio: "This exploration covers how to choose a secure exchange and common phishing risks.",
      imageUrl: "../../../public/img2.png",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#121212",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h2
        className="text-5xl mb-12"
        style={{
          color: "#E0E0E0",
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
        }}
      >
        User Security
      </h2>
      <div style={{ display: "inline-flex", gap: "10px" }}>
        {cardData.map((card, index) => (
          <MediaCard
            key={index}
            title={card.title}
            bio={card.bio} // Pass bio if MediaCard supports it
            imageUrl={card.imageUrl}
            style={{
              position: "relative",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              color: "#FFFFFF",
              textAlign: "center",
              width: "250px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontFamily: "Arial, sans-serif",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          />
        ))}
      </div>
    </div>
  );
}
