import React from 'react';

const DecisionTrees = () => {
    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Decision Trees</h1>
            </header>

            {/* 1. Overview */}
            <section className="model-section">
                <h2>1. Overview</h2>
                <div className="text-content">
                    <p>Decision Trees are supervised learning models that split data into branches based on feature values, ultimately arriving at a prediction (leaf node). They mirror human decision-making — a series of yes/no or threshold questions that narrow down to an outcome.</p>
                    <p><strong>Common uses:</strong> credit risk scoring, medical diagnosis, customer churn prediction, and anywhere interpretability matters.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex' }}>
                        <img src="/DT/dt_overview_1.png" alt="Decision Tree Concept 1" style={{ width: '100%', height: '350px', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem' }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src="/DT/dt_overview_2.png" alt="Decision Tree Concept 2" style={{ width: '100%', height: '350px', objectFit: 'contain', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem' }} />
                    </div>
                </div>

                <div className="text-content" style={{ marginTop: '3rem', marginBottom: '5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>Key components of DT</h3>

                    <p><strong>Gini Impurity</strong></p>
                    <p style={{ marginBottom: '1rem' }}>Measures the probability that a randomly chosen sample would be incorrectly classified. Ranges from 0 (pure) to 0.5 (maximally impure for binary classes).</p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '1.1rem' }}>
                        Gini = 1 - Σ(p_i)²
                    </div>

                    <p><strong>Entropy</strong></p>
                    <p style={{ marginBottom: '1rem' }}>Comes from information theory — measures the disorder or uncertainty in a node. A pure node has entropy = 0; maximum uncertainty yields entropy = 1 (binary case).</p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '1.1rem' }}>
                        Entropy = - Σ(p_i × log₂(p_i))
                    </div>

                    <p><strong>Information Gain</strong></p>
                    <p style={{ marginBottom: '1rem' }}>Measures how much a split reduces entropy from parent to children. The algorithm always chooses the split with the highest information gain.</p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', marginBottom: '1rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '1.1rem' }}>
                        IG = Entropy_parent - Σ( (n_child / n_parent) × Entropy_child )
                    </div>

                    <h3 style={{ marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Example</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Suppose we have <strong>10 samples:</strong> 6 "Yes" (play outside) and 4 "No" based on whether it's sunny.</p>

                    <p style={{ marginBottom: '0.5rem' }}><strong>Parent entropy:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.25rem' }}>P(Yes) = 6/10 = 0.6, P(No) = 4/10 = 0.4</li>
                        <li>Entropy = -(0.6 log₂ 0.6) - (0.4 log₂ 0.4) = <strong style={{ color: 'var(--text-primary)' }}>0.971</strong></li>
                    </ul>

                    <p style={{ marginBottom: '0.5rem' }}><strong>Split on "Sunny?":</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.25rem' }}>Sunny (7 samples): 5 Yes, 2 No → Entropy = -(5/7)log₂(5/7) - (2/7)log₂(2/7) = <strong style={{ color: 'var(--text-primary)' }}>0.863</strong></li>
                        <li>Not Sunny (3 samples): 1 Yes, 2 No → Entropy = -(1/3)log₂(1/3) - (2/3)log₂(2/3) = <strong style={{ color: 'var(--text-primary)' }}>0.918</strong></li>
                    </ul>

                    <p style={{ marginBottom: '0.5rem' }}><strong>Weighted child entropy:</strong> (7/10)(0.863) + (3/10)(0.918) = 0.604 + 0.275 = <strong>0.879</strong></p>
                    <p style={{ marginBottom: '1.5rem' }}><strong>Information Gain:</strong> IG = 0.971 - 0.879 = <strong>0.092</strong></p>

                    <h3 style={{ marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Why Infinite Trees Are Possible</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        There are virtually infinite ways to construct a decision tree from the same dataset because the <strong>split order is flexible</strong>—any feature can be split at any level, in any order. Furthermore, <strong>threshold choices are continuous</strong>; for a numerical feature with 100 unique values, there are 99 possible split thresholds, each producing an entirely different downstream tree.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        The structure is also heavily influenced by <strong>tunable stopping criteria</strong>. Changing parameters like the maximum tree depth, minimum samples per leaf node, or the impurity threshold will result in completely different trees.
                    </p>
                    <p style={{ margin: 0 }}>
                        Finally, there is <strong>no unique optimal solution</strong>. Decision trees rely on greedy, top-down splitting algorithms that locally optimize each split rather than finding a globally optimal structure. Consequently, using different algorithms or random seeds will inevitably produce different results.
                    </p>
                </div>
            </section>

            {/* 2. Data Preparation */}
            <section className="model-section">
                <h2>2. Data Preparation</h2>
                <div className="text-content">
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', marginTop: '1.5rem' }}>Dataset Description</h3>
                    <p>The dataset used for the Decision Tree model is the merged California accident and weather dataset, which combines traffic accident records with corresponding environmental conditions obtained through the OpenWeather API. The target variable for this analysis is accident severity, which serves as the labeled output for supervised learning.</p>
                    <p style={{ marginBottom: '1.5rem' }}>The goal of the Decision Tree model is to learn patterns between weather conditions and accident severity by creating a series of decision rules based on the input features.</p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Feature Selection</h3>
                    <p>The following quantitative weather-related features were selected as input variables:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Temperature (temp_f)</li>
                        <li>Humidity</li>
                        <li>Visibility</li>
                        <li>Wind Speed</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem' }}>These features represent key environmental conditions that may influence driving behavior and accident outcomes.</p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Training and Testing Split</h3>
                    <p>The dataset was divided into a training set (70%) and a testing set (30%). The training set is used to build the Decision Tree model, while the testing set is used to evaluate its performance on unseen data.</p>
                    <p style={{ marginBottom: '1.5rem' }}>It is important that the training and testing sets remain disjoint, meaning they do not share any overlapping data points. This ensures that the model is evaluated fairly and prevents it from memorizing the training data.</p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Data Characteristics for Decision Trees</h3>
                    <p>Unlike Naive Bayes, Decision Trees do not require specific data transformations such as discretization or binarization. The model can directly handle continuous numerical features and automatically determine optimal split points based on the data.</p>
                    <p>This allows Decision Trees to capture non-linear relationships and interactions between variables, making them more flexible for modeling complex patterns.</p>
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

            {/* 3. Code */}
            <section className="model-section">
                <h2>3. Code</h2>
                <a href="#" className="code-link">[Placeholder Link to Decision Tree Python script in the Code Repository]</a>
            </section>

            {/* 4. Results */}
            <section className="model-section">
                <h2>4. Results</h2>

                <div className="results-list" style={{ marginTop: '1.5rem' }}>
                    <div className="result-item" style={{ marginBottom: '3rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Tree 1 - Gini
                        </h3>

                        <div className="visual-block" style={{ marginBottom: '2.5rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src="/DT/gini_tree.png" alt="Gini Decision Tree" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                        </div>

                        <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Confusion Matrix</h3>
                        <pre style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[81 14  0]
 [42 12  0]
 [ 1  0  0]]`}
                        </pre>
                        
                        <h3 style={{ marginTop: '3rem', color: 'var(--text-primary)' }}>Accuracy</h3>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Gini Tree Accuracy:</strong> 0.62</li>
                        </ul>
                        <div className="results-summary text-content" style={{ marginTop: '2.5rem', background: 'rgba(139, 92, 246, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                            <p style={{ margin: 0 }}>
                                The accuracy of the Gini-based Decision Tree was 62%, with wind speed as the most significant feature. The model has good classification performance for the majority class, where Severity is 2. However, it has poor classification performance for other severity levels, as shown in the confusion matrix.
                            </p>
                        </div>
                    </div>

                    <div className="result-item" style={{ marginBottom: '3rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Tree 2 - Entropy
                        </h3>

                        <div className="visual-block" style={{ marginBottom: '2.5rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src="/DT/entropy.png" alt="Entropy Decision Tree" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                        </div>

                        <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Confusion Matrix</h3>
                        <pre style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[95  0  0]
 [53  1  0]
 [ 1  0  0]]`}
                        </pre>
                        
                        <h3 style={{ marginTop: '3rem', color: 'var(--text-primary)' }}>Accuracy</h3>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Entropy Tree Accuracy:</strong> 0.64</li>
                        </ul>
                        <div className="results-summary text-content" style={{ marginTop: '2.5rem', background: 'rgba(139, 92, 246, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                            <p style={{ margin: 0 }}>
                                The accuracy of the Entropy-based Decision Tree was 64%, slightly higher than the Gini model. Although the model uses the same parameters like wind speed and temperature, the main prediction remains the majority class, i.e., Severity = 2. The confusion matrix shows little improvement in the separation of classes. The parameters like wind speed and temperature are not sufficient to predict the severity.
                            </p>
                        </div>
                    </div>

                    <div className="result-item" style={{ marginBottom: '3rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Tree 3 - Removed Feature
                        </h3>

                        <div className="visual-block" style={{ marginBottom: '2.5rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src="/DT/Removed_feature.png" alt="Removed Feature Decision Tree" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                        </div>

                        <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Confusion Matrix</h3>
                        <pre style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[78 17  0]
 [43 11  0]
 [ 1  0  0]]`}
                        </pre>
                        
                        <h3 style={{ marginTop: '3rem', color: 'var(--text-primary)' }}>Accuracy</h3>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Alt Tree Accuracy:</strong> 0.5933333333333334</li>
                        </ul>
                        <div className="results-summary text-content" style={{ marginTop: '2.5rem', background: 'rgba(139, 92, 246, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                The accuracy of the Decision Tree model, which was built based on the reduced feature set without wind speed, is found to be 59.33%, which is relatively lower compared to both the Gini and Entropy models. In this model, temperature is identified as the root node, indicating that without wind speed, temperature is the most dominant feature in predicting accident severity.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                From the confusion matrix, it is evident that even without wind speed, the model is able to predict the majority class, i.e., Severity = 2, but with relatively lower accuracy compared to the previous models. The model is even more challenged when it comes to predicting other severity levels, indicating the importance of wind speed as an essential feature in predicting accident severity.
                            </p>
                            <p style={{ margin: 0 }}>
                                It is evident from this model, without wind speed, that the performance of the model is reduced, indicating the importance of wind speed as an essential feature in predicting accident severity. However, it is evident from this model as well that even with reduced features, the model is limited in its ability to differentiate between classes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Conclusions */}
            <section className="model-section">
                <h2>5. Conclusions</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        The Decision Tree analysis proves that weather-related features like wind speed, temperature, humidity, and visibility do have an impact on patterns related to traffic accidents. However, these features are not good predictors of accident severity. From all the models, wind speed was found to be the most important feature.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        It was found that all the models have a tendency to classify the majority class (i.e., Severity = 2) based on the confusion matrices. This proves the effect of class imbalance. This proves that the data does not have good separable patterns based solely on weather-related features. This is because, despite the use of different splitting criteria and features, the overall behavior of all the models is similar.
                    </p>
                    <p style={{ margin: 0 }}>
                        The results have shown that while Decision Trees have an added advantage over other machine learning algorithms due to their interpretability and ability to identify good patterns between variables, weather-related features are not good predictors of accident severity. This proves that other factors like traffic density, driver behavior, and road conditions might be required to create good prediction models.
                    </p>
                </div>
            </section>

            <style>{`
                .results-grid.triple {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }
                .mt-4 {
                    margin-top: 1.5rem;
                }
                @media (max-width: 900px) {
                    .results-grid.triple {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default DecisionTrees;
