
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">Next Gen AI Model</div>
                <h1 className="hero-title">
                    Unleash the Power of <br />
                    <span className="text-gradient">Automated Intelligence</span>
                </h1>
                <p className="hero-subtitle">
                    Experience real-time traffic analysis and weather prediction powered by state-of-the-art neural networks.
                    Accurate, fast, and reliable.
                </p>
                <div className="hero-actions">
                    <button className="btn-lg primary">Start Free Trial</button>
                    <button className="btn-lg secondary">View Documentation</button>
                </div>
            </div>

            <div className="hero-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>

            <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
          padding: 0 2rem;
        }
        
        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(109, 40, 217, 0.1);
          color: var(--accent-primary);
          border: 1px solid rgba(109, 40, 217, 0.2);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2rem;
          animation: fadeDown 0.8s ease-out;
        }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          animation: fadeUp 0.8s ease-out 0.2s backwards;
        }
        
        .text-gradient {
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          line-height: 1.6;
          animation: fadeUp 0.8s ease-out 0.4s backwards;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          animation: fadeUp 0.8s ease-out 0.6s backwards;
        }
        
        .btn-lg {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        
        .primary {
          background: var(--text-primary);
          color: var(--bg-primary);
        }
        
        .primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }
        
        .secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--text-primary);
        }
        
        /* Background Animations */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(109, 40, 217, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          animation: float 10s infinite ease-in-out;
        }
        
        .glow-1 {
          top: -20%;
          left: -10%;
          background: radial-gradient(circle, rgba(109, 40, 217, 0.3) 0%, transparent 70%);
        }
        
        .glow-2 {
          bottom: -20%;
          right: -10%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
          animation-delay: -5s;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 50px); }
        }
        
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-actions { flex-direction: column; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
