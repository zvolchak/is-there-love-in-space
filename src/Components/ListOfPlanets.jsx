import { FaCheckCircle, FaQuestionCircle, FaTimesCircle } from "react-icons/fa";
import { GiRingedPlanet } from "react-icons/gi";

function getStatusDisplay(statue) {
  if (statue === "yes") {
    return {
      icon: <FaCheckCircle color="#7ee787" />,
      label: "Yes",
    };
  }

  if (statue === "no") {
    return {
      icon: <FaTimesCircle color="#ff7b72" />,
      label: "No",
    };
  }

  return {
    icon: <FaQuestionCircle color="#f2cc60" />,
    label: "Maybe",
  };
}

function ListOfPlanets({ planets }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
      }}
    >
      {planets.map((planet) => {
        const statusDisplay = getStatusDisplay(planet.statue);

        return (
          <div
            key={planet.name}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "8px",
              padding: "12px 16px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              <GiRingedPlanet />
              <span>{planet.name}</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {statusDisplay.icon}
              <span>Status: {statusDisplay.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListOfPlanets;
