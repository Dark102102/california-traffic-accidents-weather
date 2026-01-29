
const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    'Introduction',
    'Data Prep/EDA',
    'PCA',
    'Clustering',
    'ARM',
    'DT',
    'NB',
    'SVM',
    'Regression',
    'Conclusions'
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          Road Accidents <br />
          <span className="subtitle">Due to Rainfall and Weather Conditions</span>
        </div>
        <div className="nav-links">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 0;
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(109, 40, 217, 0.3);
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
          gap: 1rem;
        }

        @media (min-width: 1024px) {
            .container {
                flex-direction: row;
                justify-content: space-between;
            }
        }
        
        .brand {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.2;
          text-align: center;
          color: var(--text-primary);
        }
        
        .brand .subtitle {
            font-size: 0.85rem;
            color: var(--accent-secondary);
            font-weight: 400;
            display: block;
        }
        
        .nav-links {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .nav-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
          font-family: var(--font-sans);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .nav-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .nav-btn.active {
          color: #fff;
          background: rgba(139, 92, 246, 0.15); /* Soft accent bg */
          border-color: var(--accent-primary);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); /* Stronger glow */
          font-weight: 700; /* Increased weight */
          text-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
