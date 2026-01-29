import React, { useState } from 'react';
import ImageModal from '../Layout/ImageModal';

const DataPrepEDA = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Data Prep & EDA</h1>
            </header>

            {/* 1) Data Sources */}
            <section className="data-section">
                <h2>1. Data Sources</h2>
                <div className="card">
                    <p>This project uses multiple data sources to examine the relationship between traffic accidents and weather conditions in California. A large-scale traffic accident dataset was used to provide detailed information on accident location, time, and severity. Weather-related data was collected separately using a public weather API to capture environmental conditions such as temperature, visibility, wind speed, and general weather descriptions at accident locations.</p>
                    <a href="https://www.kaggle.com/datasets/sobhanmoosavi/us-accidents?resource=download" target="_blank" rel="noopener noreferrer" className="data-link">US Traffic Accidents Dataset</a>
                    <div className="api-details">
                        <p><strong>API Name:</strong> OpenWeatherMap API</p>
                        <p><strong>API Purpose:</strong> Used to collect real-time weather information for sampled accident locations in California.</p>
                        <p><strong>Endpoint:</strong></p>
                        <code className="code-snippet">GET https://api.openweathermap.org/data/2.5/weather?lat=&#123;lat&#125;&lon=&#123;lon&#125;&appid=&#123;API_KEY&#125;</code>
                    </div>
                </div>
            </section>

            {/* 2) Raw Data Overview */}
            <section className="data-section">
                <h2>2. Raw Data Overview</h2>
                <div className="visual-block">
                    <div className="image-container">
                        <img
                            src="/unclean_dataset.png"
                            alt="Raw, unclean traffic accident dataset preview"
                            className="styled-image"
                        />
                    </div>
                </div>
                <p>The raw traffic accident dataset contains millions of records across the United States, including detailed information on accident severity, geographic location, time of occurrence, and roadway context. For this project, the dataset was filtered to include only accidents occurring within the state of California. A random sample of accident records was selected to ensure manageable data size while preserving representative patterns. Weather data retrieved from the API was stored separately before being merged with the accident records using geographic coordinates.</p>
            </section>

            {/* 3) Data Cleaning and Preparation */}
            <section className="data-section">
                <h2>3. Data Cleaning and Preparation</h2>

                <div className="visual-block">
                    <div className="image-container">
                        <img
                            src="/cleaned_dataset.png"
                            alt="Cleaned and organized dataset preview"
                            className="styled-image"
                        />
                    </div>
                </div>

                <div className="cleaning-subsections">
                    <h3>Missing Values Handling</h3>
                    <p>Missing values were addressed by filtering accident records to include only entries with valid geographic coordinates. During weather data collection, optional weather fields were handled using default values when unavailable. The final merged dataset contains no unresolved missing values.</p>

                    <h3>Outliers</h3>
                    <p>Outliers were assessed using visual exploration of temperature, wind speed, and visibility distributions. Extreme values were reviewed and retained when they represented realistic weather conditions rather than data errors.</p>

                    <h3>Incorrect Entries</h3>
                    <p>Data integrity was ensured by filtering to valid California accident records and validating weather variables obtained from authoritative sources. No systemic incorrect entries were identified.</p>

                    <h3>Column Selection</h3>
                    <p>Columns not relevant to weather–accident analysis were removed to focus the dataset on accident severity, time, location, and weather-related variables.</p>
                </div>
            </section>

            {/* 4) Exploratory Data Analysis (EDA) */}
            <section className="data-section">
                <h2>4. Exploratory Data Analysis (EDA)</h2>
                <p className="section-intro">Exploratory Data Analysis was conducted to better understand the distribution of traffic accidents and their relationship with environmental conditions. Visualizations were used to explore accident severity, weather conditions, visibility, temperature, wind speed, and temporal patterns. These exploratory insights help establish foundational patterns and guide further analysis in later stages of the project.</p>

                <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                    <a
                        href="https://github.com/Dark102102/california-traffic-accidents-weather"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#fff',
                            textDecoration: 'none',
                            background: '#24292e',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '6px',
                            fontWeight: '500',
                            transition: 'background 0.2s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#2f363d'}
                        onMouseOut={(e) => e.currentTarget.style.background = '#24292e'}
                    >
                        <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span>View Repository on GitHub</span>
                    </a>
                </div>
                <div className="eda-grid">
                    {/* Visualization 1 */}
                    <div className="eda-card">
                        <h3>Distribution of Traffic Accident Severity in California</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/1.png"
                                alt="Distribution of Traffic Accident Severity"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/1.png", alt: "Distribution of Traffic Accident Severity" })}
                            />
                        </div>
                        <p className="explanation">This visualization shows the distribution of traffic accident severity levels across California. It provides a baseline understanding of how frequently different severity levels occur.</p>
                    </div>

                    {/* Visualization 2 */}
                    <div className="eda-card">
                        <h3>Traffic Accidents by Weather Condition</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/2.png"
                                alt="Traffic Accidents by Weather Condition"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/2.png", alt: "Traffic Accidents by Weather Condition" })}
                            />
                        </div>
                        <p className="explanation">This chart displays the number of traffic accidents across common weather conditions. It highlights how accident frequency varies under different environmental contexts.</p>
                    </div>

                    {/* Visualization 3 */}
                    <div className="eda-card">
                        <h3>Visibility Conditions During Traffic Accidents</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/3.png"
                                alt="Visibility Conditions During Traffic Accidents"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/3.png", alt: "Visibility Conditions During Traffic Accidents" })}
                            />
                        </div>
                        <p className="explanation">This visualization illustrates the distribution of visibility levels during traffic accidents. Lower visibility conditions are important to examine due to their potential impact on driving safety.</p>
                    </div>

                    {/* Visualization 4 */}
                    <div className="eda-card">
                        <h3>Relationship Between Visibility and Accident Severity</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/4.png"
                                alt="Relationship Between Visibility and Accident Severity"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/4.png", alt: "Relationship Between Visibility and Accident Severity" })}
                            />
                        </div>
                        <p className="explanation">This plot explores how accident severity varies across different visibility levels. Reduced visibility is associated with a wider range of severity outcomes.</p>
                    </div>

                    {/* Visualization 5 */}
                    <div className="eda-card">
                        <h3>Temperature Distribution During Traffic Accidents</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/5.png"
                                alt="Temperature Distribution During Traffic Accidents"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/5.png", alt: "Temperature Distribution During Traffic Accidents" })}
                            />
                        </div>
                        <p className="explanation">This visualization shows the range of temperatures during which traffic accidents occurred. It helps provide context for understanding environmental conditions at the time of accidents.</p>
                    </div>

                    {/* Visualization 6 */}
                    <div className="eda-card">
                        <h3>Accident Severity Across Temperature Conditions</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/6.png"
                                alt="Accident Severity Across Temperature Conditions"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/6.png", alt: "Accident Severity Across Temperature Conditions" })}
                            />
                        </div>
                        <p className="explanation">This chart compares accident severity across different temperature ranges. The overlap across severity levels suggests temperature alone does not determine accident outcomes.</p>
                    </div>

                    {/* Visualization 7 */}
                    <div className="eda-card">
                        <h3>Wind Speed Distribution During Traffic Accidents</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/7.png"
                                alt="Wind Speed Distribution During Traffic Accidents"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/7.png", alt: "Wind Speed Distribution During Traffic Accidents" })}
                            />
                        </div>
                        <p className="explanation">This visualization presents the distribution of wind speeds recorded during traffic accidents. Wind conditions can influence vehicle control and overall driving stability.</p>
                    </div>

                    {/* Visualization 8 */}
                    <div className="eda-card">
                        <h3>Influence of Wind Speed on Accident Severity</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/8.png"
                                alt="Influence of Wind Speed on Accident Severity"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/8.png", alt: "Influence of Wind Speed on Accident Severity" })}
                            />
                        </div>
                        <p className="explanation">This plot examines how accident severity varies with wind speed. Higher wind speeds appear in some higher-severity accidents, indicating potential added risk.</p>
                    </div>

                    {/* Visualization 9 */}
                    <div className="eda-card">
                        <h3>Temporal Distribution of Traffic Accidents in California</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/9.png"
                                alt="Temporal Distribution of Traffic Accidents"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/9.png", alt: "Temporal Distribution of Traffic Accidents" })}
                            />
                        </div>
                        <p className="explanation">This visualization shows how traffic accidents are distributed across different times of the day. Peaks during commuting hours suggest interactions between traffic volume and environmental conditions.</p>
                    </div>

                    {/* Visualization 10 */}
                    <div className="eda-card">
                        <h3>Correlation Analysis of Weather Variables and Accident Severity</h3>
                        <div className="image-container">
                            <img
                                src="/EDA/10.png"
                                alt="Correlation Analysis of Weather Variables"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/EDA/10.png", alt: "Correlation Analysis of Weather Variables" })}
                            />
                        </div>
                        <p className="explanation">This heatmap presents correlations among weather-related variables and accident severity. The results suggest that multiple environmental factors collectively contribute to accident patterns.</p>
                    </div>
                </div>
            </section>


            {/* Image Modal */}
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src}
                altText={selectedImage?.alt}
            />
        </div>
    );
};

export default DataPrepEDA;
