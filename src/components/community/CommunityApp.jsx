const CommunityApp = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="user-profile">
          <img src="samyog-khanal.jpg" alt="Samyog Khanal" />
          <span>@samyog</span>
        </div>
        <div className="notifications">
          <i className="fas fa-bell"></i>
          <i className="fas fa-cog"></i>
        </div>
      </header>

      <nav className="sidebar">
        <ul>
          <li>
            <i className="fas fa-home"></i>
            <span>Feed</span>
          </li>
          <li>
            <i className="fas fa-user-friends"></i>
            <span>Friends</span>
          </li>
          <li>
            <i className="fas fa-calendar-alt"></i>
            <span>Event</span>
          </li>
          <li>
            <i className="fas fa-image"></i>
            <span>Photos</span>
          </li>
          <li>
            <i className="fas fa-store"></i>
            <span>Marketplace</span>
          </li>
        </ul>
      </nav>

      <main className="content">
        <section className="group-info">
          <div className="group-image">
            <img src="mardi-community.jpg" alt="Mardi Community" />
          </div>
          <div className="group-details">
            <h2>Mardi Community</h2>
            <p>@Mardi Trek</p>
            <div className="group-stats">
              <span>10.3K Post</span>
              <span>2,564 Members</span>
              <span>234 Media</span>
              <span>21 Events</span>
            </div>
            <div className="group-actions">
              <button className="btn btn-primary">Join Group</button>
              <button className="btn btn-secondary">Send Message</button>
            </div>
          </div>
        </section>

        <section className="popular-posts">
          <h2>Popular Post</h2>
          <div className="post-list">
            <div className="post">
              <img src="gus-firing-bb.jpg" alt="Gus Firing BB" />
              <p>As a passionate trekker, this journey was a perfect blend of breathtaking landscapes and challenging trails.</p>
              <div className="post-meta">
                <span>Gus Firing BB</span>
                <span>12 April at 09:28 PM</span>
              </div>
            </div>
            <div className="post">
              <img src="gus-firing-bb.jpg" alt="Gus Firing BB" />
              <p>As a passionate trekker, this journey was a perfect blend of breathtaking landscapes and challenging trails.</p>
              <div className="post-meta">
                <span>Gus Firing BB</span>
                <span>12 April at 09:28 PM</span>
              </div>
            </div>
            <div className="post">
              <img src="gus-firing.jpg" alt="Gus Firing" />
              <p>As a passionate trekker, this journey was a perfect blend of breathtaking landscapes and challenging trails.</p>
              <div className="post-meta">
                <span>Gus Firing</span>
                <span>12 April at 09:28 PM</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="sidebar">
        <h2>Your Pages</h2>
        <div className="page-list">
          <div className="page">
            <img src="2am-vlogs.jpg" alt="2am Vlogs" />
            <div className="page-details">
              <h3>2am Vlogs</h3>
              <p>11 min</p>
            </div>
          </div>
          <div className="page">
            <img src="tems.jpg" alt="TEMS" />
            <div className="page-details">
              <h3>TEMS</h3>
              <p>11 min</p>
            </div>
          </div>
        </div>
        <h2>Friends</h2>
        <div className="friend-list">
          <div className="friend">
            <img src="morgan.jpg" alt="Morgan" />
            <p>Morgan</p>
            <p>11 min</p>
          </div>
          <div className="friend">
            <img src="stanley-burton.jpg" alt="Stanley Burton" />
            <p>Stanley Burton</p>
            <p>11 min</p>
          </div>
          <div className="friend">
            <img src="allen-anderson.jpg" alt="Allen Anderson" />
            <p>Allen Anderson</p>
            <p>11 min</p>
          </div>
          <div className="friend">
            <img src="lucas-west.jpg" alt="Lucas West" />
            <p>Lucas West</p>
            <p>11 min</p>
          </div>
          <div className="friend">
            <img src="danny-moore.jpg" alt="Danny Moore" />
            <p>Danny Moore</p>
            <p>9 min</p>
          </div>
          <div className="friend">
            <img src="jason-gutierrez.jpg" alt="Jason Gutierrez" />
            <p>Jason Gutierrez</p>
            <p>11 min</p>
          </div>
          <div className="friend">
            <img src="jesus-cooper.jpg" alt="Jesus Cooper" />
            <p>Jesus Cooper</p>
            <p>11 min</p>
          </div>
          <div className="friend">
            <img src="joshua-hunt.jpg" alt="Joshua Hunt" />
            <p>Joshua Hunt</p>
            <p>11 min</p>
          </div>
          <div className="friend">
            <img src="jimmy-maxwell.jpg" alt="Jimmy Maxwell" />
            <p>Jimmy Maxwell</p>
            <p>11 min</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CommunityApp;