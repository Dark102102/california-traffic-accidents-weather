import React, { useState } from 'react';
import ImageModal from '../Layout/ImageModal';

const Clustering = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Clustering Analysis</h1>
            </header>

            {/* Overview */}
            <section className="data-section">
                <h2>Overview</h2>
                <div className="card">
                    <p>Clustering is used in this project to identify hidden patterns and group similar accident conditions based on weather-related features such as temperature, humidity, visibility, and wind speed. Unlike supervised learning methods, clustering does not rely on labeled data, allowing the model to uncover natural groupings in the dataset.</p>
                    <p>By applying clustering techniques such as KMeans, Hierarchical Clustering, and DBSCAN, the project aims to explore whether accidents occurring under similar environmental conditions form distinct groups. These clusters help reveal patterns that may not be immediately visible through traditional analysis, such as regions of high accident density or combinations of weather conditions that frequently occur together.</p>
                    <p>Additionally, clustering results are compared with actual accident severity labels to evaluate whether natural groupings align with severity levels. This helps assess whether weather conditions alone can meaningfully differentiate accident outcomes.</p>
                </div>

                <div className="cleaning-subsections" style={{ marginTop: '2rem' }}>
                    <h3>Common Terminologies</h3>
                    
                    <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>What is Clustering</h4>
                    <div className="card" style={{ marginBottom: '1.5rem' }}>
                        <p>Clustering is an unsupervised learning technique used to group similar data points together based on their characteristics. Unlike supervised learning methods, clustering does not rely on labeled data. Instead, it identifies natural patterns and structures within the dataset.</p>
                        <p>In this project, clustering is used to group traffic accidents based on weather-related features such as temperature, humidity, visibility, and wind speed. This helps reveal underlying patterns in accident conditions without relying on predefined severity labels.</p>
                    </div>

                    <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Distance Metrics in Clustering</h4>
                    <div className="card">
                        <p>Distance metrics are used to measure how similar or different two data points are. These metrics are fundamental to clustering algorithms, as they determine how clusters are formed.</p>
                        <p>The most commonly used distance metric is Euclidean distance, which measures the straight-line distance between two points in space. It is widely used in algorithms such as KMeans.</p>
                        <p>Another commonly used metric is Manhattan distance, which measures distance as the sum of absolute differences across dimensions. This metric is useful when movement is constrained along axes, such as grid-like structures.</p>
                        <p>Different clustering algorithms may use different distance measures. For example, KMeans relies on Euclidean distance, while DBSCAN uses density-based distance concepts to identify clusters and noise.</p>
                    </div>

                    <div className="eda-grid" style={{ marginTop: '1.5rem' }}>
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>Distance Metrics Diagram</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/clustering/image 1.png"
                                    alt="Distance Metrics Diagram"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/clustering/image 1.png", alt: "Distance Metrics Diagram" })}
                                />
                            </div>
                        </div>
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>KMeans Scatter Plot</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/clustering/image2.png"
                                    alt="KMeans Scatter Plot Colored Clusters"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/clustering/image2.png", alt: "KMeans Scatter Plot Colored Clusters" })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A. Algorithm Comparison */}
            <section className="data-section">
                <h2>A. Clustering Algorithms: Compare and Contrast</h2>
                <div className="card">
                    <p><strong>Partitioning (K-Means):</strong> KMeans is a cluster-based unsupervised learning algorithm. This algorithm divides the data into a certain number of clusters (k) based on minimum variance within the cluster. In this algorithm, the cluster centers are updated iteratively. This algorithm works well for clusters of equal size and spherical in shape. However, this algorithm requires the number of clusters to be defined in advance.</p>
                    <p><strong>Hierarchical Clustering:</strong> In hierarchical clustering, clusters are constructed in a tree-like structure in which clusters are either combined (agglomerative) or split (divisive). The output is usually represented in a dendrogram that illustrates how clusters are formed at different distances. Hierarchical clustering does not require the determination of the number of clusters beforehand but is computationally expensive.</p>
                    <p><strong>DBSCAN (Density-Based):</strong> DBSCAN is a density-based clustering method that groups the data based on density. It identifies the areas of high density and separates them from the areas of low density. It doesn’t require the number of clusters to be defined beforehand. Also, it can find the noisy and outlier points. However, the method works best for non-spherical clusters. In addition, the values of eps and the number of samples must be appropriately set.</p>
                </div>
            </section>

            {/* B. Data Preparation */}
            <section className="data-section">
                <h2>B. Data Preparation</h2>

                <div className="cleaning-subsections">
                    <h3>1. Initial Labeled Dataset</h3>
                    <div className="visual-block">
                        <div className="image-container">
                            <img
                                src="/clustering/OG data.png"
                                alt="Original Labeled Dataset"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/clustering/OG data.png", alt: "Original Labeled Dataset" })}
                            />
                        </div>
                    </div>

                    <h3>2. Quantitative Conversion & Normalization</h3>
                    <div className="visual-block">
                        <div className="image-container">
                            <img
                                src="/clustering/Normalised Data.png"
                                alt="Normalized Quantitative Dataset"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/clustering/Normalised Data.png", alt: "Normalized Quantitative Dataset" })}
                            />
                        </div>
                    </div>

                    <h3>3. PCA Reduction (Optional)</h3>
                    <div className="visual-block">
                        <div className="image-container">
                            <img
                                src="/clustering/Pca.png"
                                alt="3D PCA Reduced Dataset"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/clustering/Pca.png", alt: "3D PCA Reduced Dataset" })}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* C. Code and Results */}
            <section className="data-section">
                <h2>C. Modeling Code & Results</h2>
                <div className="card">
                    <p><a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/Clustering.ipynb" target="_blank" rel="noopener noreferrer" className="code-link">View code</a></p>
                </div>

                <div className="cleaning-subsections">
                    <h3>1. K-Means Clustering & Silhouette Method</h3>
                    <div className="explanation" style={{ marginBottom: '1.5rem' }}>
                        <p>The KMeans clustering model was used on the PCA data set with varying values of k. The Silhouette Method was used to assess the quality of the clusters formed and to find the optimal values of k. The maximum silhouette score was obtained when k = 2 (0.5848). This indicates that the maximum separation and cohesion among the data points are obtained when the data points are grouped into two clusters.</p>
                        <p>As the value of k increases from 2, the silhouette score decreases. This indicates that the quality of separation among the data points decreases when more clusters are formed. Even though the experiment was performed with different values of k to find the finer clusters in the data set, the results obtained from the silhouette method suggest that the underlying structure in the data set representing the weather-related accident data consists of two clusters.</p>
                        <p>The visualizations obtained from the KMeans model suggest that the clusters are formed based on the combination of the weather-related data points rather than the accident severity labels. This indicates that although the environmental conditions have a structured pattern in the data set, the accident severity labels do not have a structured pattern in the data set.</p>
                    </div>

                    <div className="eda-grid">
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>K-Means (k = 3)</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/clustering/K means 1.png"
                                    alt="K-Means Plot 1"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/clustering/K means 1.png", alt: "K-Means Plot 1" })}
                                />
                            </div>
                        </div>
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>K-Means (k = 5)</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/clustering/K means 2.png"
                                    alt="K-Means Plot 2"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/clustering/K means 2.png", alt: "K-Means Plot 2" })}
                                />
                            </div>
                        </div>
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>K-Means (k = 10)</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/clustering/K mean 3.png"
                                    alt="K-Means Plot 3"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/clustering/K mean 3.png", alt: "K-Means Plot 3" })}
                                />
                            </div>
                        </div>
                    </div>

                    <h3>2. Hierarchical Clustering</h3>
                    <div className="explanation" style={{ marginBottom: '1.5rem' }}>
                        <p>Hierarchical clustering was carried out using the Ward linkage method. This method is chosen because it minimizes the variance within the clusters during the merging process. The dendrogram shows how the clusters are created through the merging of similar data points.</p>
                        <p>From the dendrogram above, it is evident that the data is separated into distinct groupings at higher linkage distances. This shows that the data is naturally grouped into several clusters. When the above method is compared with the KMeans method, it is seen that the hierarchical method provides a more detailed picture of the evolution of the clusters at different distance values. Additionally, the hierarchical method does not require the user to specify the number of clusters beforehand. Instead, the user is given a better idea of the groupings through the structure of the dendrogram.</p>
                        <p>Both methods show similar patterns of groupings.</p>
                    </div>
                    <div className="visual-block">
                        <div className="image-container">
                            <img
                                src="/clustering/Hierchical clustering.png"
                                alt="Hierarchical Clustering Dendrogram"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/clustering/Hierchical clustering.png", alt: "Hierarchical Clustering Dendrogram" })}
                            />
                        </div>
                    </div>

                    <h3>3. DBSCAN</h3>
                    <div className="explanation" style={{ marginBottom: '1.5rem' }}>
                        <p>DBSCAN was used as a density-based clustering algorithm. This algorithm differs from KMeans and hierarchical clustering in the sense that it does not require the number of clusters to be predefined. Instead, dense clusters of points are found, and sparse points are classified as noise points.</p>
                        <p>From the visualization of the DBSCAN algorithm, it can be seen that the majority of the points have formed one large dense cluster, with other points forming smaller clusters and some of them classified as noise. This indicates that weather conditions under which accidents occur in California have a tendency to cluster in certain common environmental conditions rather than forming distinct clusters.</p>
                        <p>Compared to KMeans and hierarchical clustering, the DBSCAN algorithm seems to be conservative in forming clusters.</p>
                    </div>
                    <div className="visual-block">
                        <div className="image-container">
                            <img
                                src="/clustering/DB scan.png"
                                alt="DBSCAN Clustering Results"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/clustering/DB scan.png", alt: "DBSCAN Clustering Results" })}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* D. Conclusions */}
            <section className="data-section">
                <h2>D. Conclusions</h2>
                <div className="card">
                    <div className="conclusion-text">
                        <p>The clustering analysis reveals that weather-related accident data in California forms natural groupings based on environmental conditions such as temperature, humidity, visibility, and wind speed. However, these clusters do not strongly correspond to accident severity levels. This indicates that while weather contributes to accident patterns, severity is likely influenced by additional factors beyond the environmental variables analyzed.</p>
                        <p>The PCA reduction demonstrated that over 88% of the dataset’s variance is retained in three dimensions, suggesting that the primary structure of the data can be effectively visualized in reduced space. The clustering results further show that most accidents occur under similar general weather conditions, with fewer extreme environmental patterns forming separate groups.</p>
                        <p>Overall, the clustering analysis suggests that weather conditions contribute to structured patterns in accident data, but they are not the sole determining factor of accident severity. This aligns with the broader understanding that traffic accidents result from a combination of environmental, behavioral, and situational factors.</p>
                    </div>
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

export default Clustering;
