import React from 'react';

const RegressionTab = () => {
    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Regression</h1>
            </header>

            {/* 1. Concepts */}
            <section className="model-section">
                <h2>1. Concepts</h2>
                <div className="text-content">
                    <h3>(a) Linear Regression</h3>
                    <p>Linear regression models the relationship between a continuous output variable and one or more input variables by fitting a straight line (or hyperplane) through the data. The goal is to find coefficients that minimize the sum of squared differences between predicted and actual values (ordinary least squares). It assumes a linear relationship and produces a continuous output, like predicting house prices or temperatures.</p>

                    <h3>(b) Logistic Regression</h3>
                    <p>Despite its name, logistic regression is a classification algorithm used to predict the probability that an input belongs to a particular class (e.g., spam/not spam). Instead of fitting a line to raw outputs, it models the log-odds of the outcome as a linear combination of inputs. The output is always a probability between 0 and 1, and a threshold (typically 0.5) converts it to a class label.</p>

                    <h3>(c) Similarities and Differences</h3>
                    <p>Both are linear models that compute a weighted sum of input features, making them interpretable and computationally efficient. The key difference is in the output: linear regression predicts a continuous value, while logistic regression predicts a probability for a discrete class. They also differ in loss functions linear uses mean squared error; logistic uses log-loss (cross-entropy).</p>

                    <h3>(d) The Sigmoid Function</h3>
                    <p>Logistic regression uses the sigmoid function to squash the linear combination of inputs into the (0, 1) range. The sigmoid is defined as σ(z) = 1 / (1 + e⁻ᶻ), where z is the linear term (wᵀx + b). This S-shaped curve maps any real number to a valid probability, which is what makes logistic regression suitable for classification tasks.</p>

                    <h3>(e) Maximum Likelihood and Logistic Regression</h3>
                    <p>Logistic regression is trained by maximizing the likelihood of observing the training labels given the model's predicted probabilities. For each example, the model assigns a probability to the true label, and the likelihood is the product of these probabilities across all training samples. Because maximizing a product is numerically unstable, we instead maximize the log-likelihood, which is equivalent to minimizing the cross-entropy loss. This is what gradient descent optimizes during training making maximum likelihood the theoretical foundation for how logistic regression learns its parameters.</p>
                </div>
            </section>

            {/* 2. Data Preparation */}
            <section className="model-section">
                <h2>2. Data Preparation</h2>
                <div className="text-content">
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', marginTop: '1.5rem' }}>Dataset Description</h3>
                    <p>The dataset used for the regression analysis is the same merged California accident and weather dataset, which combines traffic accident records with corresponding environmental conditions obtained through the OpenWeather API. For this analysis, the original accident severity variable was transformed into a binary classification problem to meet the requirements of Logistic Regression.</p>
                    
                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>The target variable was converted into two categories:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li><strong>0 (Low Severity):</strong> Severity = 2</li>
                        <li><strong>1 (High Severity):</strong> Severity ≥ 3</li>
                    </ul>
                    
                    <p style={{ marginBottom: '1.5rem' }}>The goal of this transformation is to simplify the prediction task and allow the model to classify accidents into low and high severity categories.</p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Feature Selection</h3>
                    <p>The same quantitative weather-related features were used as input variables:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Temperature (temp_f)</li>
                        <li>Humidity</li>
                        <li>Visibility</li>
                        <li>Wind Speed</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem' }}>These features represent environmental conditions that may influence the likelihood and severity of traffic accidents.</p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Training and Testing Split</h3>
                    <p>The dataset was divided into a training set (70%) and a testing set (30%). The training set is used to train the Logistic Regression and Naive Bayes models, while the testing set is used to evaluate their performance on unseen data.</p>
                    <p style={{ marginBottom: '1.5rem' }}>It is important that the training and testing sets remain disjoint, meaning they do not share any overlapping data points. This ensures that the models are evaluated fairly and do not simply memorize patterns from the training data.</p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Data Characteristics for Logistic Regression</h3>
                    <p>Logistic Regression requires a binary labeled dataset and works best with numerical input features. The selected weather variables were already continuous and did not require additional transformation for Logistic Regression.</p>
                    <p>However, for comparison purposes, a separate version of the dataset was created for Multinomial Naive Bayes by discretizing the continuous features into categorical bins. This highlights the difference in data requirements between models and demonstrates how preprocessing can impact model performance.</p>
                </div>


            </section>

            {/* 3. Code */}
            <section className="model-section">
                <h2>3. Code</h2>
                <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/regression.ipynb" className="code-link" target="_blank" rel="noopener noreferrer">Regression Code (Jupyter Notebook)</a>
            </section>

            {/* 4. Results */}
            <section className="model-section">
                <h2>4. Results</h2>
                <div className="results-list" style={{ marginTop: '1.5rem' }}>
                    <div className="result-item" style={{ marginBottom: '3rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Logistic Regression
                        </h3>

                        <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Confusion Matrix</h3>
                        <pre style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[86  9]
 [52  3]]`}
                        </pre>
                        
                        <h3 style={{ marginTop: '3rem', color: 'var(--text-primary)' }}>Accuracy</h3>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Logistic Regression Accuracy:</strong> 0.5933333333333334</li>
                        </ul>
                        
                        <div className="results-summary text-content" style={{ marginTop: '2.5rem', background: 'rgba(139, 92, 246, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                The Logistic Regression model achieved an accuracy of approximately 59.33%. The confusion matrix shows that the model is able to correctly classify a significant portion of the low severity class (0), but struggles with the high severity class (1).
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>Specifically:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                <li>Many high severity cases are misclassified as low severity</li>
                                <li>The model shows limited ability to detect severe accidents</li>
                            </ul>
                            <p style={{ margin: 0 }}>
                                This indicates that while Logistic Regression captures some linear relationships between weather features and accident severity, it lacks strong predictive power for distinguishing between the two classes.
                            </p>
                        </div>
                    </div>

                    <div className="result-item" style={{ marginBottom: '3rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            <span style={{ color: '#4f83cc' }}>🔹</span> Multinomial Naive Bayes
                        </h3>

                        <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Confusion Matrix</h3>
                        <pre style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                            {`[[95  0]
 [55  0]]`}
                        </pre>
                        
                        <h3 style={{ marginTop: '3rem', color: 'var(--text-primary)' }}>Accuracy</h3>
                        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Multinomial NB Accuracy:</strong> 0.6333333333333333</li>
                        </ul>
                        
                        <div className="results-summary text-content" style={{ marginTop: '2.5rem', background: 'rgba(139, 92, 246, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                The Multinomial Naive Bayes model achieved an accuracy of approximately 63.33%. The confusion matrix shows that the model is able to correctly classify a significant portion of the low severity class (0), but struggles with the high severity class (1).
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>Specifically:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                <li>Many high severity cases are misclassified as low severity</li>
                                <li>The model shows limited ability to detect severe accidents</li>
                            </ul>
                            <p style={{ margin: 0 }}>
                                This indicates that while Multinomial Naive Bayes captures some relationships between weather features and accident severity, it lacks strong predictive power for distinguishing between the two classes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Conclusions */}
            <section className="model-section">
                <h2>5. Conclusions</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>The regression analysis indicates that the weather features on their own do not make for effective predictors for accident severity, even when the problem is reduced to a binary classification problem. The Logistic Regression algorithm, though showing some promise for distinguishing between low and high severity accident cases, does not perform too well.</p>
                    <p style={{ margin: 0 }}>The Multinomial Naive Bayes algorithm, though showing a higher accuracy rate, does not recognize the high severity accident cases at all. Again, the problem of class imbalance is evident. Therefore, the results indicate that in order to make a more effective predictive model for accident severity in California, additional features will be required.</p>
                </div>
            </section>

            <style>{`
                .results-grid.triple {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }
                .results-grid.double {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }
                @media (max-width: 900px) {
                    .results-grid.triple, .results-grid.double {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default RegressionTab;
