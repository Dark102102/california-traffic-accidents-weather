import React, { useState } from 'react';
import ImageModal from '../Layout/ImageModal';

const PCA = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Principal Component Analysis (PCA)</h1>
            </header>

            {/* 1. Introduction to PCA */}
            <section className="data-section">
                <h2>1. What is PCA?</h2>
                <div className="card">
                    <p>
                        Principal Component Analysis (PCA) is an unsupervised machine learning technique used primarily for dimensionality reduction. It transforms a high-dimensional dataset containing possibly correlated variables into a smaller set of linearly uncorrelated variables, called principal components. These components are created in such a way that the first few retain most of the variation originally present in all the original variables. This simplification makes it easier to explore and visualize complex data, reduces noise, and improves the computational efficiency of subsequent machine learning models without losing significant information.
                    </p>
                </div>
            </section>

            {/* 2. Dataset Selection */}
            <section className="data-section">
                <h2>2. Dataset Selection</h2>
                <div className="card">
                    <p>For this PCA analysis, the accidents_weather_ca_merged.csv was selected because it contains multiple continuous variables ideal for dimensionality reduction.</p>
                    <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/accidents_weather_ca_merged.csv" target="_blank" rel="noopener noreferrer" className="data-link">Link to the Chosen Dataset</a>
                </div>
                <div className="visual-block">
                    <div className="image-container">
                        <img
                            src="/PCA/Initial before Pca.png"
                            alt="Dataset Preview"
                            className="styled-image"
                            onClick={() => setSelectedImage({ src: "/PCA/Initial before Pca.png", alt: "Dataset Preview" })}
                        />
                    </div>
                </div>
            </section>

            {/* 3. Data Formatting (Quantitative & No Labels) */}
            <section className="data-section">
                <h2>3. Data Formatting</h2>
                <div className="card">
                    <p>
                        To properly apply PCA, the data must be strictly quantitative. All categorical labels and non-numeric columns (such as text descriptions or target variables) were removed from this dataset.
                    </p>
                    <p><a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/pca_dataset_clean.csv" target="_blank" rel="noopener noreferrer" className="data-link">View Cleaned & Prepared Data</a></p>
                </div>
                <div className="visual-block">
                    <div className="image-container">
                        <img
                            src="/PCA/PCA CLEANED DATASET.png"
                            alt="Cleaned Quantitative Data"
                            className="styled-image"
                            onClick={() => setSelectedImage({ src: "/PCA/PCA CLEANED DATASET.png", alt: "Cleaned Quantitative Data" })}
                        />
                    </div>
                </div>
            </section>

            {/* 4. Normalization */}
            <section className="data-section">
                <h2>4. Data Normalization</h2>
                <div className="card">
                    <p>
                        Prior to performing PCA, the data was scaled using Sklearn's <code>StandardScaler</code>. Standardization ensures that all features are centered around a mean of 0 with a standard deviation of 1, allowing each feature to contribute equally to the variance calculations.
                    </p>
                </div>
            </section>

            {/* 5, 6, 7. Perform PCA & Visualizations */}
            <section className="data-section">
                <h2>5. PCA Implementation & Visualizations</h2>
                <p>PCA was performed on the normalized dataset multiple times, specifically extracting <code>n_components=2</code> and <code>n_components=3</code> for visualization purposes.</p>

                <div className="eda-grid">
                    <div className="eda-card">
                        <div className="card-header">
                            <h3>2D PCA Visualization (n_components=2)</h3>
                        </div>
                        <div className="image-container">
                            <img
                                src="/PCA/2D projection.png"
                                alt="2D PCA Visualization"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/PCA/2D projection.png", alt: "2D PCA Visualization" })}
                            />
                        </div>
                    </div>

                    <div className="eda-card">
                        <div className="card-header">
                            <h3>3D PCA Visualization (n_components=3)</h3>
                        </div>
                        <div className="image-container">
                            <img
                                src="/PCA/3D projection.png"
                                alt="3D PCA Visualization"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/PCA/3D projection.png", alt: "3D PCA Visualization" })}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8, 9. Retained Information */}
            <section className="data-section">
                <h2>6. Information Retention (Explained Variance)</h2>

                <div className="eda-grid">
                    <div className="eda-card">
                        <div className="card-header">
                            <h3>Variance in 2D Dataset</h3>
                        </div>
                        <p style={{ padding: '0 1.5rem' }}>After reducing the data set to two principal components, the cumulative explained variance is 67.98%. This indicates that about 68% of the total information (variance) from the original data set is retained in the 2D representation. Although some information is lost in reducing the dimensionality, the majority of the data set’s variability is retained in two dimensions.</p>
                        <div className="image-container">
                            <img
                                src="/PCA/Variation 2D.png"
                                alt="2D Cumulative Variance Output"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/PCA/Variation 2D.png", alt: "2D Cumulative Variance Output" })}
                            />
                        </div>
                    </div>

                    <div className="eda-card">
                        <div className="card-header">
                            <h3>Variance in 3D Dataset</h3>
                        </div>
                        <p style={{ padding: '0 1.5rem' }}>Once the dataset is reduced to three dimensions, the cumulative explained variance for each of the dimensions is 91.58%. This indicates that approximately 91.6% of the total information (variance) in the original dataset is preserved in this 3D representation. This figure represents a considerable increase in preserved information compared to the 2D representation, which was at 67.98%.</p>
                        <div className="image-container">
                            <img
                                src="/PCA/Variaton 3D.png"
                                alt="3D Cumulative Variance Output"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/PCA/Variaton 3D.png", alt: "3D Cumulative Variance Output" })}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Dimensions for 95% Variance */}
            <section className="data-section">
                <h2>7. Dimensions Required for 95% Variance</h2>
                <div className="card">
                    <p>
                        To retain at least 95% of the total variance present in the dataset, 4 components are needed.
                    </p>
                    <p>
                        If we add the variance contributed by the first three components, the total variance is around 91.58%, which is still not meeting the 95% mark. However, with the addition of the fourth component, the total variance is 100%, which is above the 95% mark.
                    </p>
                    <p>
                        This shows us that almost all the variance is spread across all the original four quantitative features.
                    </p>
                </div>
                <div className="visual-block">
                    <div className="image-container">
                        <img
                            src="/PCA/95 percent.png"
                            alt="Cumulative Explained Variance Plot"
                            className="styled-image"
                            onClick={() => setSelectedImage({ src: "/PCA/95 percent.png", alt: "Cumulative Explained Variance Plot" })}
                        />
                    </div>
                </div>
            </section>

            {/* 11. Top Three Eigenvalues */}
            <section className="data-section">
                <h2>8. Top Three Eigenvalues</h2>
                <div className="card">
                    <p>The top three eigenvalues represent the magnitude of variance captured by the first three principal components respectively. These values demonstrate the amount of spread in the data along the corresponding new axes.</p>
                </div>
                <div className="visual-block">
                    <div className="image-container">
                        <img
                            src="/PCA/Eigen Values.png"
                            alt="Top Three Eigenvalues Output"
                            className="styled-image"
                            onClick={() => setSelectedImage({ src: "/PCA/Eigen Values.png", alt: "Top Three Eigenvalues Output" })}
                        />
                    </div>
                </div>
            </section>

            {/* 9. Conclusions */}
            <section className="data-section">
                <h2>9. Conclusions</h2>
                <div className="card">
                    <p>Association Rule Mining is used in the project to establish the relationship between different kinds of weather conditions and accident characteristics. Association Rule Mining can establish this relationship by using a transactional format of the data. Association Rule Mining can then be used to establish what kinds of different weather conditions occur in accident scenarios.</p>
                    <p>The Association Rule Mining algorithm used in the project will be based on the Apriori algorithm. This algorithm will be used to generate rules based on support, confidence, and lift. The rules generated by Association Rule Mining will be able to establish an association between different kinds of weather conditions. For example, Association Rule Mining will be able to establish an association between medium visibility, high winds, and accident severity.</p>
                    <p>The difference between Association Rule Mining and predictive algorithms lies in the fact that Association Rule Mining is not used for prediction. Association Rule Mining will be used in the project to establish co-occurring patterns between different kinds of environmental factors. This will be able to provide valuable insights into different kinds of environmental factors.</p>
                </div>
            </section>

            {/* Image Modal for zooming */}
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src}
                altText={selectedImage?.alt}
            />
        </div>
    );
};

export default PCA;
