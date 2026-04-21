const Conclusions = () => {
    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Conclusions</h1>
            </header>

            <section className="model-section">
                <div className="text-content">
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>1. Weather does influence accidents, but not in the way we might expect</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Most accidents do not occur during extreme weather conditions. Instead, they happen under normal or moderate conditions, when drivers may be less cautious.
                    </p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>2. Wind plays a noticeable role in accident conditions</h3>
                    <p style={{ marginBottom: '2.5rem' }}>
                        Among all the environmental factors, wind stood out as having a consistent impact. This suggests that even less obvious weather factors can affect driving safety.
                    </p>

                    <div className="visual-block" style={{ marginBottom: '3rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', textAlign: 'center', borderRadius: '8px' }}>
                        <img src="/Conclusions/moderate_weather_driving.png" alt="Driving in moderate weather" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                    </div>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>3. Weather alone cannot explain accident severity</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        While weather affects driving conditions, it does not strongly determine how severe an accident will be. Other factors play a much larger role in the outcome.
                    </p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>4. Accidents are influenced by multiple factors, not just environment</h3>
                    <p style={{ marginBottom: '2.5rem' }}>
                        Driving behavior, traffic conditions, and road design are likely just as important—if not more important—than weather when it comes to accident severity.
                    </p>

                    <div className="visual-block" style={{ marginBottom: '3rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', textAlign: 'center', borderRadius: '8px' }}>
                        <img src="/Conclusions/multiple_factors_safety.png" alt="Multiple factors influencing safety" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                    </div>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>5. Predicting accident severity is more complex than expected</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Even with detailed weather data, it is difficult to accurately predict how serious an accident will be. This shows that real-world problems like road safety involve many interacting factors.
                    </p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>6. Data-driven insights can help improve awareness</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Although weather alone is not enough for prediction, understanding these patterns can still help drivers and planners be more aware of conditions that may increase risk.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Conclusions;
