import "./Thoughts.scss";

const ThoughtBox = function ({ title, theme, date, id }) {
  return (
    <a href={`/thought/${id}`}>
      <div class="thought-box">
        <p>{title.length > 16 ? title.substring(0, 16) + "..." : title}</p>
        <div class="thought-box-details">
          <p>
            <span class="thought-highlight">Theme: </span>
            {theme ? theme : "None"}
          </p>
          {date ? (
            <p>
              <span class="thought-highlight">Due: </span>
              {date.toLocaleDateString("en-US")}
            </p>
          ) : undefined}
        </div>
      </div>
    </a>
  );
};

export default {
  ThoughtBox,
};
