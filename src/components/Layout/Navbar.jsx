
const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    'Introduction',
    'Data Prep/EDA',
    'PCA',
    'Clustering',
    'ARM',
    'DT',
    'NB',
    'Regression',
    'SVM',
    'Ensemble',
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
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 1200px;
          padding: 0.75rem 1.5rem;
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1000;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .brand {
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        
        .brand .subtitle {
            font-size: 0.75rem;
            color: #a1a1aa;
            font-weight: 500;
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .nav-links {
          display: flex;
          gap: 0.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .nav-btn {
          background: transparent;
          border: none;
          color: #a1a1aa;
          padding: 0.5rem 0.85rem;
          font-size: 0.85rem;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-family: inherit;
          font-weight: 500;
        }
        
        .nav-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }
        
        .nav-btn.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          font-weight: 600;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
        }

        @media (max-width: 1024px) {
            .navbar {
                top: 0;
                width: 100%;
                border-radius: 0;
                border-left: none;
                border-right: none;
                border-top: none;
                padding: 1rem;
            }
            .container {
                flex-direction: column;
            }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
