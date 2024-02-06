import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="main-title">
          <h1>Organize your work and life, finally.</h1>
        </div>
        <div className="sec-title">
          <p>
            Become focused, organized, and calm with Todoist. The world’s #1
            task manager and to-do list app.
          </p>
        </div>
        <div>
          <a href="/register" className="nav-link register">
            Start for free
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
