import React from 'react';

const EnsembleLearning = () => {
    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Ensemble Learning (Random Forest)</h1>
            </header>

            {/* 1. Overview */}
            <section className="model-section">
                <h2>1. Overview</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        Ensemble learning combines multiple models to improve prediction performance. Instead of relying on a single model, it uses a group of models to produce more accurate and stable results.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        In this project, the Random Forest method was used. Random Forest is based on bagging, where multiple decision trees are trained on different subsets of the data, and their predictions are combined using majority voting.
                    </p>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Why Random Forest?</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '0.5rem' }}>Random Forest was selected because:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>It handles nonlinear and complex relationships well</li>
                        <li>It reduces overfitting compared to a single decision tree</li>
                        <li>It improves accuracy and stability</li>
                    </ul>
                </div>
            </section>

            {/* 2. Results */}
            <section className="model-section">
                <h2>2. Results</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Model:</strong> Random Forest<br />
                        <strong>Best Accuracy:</strong> 0.74
                    </p>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Confusion Matrix</h3>
                <div className="visual-block" style={{ marginBottom: '2.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                    <img src="/Ensemble/confuse.png" alt="Confusion Matrix" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Feature Importance (Visualization)</h3>
                <div className="visual-block" style={{ marginBottom: '2.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                    <img src="/Ensemble/comparison.png" alt="Feature Importance Comparison" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Observation</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '0.5rem' }}>The most important features were:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Latitude (lat) and Longitude (lon) → highest importance</li>
                        <li>Temperature (temp_f)</li>
                        <li>Humidity</li>
                        <li>Wind speed</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem' }}>Weather categories (like clouds) had very low importance.</p>

                    <p style={{ marginBottom: '0.5rem' }}>This shows that:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Location plays a major role in accident severity</li>
                        <li>Weather factors still contribute, especially wind and humidity</li>
                    </ul>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Experimentation</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '0.5rem' }}>Different numbers of trees were tested:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>50 trees → Accuracy = 0.73</li>
                        <li>100 trees → Accuracy = 0.74</li>
                        <li>200 trees → Accuracy = 0.74</li>
                    </ul>
                    <p style={{ marginBottom: '2.5rem' }}>
                        Increasing the number of trees slightly improved performance, but gains became stable after 100 trees.
                    </p>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Comparison with SVM</h3>
                <div style={{ overflowX: 'auto', marginBottom: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1rem' }}>
                    <table style={{ width: '100%', minWidth: '400px', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                                <th style={{ padding: '0.75rem' }}>Model</th>
                                <th style={{ padding: '0.75rem', color: 'var(--accent-primary)' }}>Accuracy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>SVM (Linear)</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>0.71</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>SVM (Polynomial)</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>0.67</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>SVM (RBF)</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>0.67</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>Random Forest</td>
                                <td style={{ padding: '0.75rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>0.74</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 3. Discussion */}
            <section className="model-section">
                <h2>3. Discussion</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        The Random Forest model performed better than all SVM models.
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>This suggests that:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>The dataset contains nonlinear patterns that SVM could not fully capture</li>
                        <li>Ensemble methods can better handle complex relationships</li>
                    </ul>

                    <p style={{ marginBottom: '1rem' }}>
                        However, even with improved performance, the accuracy is still not very high.
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>This indicates that:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Weather and location alone are not sufficient to fully predict accident severity</li>
                        <li>Additional features (traffic, driver behavior, road conditions) are likely needed</li>
                    </ul>
                </div>
            </section>

            {/* 4. Code Implementation */}
            <section className="model-section">
                <h2>4. Code Implementation</h2>
                <div className="text-content">
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <strong>Code Link:</strong> <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/Ensemble_1.ipynb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Ensemble_1.ipynb</a>
                        </li>
                        <li>
                            <strong>Dataset Link:</strong> <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/accidents_weather_ca_merged.csv" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>accidents_weather_ca_merged.csv</a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 5. Conclusion */}
            <section className="model-section" style={{ marginTop: '5rem' }}>
                <h2>5. Conclusion</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        Random Forest improved prediction accuracy compared to SVM, showing the benefit of ensemble learning.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        However, the improvement was moderate, reinforcing the main conclusion of the project:
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--accent-primary)' }}>
                        Accident severity cannot be accurately predicted using weather data alone.
                    </p>
                    <p>
                        More comprehensive data is required for better performance.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default EnsembleLearning;
