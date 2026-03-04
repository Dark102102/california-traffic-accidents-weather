import React, { useState } from 'react';
import ImageModal from '../Layout/ImageModal';

const ARM = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Association Rule Mining (ARM)</h1>
            </header>

            {/* A. Overview */}
            <section className="data-section">
                <h2>A. Overview of Association Rule Mining</h2>
                <div className="explanation" style={{ marginBottom: '1.5rem' }}>
                    <p><strong>Association Rule Mining (ARM)</strong> explores relationships between items within a dataset, frequently used to identify patterns in transactional data (e.g., market basket analysis). The goal is to uncover "rules" that suggest: <em>"If a user experiences/buys Item A, they are also likely to experience/buy Item B."</em></p>
                    <p>These rules are evaluated using three primary metrics:</p>
                    <ul>
                        <li><strong>Support:</strong> The frequency or probability of items appearing together in the dataset.</li>
                        <li><strong>Confidence:</strong> The conditional probability that consequent items appear given the antecedent item.</li>
                        <li><strong>Lift:</strong> The ratio of the observed support to that expected if the items were independent. A lift &gt; 1 indicates a positive association.</li>
                    </ul>
                    <p><strong>The Apriori Algorithm</strong> is famously used to mine these rules. It operates on the "Apriori property," which states that any subset of a frequent itemset must also be frequent. The algorithm iteratively scans the data to build sets of frequent items of increasing size, saving vast amounts of computational power by pruning subsets that do not meet the minimum support threshold.</p>
                </div>
                <div className="eda-grid">
                    <div className="eda-card">
                        <div className="image-container">
                            <img
                                src="/ARM/ARM1 (1).png"
                                alt="ARM Concepts Overview"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/ARM/ARM1 (1).png", alt: "ARM Concepts Overview" })}
                            />
                        </div>
                    </div>
                    <div className="eda-card">
                        <div className="image-container">
                            <img
                                src="/ARM/ARM1 (2).png"
                                alt="Apriori Algorithm Steps"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/ARM/ARM1 (2).png", alt: "Apriori Algorithm Steps" })}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* B. Data Prep */}
            <section className="data-section">
                <h2>B. Data Preparation</h2>
                <div className="explanation" style={{ marginBottom: '1.5rem' }}>
                    <p>Every machine learning model requires data in a particular format, and this is no different with Association Rule Mining (ARM). Unlike other models, such as clustering or PCA, ARM does not require data in a matrix or a set of labels. Rather, it requires unlabeled data in a transactional format, with each row representing a single transaction and a set of items.</p>
                    <p>In this format, the data is arranged in a way that each row represents a set of attributes or item categories (e.g., High_Wind, Low_Visibility, Severity_3). ARM does not require labels because its use is to determine associations and co-occurrence between items and not to make predictions on them. Continuous numerical variables must be converted to categorical variables before using ARM.</p>
                    <p>This ensures that the data conforms to the structure necessary to run the Apriori algorithm and to derive meaningful association rules. <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/arm_transactions_sample.csv" target="_blank" rel="noopener noreferrer" className="code-link">View the sample transaction dataset</a>.</p>
                </div>
                <div className="visual-block">
                    <div className="image-container">
                        <img
                            src="/ARM/Transaction Dataset.png"
                            alt="Sample Transaction Data Format"
                            className="styled-image"
                            onClick={() => setSelectedImage({ src: "/ARM/Transaction Dataset.png", alt: "Sample Transaction Data Format" })}
                        />
                    </div>
                </div>
            </section>

            {/* C. Code & Results */}
            <section className="data-section">
                <h2>C. Modeling Results</h2>
                <div className="card">
                    <p><a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/ARM.ipynb" target="_blank" rel="noopener noreferrer" className="code-link">View code</a></p>
                </div>

                <div className="cleaning-subsections">
                    <h3>1. Rule Generation Thresholds</h3>
                    <p>For this analysis, a minimum support of 5% or 0.05 was used to only consider the frequently occurring itemsets. Similarly, a minimum confidence of 50% or 0.5 was used for the rules to have enough predictive power.</p>
                    <p>The lift value was not used as a filtering criterion, but the rules with higher lift values indicate stronger positive relationships between the accident and the weather conditions.</p>

                    <h3>2. Top 15 Rules</h3>
                    <div className="eda-grid">
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>Top 15 by Support</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/ARM/support.png"
                                    alt="Top 15 Rules by Support"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/ARM/support.png", alt: "Top 15 Rules by Support" })}
                                />
                            </div>
                        </div>
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>Top 15 by Confidence</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/ARM/Confidence.png"
                                    alt="Top 15 Rules by Confidence"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/ARM/Confidence.png", alt: "Top 15 Rules by Confidence" })}
                                />
                            </div>
                        </div>
                        <div className="eda-card">
                            <div className="card-header">
                                <h4>Top 15 by Lift</h4>
                            </div>
                            <div className="image-container">
                                <img
                                    src="/ARM/lift.png"
                                    alt="Top 15 Rules by Lift"
                                    className="styled-image"
                                    onClick={() => setSelectedImage({ src: "/ARM/lift.png", alt: "Top 15 Rules by Lift" })}
                                />
                            </div>
                        </div>
                    </div>

                    <h3>3. Network Visualization</h3>
                    <div className="explanation" style={{ marginBottom: '1.5rem' }}>
                        <p>From the network, several patterns can be observed:</p>
                        <ul>
                            <li><strong>Medium temperature</strong> is frequently associated with other conditions, implying that many accidents occur under medium temperatures rather than extreme temperatures.</li>
                            <li><strong>High wind</strong> is associated with clear weather and medium visibility, implying that high winds under clear weather might be associated with some patterns of accidents.</li>
                            <li><strong>Severity_2</strong> is strongly associated with medium temperatures and medium visibility, implying that many accidents of medium severity occur under medium temperatures rather than extreme temperatures.</li>
                            <li><strong>Clear weather</strong> is associated with several patterns, implying that accidents are not limited to extreme weather conditions but also occur under normal conditions.</li>
                        </ul>
                    </div>
                    <div className="visual-block">
                        <div className="image-container">
                            <img
                                src="/ARM/Network.png"
                                alt="ARM Network Visualization"
                                className="styled-image"
                                onClick={() => setSelectedImage({ src: "/ARM/Network.png", alt: "ARM Network Visualization" })}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* D. Conclusions */}
            <section className="data-section">
                <h2>D. Conclusions</h2>
                <div className="card">
                    <p>The Association Rule Mining results demonstrate that the most common conditions associated with traffic accidents in California involve moderate weather conditions, specifically medium visibility and moderate temperatures.</p>
                    <p>There were also some high lift rules that involved High Wind conditions with clear or moderate conditions. This would seem to indicate that wind conditions have more impact on the pattern of accidents than precipitation. The lift values for these conditions, which were all above 2.4, demonstrate that these combinations of conditions occurred much more frequently than would be expected by chance.</p>
                    <p>It also appeared that accidents classified as Severity_2 were commonly associated with medium visibility and moderate temperature conditions. It would seem that the severity of accidents in California is not caused by severe storms and extreme weather conditions, as one might expect, but rather by normal conditions.</p>
                    <p>Overall, the Association Rule Mining results demonstrate that while the weather does have an impact on the pattern of accidents, many accidents seem to be caused by normal conditions, and wind and visibility seem to be important factors.</p>
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

export default ARM;
