import React, { useState } from 'react';
import ImageModal from '../Layout/ImageModal';

const NaiveBayes = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Naive Bayes</h1>
            </header>

            {/* 1. Overview */}
            <section className="model-section">
                <h2>1. Overview</h2>
                <div className="text-content">
                    <p>
                        Naïve Bayes is a set of probabilistic machine learning algorithms based on Bayes’ theorem. By the term naïve, it is meant that all features are conditionally independent given the class label. Although this is not generally true, NB algorithms are surprisingly good and fast to train, especially with high-dimensional features and small datasets.
                        <br /><br />
                        <strong>Commonly used:</strong> Text classification, Spam detection, Sentiment analysis, Medical diagnosis, Real-time prediction.
                    </p>

                    <h3>Comparison of Naive Bayes Classifiers</h3>
                    <ul>
                        <li><strong>Gaussian NB (GNB):</strong> assumes features follow a normal distribution. Best used with continuous numerical data — for example, predicting species from measurements like height or weight.</li>
                        <li><strong>Multinomial NB (MN NB):</strong> works with discrete count data, where features represent frequencies or counts. It's the classic choice for text classification (e.g., word counts in a document for spam detection).</li>
                        <li><strong>Bernoulli NB:</strong> also suits text data, but instead of counts it uses binary presence/absence of features (did the word appear or not?). Better than Multinomial NB when the dataset has many features that are mostly zero (sparse binary data).</li>
                        <li><strong>Categorical NB (CNB):</strong> handles features that are categorical (nominal) rather than numerical or binary — for example, color = {'{red, blue, green}'}. Each feature is assumed to have its own discrete distribution.</li>
                    </ul>

                    <div className="table-responsive">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Variant</th>
                                    <th>Feature Type</th>
                                    <th>Typical Use Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gaussian</td>
                                    <td>Continuous</td>
                                    <td>Sensor data, measurements</td>
                                </tr>
                                <tr>
                                    <td>Multinomial</td>
                                    <td>Counts/frequencies</td>
                                    <td>Word frequency in text</td>
                                </tr>
                                <tr>
                                    <td>Bernoulli</td>
                                    <td>Binary (0/1)</td>
                                    <td>Word presence/absence in text</td>
                                </tr>
                                <tr>
                                    <td>Categorical</td>
                                    <td>Nominal categories</td>
                                    <td>Survey data, encoded labels</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 2. Data Preparation */}
            <section className="model-section">
                <h2>2. Data Preparation</h2>
                <div className="text-content">
                    <p>
                        The dataset used for this analysis is a merged California accident and weather dataset, which combines traffic accident records with corresponding environmental conditions. The target variable for the model is accident severity, which is treated as a labeled outcome for supervised learning. The goal is to use weather-related features to predict the severity level of accidents.
                    </p>
                    <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/accidents_weather_ca_merged.csv" className="code-link" target="_blank" rel="noopener noreferrer">Dataset Link</a>

                    <h3 style={{ marginBottom: '0.25rem' }}>Features Selected</h3>
                    <p style={{ marginTop: 0 }}>There are 4 main features used:</p>
                    <ul>
                        <li>Temperature (temp_f)</li>
                        <li>Humidity</li>
                        <li>Visibility</li>
                        <li>Wind Speed</li>
                    </ul>

                    <h3 style={{ marginTop: '2.5rem' }}>Training and Testing Split</h3>
                    <p>
                        The dataset has been split into a set for training (70%) and a set for testing (30%). This is because the set for training is used for developing and training the model, while the set for testing is used for testing the model.
                    </p>
                    <p>
                        It is significant that the two sets are disjoint, meaning they have no common elements. This ensures that the model is not memorizing the data it has been trained on, which would give a wrong accuracy.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/NB/train_data.png" alt="Train data" style={{ width: '100%', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem' }} />
                        <p style={{ marginTop: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Train data</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/NB/test_data.png" alt="Test data" style={{ width: '100%', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem' }} />
                        <p style={{ marginTop: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Test data</p>
                    </div>
                </div>
            </section>

            {/* 3. Naive Bayes Type Specific Data Preparation */}
            <section className="model-section">
                <h2>3. Naive Bayes Type Specific Data Preparation</h2>
                <div className="text-content">
                    <h3>🔸 Multinomial Naive Bayes</h3>
                    <p>For the Multinomial Naive Bayes model, continuous variables were converted into discrete categories using binning. Each feature was divided into three levels (low, medium, high), represented by numerical values (0, 1, 2). This transformation allows the model to work with count-based or categorical-style data.</p>

                    <div
                        className="visual-block table-responsive"
                        style={{ margin: '1rem 0 2rem 0', cursor: 'zoom-in', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '1rem' }}
                        onClick={() => setSelectedImage('/NB/multinomial_data.png')}
                    >
                        <table className="data-preview-table">
                            <thead>
                                <tr><th></th><th>temp_f</th><th>humidity</th><th>visibility</th><th>wind_speed</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>0</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
                                <tr><td>1</td><td>2</td><td>0</td><td>1</td><td>0</td></tr>
                                <tr><td>2</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
                                <tr><td>3</td><td>1</td><td>2</td><td>1</td><td>1</td></tr>
                                <tr><td>4</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
                                <tr><td>..</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                                <tr><td>495</td><td>2</td><td>0</td><td>1</td><td>1</td></tr>
                                <tr><td>496</td><td>1</td><td>2</td><td>1</td><td>2</td></tr>
                                <tr><td>497</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
                                <tr><td>498</td><td>2</td><td>0</td><td>1</td><td>0</td></tr>
                                <tr><td>499</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
                            </tbody>
                        </table>
                        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-secondary, #a78bfa)' }}>🔍 Click to view full image</div>
                    </div>

                    <h3>🔸 Gaussian Naive Bayes</h3>
                    <p>For Gaussian Naive Bayes, the original continuous data was used without any transformation. This model assumes that features follow a normal distribution, making it suitable for real-valued data such as temperature and humidity.</p>

                    <div
                        className="visual-block table-responsive"
                        style={{ margin: '1rem 0 2rem 0', cursor: 'zoom-in', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '1rem' }}
                        onClick={() => setSelectedImage('/NB/gaussian_data.png')}
                    >
                        <table className="data-preview-table">
                            <thead>
                                <tr><th></th><th>temp_f</th><th>humidity</th><th>visibility</th><th>wind_speed</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>0</td><td>60.03</td><td>77</td><td>10000</td><td>6.91</td></tr>
                                <tr><td>1</td><td>65.93</td><td>40</td><td>10000</td><td>4.61</td></tr>
                                <tr><td>2</td><td>60.04</td><td>76</td><td>10000</td><td>6.91</td></tr>
                                <tr><td>3</td><td>58.32</td><td>78</td><td>10000</td><td>9.22</td></tr>
                                <tr><td>4</td><td>60.51</td><td>72</td><td>10000</td><td>8.05</td></tr>
                                <tr><td>..</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                                <tr><td>495</td><td>66.11</td><td>25</td><td>10000</td><td>10.00</td></tr>
                                <tr><td>496</td><td>58.03</td><td>78</td><td>10000</td><td>12.66</td></tr>
                                <tr><td>497</td><td>59.77</td><td>75</td><td>10000</td><td>8.05</td></tr>
                                <tr><td>498</td><td>66.07</td><td>37</td><td>10000</td><td>1.01</td></tr>
                                <tr><td>499</td><td>59.99</td><td>73</td><td>10000</td><td>8.05</td></tr>
                            </tbody>
                        </table>
                        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-secondary, #a78bfa)' }}>🔍 Click to view full image</div>
                    </div>

                    <h3>🔸 Bernoulli Naive Bayes</h3>
                    <p>For Bernoulli Naive Bayes, all features were converted into binary values (0 or 1) based on whether they were above or below their respective mean values. This transformation allows the model to work with binary feature representations.</p>

                    <div
                        className="visual-block table-responsive"
                        style={{ margin: '1rem 0 2rem 0', cursor: 'zoom-in', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', padding: '1rem' }}
                        onClick={() => setSelectedImage('/NB/bernoulli_data.png')}
                    >
                        <table className="data-preview-table">
                            <thead>
                                <tr><th></th><th>temp_f</th><th>humidity</th><th>visibility</th><th>wind_speed</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                                <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                                <tr><td>2</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                                <tr><td>3</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                                <tr><td>4</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                                <tr><td>..</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                                <tr><td>495</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
                                <tr><td>496</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                                <tr><td>497</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                                <tr><td>498</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                                <tr><td>499</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                            </tbody>
                        </table>
                        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-secondary, #a78bfa)' }}>🔍 Click to view full image</div>
                    </div>
                </div>
            </section>

            {/* 4. Code */}
            <section className="model-section">
                <h2>4. Code</h2>
                <div className="code-metadata">
                    <p><strong>Primary Libraries Used:</strong> <code>sklearn</code> (for GaussianNB, MultinomialNB, etc.), <code>pandas</code> (for data manipulation), and <code>numpy</code>.</p>
                </div>
                <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/naive.ipynb" className="code-link" target="_blank" rel="noopener noreferrer">Naive Bayes Code (Jupyter Notebook)</a>
            </section>

            {/* 5. Results */}
            <section className="model-section">
                <h2>5. Results</h2>
                <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Confusion Matrix</h3>

                <div className="results-list" style={{ marginTop: '1.5rem' }}>
                    <div className="result-item" style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Multinomial Naive Bayes
                        </h3>
                        <pre style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[95  0  0]
 [54  0  0]
 [ 1  0  0]]`}
                        </pre>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Predicts <strong>only Severity = 2</strong></li>
                            <li style={{ marginBottom: '0.5rem' }}>Completely ignores other classes</li>
                            <li>High accuracy due to <strong>majority class dominance</strong></li>
                        </ul>
                    </div>

                    <div className="result-item" style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Bernoulli Naive Bayes
                        </h3>
                        <pre style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[95  0  0]
 [54  0  0]
 [ 1  0  0]]`}
                        </pre>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Same behavior as Multinomial NB</li>
                            <li style={{ marginBottom: '0.5rem' }}>Also predicts <strong>only one class</strong></li>
                            <li>Binary transformation did <strong>not improve separation</strong></li>
                        </ul>
                    </div>

                    <div className="result-item">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Gaussian Naive Bayes
                        </h3>
                        <pre style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[76 19  0]
 [48  6  0]
 [ 1  0  0]]`}
                        </pre>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Attempts to predict <strong>multiple classes</strong></li>
                            <li style={{ marginBottom: '0.5rem' }}>Some correct predictions for Severity 3</li>
                            <li>Still heavily biased toward Severity 2</li>
                        </ul>
                    </div>

                    <div className="results-summary text-content" style={{ marginTop: '2.5rem', background: 'rgba(139, 92, 246, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            The confusion matrices show clear differences in how all the Naive Bayes models perform. For instance, both Multinomial and Bernoulli Naive Bayes models only predict the majority class for all data points. This means that all data points are predicted as Severity = 2. This results in a high number of correct predictions for data points belonging to the majority class but fails to classify other severity levels.
                        </p>
                        <p style={{ margin: 0 }}>
                            Gaussian Naive Bayes shows slightly different results compared to Multinomial and Bernoulli Naive Bayes models. This is because Gaussian Naive Bayes attempts to classify all severity levels and can classify Severity 3 data points. However, Gaussian Naive Bayes is still biased towards predicting the majority class.
                        </p>
                    </div>

                    <h3 style={{ marginTop: '3rem', color: 'var(--text-primary)' }}>Accuracy</h3>
                    <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Multinomial NB:</strong> 63.33%</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Bernoulli NB:</strong> 63.33%</li>
                        <li style={{ marginBottom: '1rem' }}><strong>Gaussian NB:</strong> 54.67%</li>
                    </ul>

                    <div className="results-summary text-content" style={{ marginBottom: '4rem' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            The results for accuracy show that both Multinomial and Bernoulli Naive Bayes models were able to obtain the highest accuracy, which is about 63.33%, while Gaussian Naive Bayes obtained a lower accuracy, which is about 54.67%.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            At first glance, it can be concluded that both Multinomial and Bernoulli Naive Bayes models perform better than the other. However, it is worth noting that even though both models were able to obtain the highest accuracy, it is actually misleading. This is because both models were only able to predict the majority class, which is Severity = 2. Therefore, it is able to obtain the highest accuracy because it is able to classify all instances as Severity = 2, even though it is unable to classify other severity levels.
                        </p>
                        <p style={{ margin: 0 }}>
                            On the other hand, it can be concluded from the results for accuracy that even though Gaussian Naive Bayes obtains a lower accuracy, it is able to classify more classes than both Multinomial and Bernoulli Naive Bayes models.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. Conclusions */}
            <section className="model-section">
                <h2>6. Conclusions</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>The Naive Bayes analysis indicates that although the weather features like temperature, humidity, visibility, and wind speed introduce some order in the dataset, they are not significant predictors for accident severity in California. Both the Multinomial and Bernoulli Naive Bayes algorithms resulted in better accuracy but were unable to predict different severity levels and instead chose the majority class.</p>
                    <p style={{ marginBottom: '1rem' }}>The Gaussian Naive Bayes model, although it resulted in lower accuracy, attempted to predict different severity levels. This indicates that it was still not able to clearly distinguish between different classes, which in turn implies that the weather features provided in the dataset are not significant enough.</p>
                    <p style={{ margin: 0 }}>The analysis indicates that accident severity in California is affected by various factors, including weather conditions, driver habits, density of vehicles, and road conditions. Naive Bayes is a basic algorithm used for machine learning purposes, and its application in this dataset has shown its inability to clearly distinguish between different classes. This is because it assumes independence between features, which is not the case in real-world scenarios.</p>
                </div>
            </section>
            <style>{`
                .comparison-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 1.5rem;
                    margin-bottom: 2.5rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 8px;
                    overflow: hidden;
                }
                .comparison-table th, .comparison-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .comparison-table th {
                    background: rgba(255, 255, 255, 0.05);
                    font-weight: bold;
                    color: var(--accent-primary, #b392f0);
                }
                .data-preview-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.85rem;
                }
                .data-preview-table th, .data-preview-table td {
                    padding: 0.5rem;
                    text-align: right;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    color: var(--text-secondary);
                }
                .data-preview-table th {
                    color: var(--accent-primary, #b392f0);
                    font-weight: 600;
                }
            `}</style>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage}
                altText="Data Preview"
            />
        </div >
    );
};

export default NaiveBayes;
