
const Showcase = () => {
  const features = [
    {
      title: "Real-time Processing",
      description: "Process video feeds in milliseconds with our optimized inference engine.",
      icon: "⚡"
    },
    {
      title: "Weather Integration",
      description: "Correlate traffic patterns with hyper-local weather data for better predictions.",
      icon: "🌤️"
    },
    {
      title: "Anomaly Detection",
      description: "Automatically detect accidents and obstructions before they cause congestion.",
      icon: "🎯"
    }
  ];

  return (
    <section id="features" className="showcase">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Rain & Risk?</h2>
          <p>Powered by advanced machine learning algorithms.</p>
        </div>

        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .showcase {
          padding: 8rem 0;
          position: relative;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .section-header p {
          color: var(--text-secondary);
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
          cursor: default;
        }
        
        .card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        
        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Showcase;
