export default function Alert(props) {
  if (props.alert) {
    return (
      <div
        style={{
          display: "inline-block",
          position: "relative",
          width: "100%",
        }}
        className="alert alert-primary"
        role="alert"
      >
        {props.alert}
        <svg
          style={{ position: "absolute", right: "2%" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          onClick={() => props.setalert(null)}
          height="16"
          fill="currentColor"
          className="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
    );
  }
  return null;
}
