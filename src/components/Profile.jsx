const Profile = () => {
  return (
    <div>

        <div className="main">
        <h1 className="h1">Laura Smith</h1>
        <h3 className="h3">Frontend Developer</h3>
        <h5 className="h5">laurasmith.website</h5>
        <div className="button">
          <button className="button-email">
            <img src="src/images/Mail.png" alt="" />
            <span>Email</span>
          </button>
          <button className="button-linkedin">
              
            <img src="src/images/linkedin.png" alt="" />
            <span>LinkedIn </span>


          </button>
        </div>

        <div className="profile">
        <div className="main-about">
            <h1>About</h1>
            <p>I am a frontend developer with a particular interest in making things simple  and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>

        <div className="main-intrests">
            <h1>Intrests</h1>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;


