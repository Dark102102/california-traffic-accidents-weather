import React from 'react';

const SVM = () => {
    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Support Vector Machine (SVM)</h1>
            </header>

            {/* 1. Overview */}
            <section className="model-section">
                <h2>1. Overview</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        Support Vector Machine (SVM) refers to a machine learning algorithm that falls under the supervised approach to learning. In this technique, we seek to find an optimal boundary, which is also called a hyperplane, that will separate various classes.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        SVMs are considered linear separators since this algorithm attempts to separate data using a line (or a plane when working in two-dimensional space). SVMs aim at maximizing the margin, which is defined as the distance between the decision boundary and support vectors.
                    </p>
                </div>

                <div className="visual-block" style={{ marginBottom: '3rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/SVM/SVM-LINEAR.jpg" alt="SVM Linear" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                </div>

                {/* Kernel Trick */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Kernel Trick</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        When data is not linearly separable, SVM uses a kernel to map data into a higher-dimensional space where it becomes separable.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        The kernel works using the dot product, which measures similarity between points:
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                        K(x, z) = ϕ(x) ⋅ ϕ(z)
                    </div>
                    <p style={{ marginBottom: '2.5rem' }}>
                        This allows SVM to work in higher dimensions without explicitly transforming the data.
                    </p>
                </div>

                {/* Common Kernel */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Common Kernel</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Polynomial Kernel:</strong>
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                        K(x, z) = (x ⋅ z + r)<sup>d</sup>
                    </div>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>RBF Kernel:</strong>
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                        K(x, z) = exp(-γ||x - z||<sup>2</sup>)
                    </div>
                </div>

                <div className="visual-block" style={{ marginBottom: '2.5rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/SVM/SVM-KERNEL.jpg" alt="SVM Kernel" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                </div>
            </section>

            {/* 2. Data Preparation */}
            <section className="model-section">
                <h2>2. Data Preparation</h2>
                
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Labeled Data (Supervised Learning)</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        Support Vector Machines (SVM) are supervised learning models, which means they require labeled data.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        In this project, the label (target variable) is: <strong>Severity</strong>
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>Each data point contains:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li><strong>Input features:</strong> temperature (temp_f), humidity, visibility, wind speed, rain (rain_1h), and weather conditions</li>
                        <li><strong>Output label:</strong> Severity (accident severity level)</li>
                    </ul>
                    <p>
                        Only labeled data can be used because the model learns by mapping input features to known outcomes.
                    </p>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Sample of data</h3>
                <div style={{ overflowX: 'auto', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1rem' }}>
                    <table style={{ width: '100%', minWidth: '1000px', borderCollapse: 'collapse', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                                <th style={{ padding: '0.5rem' }}>Start_Lat</th>
                                <th style={{ padding: '0.5rem' }}>Start_Lng</th>
                                <th style={{ padding: '0.5rem' }}>Start_Time</th>
                                <th style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>Severity</th>
                                <th style={{ padding: '0.5rem' }}>weather_main</th>
                                <th style={{ padding: '0.5rem' }}>weather_desc</th>
                                <th style={{ padding: '0.5rem' }}>temp_f</th>
                                <th style={{ padding: '0.5rem' }}>humidity</th>
                                <th style={{ padding: '0.5rem' }}>wind_speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>38.362831</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-122.267197</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>2016-12-09 05:25:36</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>Clear</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>clear sky</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>60.03</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>77</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>6.91</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>34.022625</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-118.156616</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>2016-07-12 10:55:04</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>Clear</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>clear sky</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>65.93</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>40</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>4.61</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>38.254620</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-122.335907</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>2016-06-06 11:20:16</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>Clear</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>clear sky</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>60.04</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>76</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>6.91</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>38.003071</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-121.337051</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>2016-12-17 09:25:08</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>Clear</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>clear sky</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>58.32</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>78</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>9.22</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.403236</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-122.046913</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>2016-11-04 11:01:44</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>Clear</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>clear sky</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>60.51</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>72</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>8.05</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="text-content" style={{ marginBottom: '4rem', display: 'flex', gap: '1rem' }}>
                    <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/accidents_weather_ca_merged.csv" target="_blank" rel="noopener noreferrer" className="data-link primary">View Full Dataset</a>
                    <a href="https://github.com/Dark102102/california-traffic-accidents-weather/blob/ml/svm.ipynb" target="_blank" rel="noopener noreferrer" className="code-link">View Code</a>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Numeric Data Requirement (SVM)</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        SVM requires numeric data because it relies on mathematical operations such as dot products and distance calculations.
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>To prepare the data:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Numerical features (temperature, humidity, etc.) were used directly</li>
                        <li>Categorical features (weather_main, weather_desc) were converted into numeric form using one-hot encoding</li>
                    </ul>
                    <p>
                        This ensures all inputs are in a format suitable for SVM.
                    </p>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Training and Testing Sets</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>The dataset was split into:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        <li><strong>Training Set:</strong> 80%</li>
                        <li><strong>Testing Set:</strong> 20%</li>
                    </ul>
                </div>

                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Training Dataset Sample</h4>
                <div style={{ overflowX: 'auto', marginBottom: '2.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1rem' }}>
                    <table style={{ width: '100%', minWidth: '1200px', borderCollapse: 'collapse', fontSize: '0.8rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono, monospace)' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                                <th style={{ padding: '0.5rem' }}>lat</th>
                                <th style={{ padding: '0.5rem' }}>lon</th>
                                <th style={{ padding: '0.5rem' }}>temp_f</th>
                                <th style={{ padding: '0.5rem' }}>humidity</th>
                                <th style={{ padding: '0.5rem' }}>wind_speed</th>
                                <th style={{ padding: '0.5rem' }}>weather_main_Clouds</th>
                                <th style={{ padding: '0.5rem' }}>weather_desc_clear sky</th>
                                <th style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>Severity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.711315</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-122.167976</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>60.24</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>72</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>8.05</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>3</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.700890</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-121.922325</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>58.37</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>71</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>4.61</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>3</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>38.574345</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-121.401512</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>58.50</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>76</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>12.66</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.983276</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-121.300659</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>58.03</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>80</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>9.22</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.867458</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-122.198204</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>57.11</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>72</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>8.05</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Testing Dataset Sample</h4>
                <div style={{ overflowX: 'auto', marginBottom: '3rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1rem' }}>
                    <table style={{ width: '100%', minWidth: '1200px', borderCollapse: 'collapse', fontSize: '0.8rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono, monospace)' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                                <th style={{ padding: '0.5rem' }}>lat</th>
                                <th style={{ padding: '0.5rem' }}>lon</th>
                                <th style={{ padding: '0.5rem' }}>temp_f</th>
                                <th style={{ padding: '0.5rem' }}>humidity</th>
                                <th style={{ padding: '0.5rem' }}>wind_speed</th>
                                <th style={{ padding: '0.5rem' }}>weather_main_Clouds</th>
                                <th style={{ padding: '0.5rem' }}>weather_desc_clear sky</th>
                                <th style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>Severity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>33.925053</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-118.024498</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>65.97</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>42</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>4.61</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.701103</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-122.021164</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>59.23</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>69</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>8.05</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>3</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.701363</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-121.849533</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>58.44</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>71</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>4.61</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>3</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.838303</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-121.612190</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>58.21</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>80</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>4.61</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>2</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>37.717979</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>-121.701424</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>56.80</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>77</td>
                                <td style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>4.61</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>False</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-secondary)' }}>True</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-primary)' }}>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Why Training and Testing Sets Must Be Disjoint</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        The training and testing sets must be disjoint (no overlapping data) because:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>The model should not see test data during training</li>
                        <li>Prevents overfitting</li>
                        <li>Ensures accurate and fair evaluation</li>
                    </ul>
                    <p>
                        If the same data appears in both sets, the model may memorize patterns instead of learning them.
                    </p>
                </div>
            </section>

            {/* 3. Results */}
            <section className="model-section">
                <h2>3. Results</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>In this project, Support Vector Machine (SVM) models were tested using three kernels:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Linear Kernel</li>
                        <li>Polynomial Kernel</li>
                        <li>Radial Basis Function (RBF) Kernel</li>
                    </ul>
                    <p style={{ marginBottom: '0.5rem' }}>Each model was evaluated using:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Accuracy score</li>
                        <li>Confusion matrix</li>
                    </ul>
                    <p>Different cost (C) values were tested to find the best performance.</p>
                </div>

                {/* Linear Kernel */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Linear Kernel Results</h3>
                <div className="result-item" style={{ marginBottom: '2.5rem' }}>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        <li><strong>Kernel:</strong> Linear</li>
                        <li><strong>Best Cost (C):</strong> 1</li>
                        <li><strong>Accuracy:</strong> 0.71</li>
                    </ul>
                    <div className="visual-block" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)' }}>
                        <img src="/SVM/LCM.png" alt="Linear Confusion Matrix" />
                    </div>
                    <p>The linear kernel performed the best among all models. This suggests that the data is relatively linearly separable, meaning a straight boundary can separate the classes reasonably well.</p>
                </div>

                {/* Polynomial Kernel */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Polynomial Kernel Results</h3>
                <div className="result-item" style={{ marginBottom: '2.5rem' }}>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        <li><strong>Kernel:</strong> Polynomial (degree = 3)</li>
                        <li><strong>Best Cost (C):</strong> 1</li>
                        <li><strong>Accuracy:</strong> 0.67</li>
                    </ul>
                    <div className="visual-block" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)' }}>
                        <img src="/SVM/PCM.png" alt="Polynomial Confusion Matrix" />
                    </div>
                    <p>The polynomial kernel performed slightly worse than the linear kernel. Although it can capture nonlinear patterns, it may have added unnecessary complexity for this dataset.</p>
                </div>

                {/* RBF Kernel */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>RBF Kernel Results</h3>
                <div className="result-item" style={{ marginBottom: '3rem' }}>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        <li><strong>Kernel:</strong> RBF</li>
                        <li><strong>Best Cost (C):</strong> 1 or 10</li>
                        <li><strong>Accuracy:</strong> 0.67</li>
                    </ul>
                    <div className="visual-block" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)' }}>
                        <img src="/SVM/RBFCM.png" alt="RBF Confusion Matrix" />
                    </div>
                    <p>The RBF kernel also achieved 0.67 accuracy. While it is powerful for nonlinear data, it did not outperform the linear kernel in this case, suggesting the dataset does not require highly complex decision boundaries.</p>
                </div>

                {/* Experimentation */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Experimentation</h3>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>The following cost values were tested for the RBF kernel:</p>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-primary)' }}>
                        <div style={{ marginBottom: '0.5rem' }}>C = 0.01 → Accuracy = 0.62</div>
                        <div style={{ marginBottom: '0.5rem' }}>C = 0.1  → Accuracy = 0.62</div>
                        <div style={{ marginBottom: '0.5rem' }}>C = 1    → Accuracy = 0.67</div>
                        <div>C = 10   → Accuracy = 0.67</div>
                    </div>
                    <p style={{ marginBottom: '0.5rem' }}>Lower C values resulted in lower accuracy, indicating underfitting.</p>
                    <p>Higher C values improved performance by allowing the model to better fit the data.</p>
                </div>

                {/* Kernel Comparison */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Kernel Comparison</h3>
                <div style={{ overflowX: 'auto', marginBottom: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '1rem' }}>
                    <table style={{ width: '100%', minWidth: '400px', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                                <th style={{ padding: '0.75rem' }}>Kernel</th>
                                <th style={{ padding: '0.75rem' }}>Best C</th>
                                <th style={{ padding: '0.75rem', color: 'var(--accent-primary)' }}>Accuracy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>Linear</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>1</td>
                                <td style={{ padding: '0.75rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>0.71</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>Polynomial</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>1</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>0.67</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.75rem', color: 'var(--text-primary)' }}>RBF</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>1 / 10</td>
                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>0.67</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-content" style={{ marginBottom: '3rem' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Best Model</h4>
                    <p style={{ marginBottom: '1.5rem' }}>The Linear Kernel performed the best with an accuracy of 0.71.</p>
                    
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Why?</h4>
                    <p style={{ marginBottom: '0.5rem' }}>This is likely because:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-secondary)' }}>
                        <li>The data is relatively linearly separable</li>
                        <li>Simpler models generalize better on this dataset</li>
                        <li>More complex kernels (Polynomial, RBF) may introduce unnecessary complexity</li>
                    </ul>
                </div>

                {/* Visualization */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Visualization</h3>
                <div className="results-grid" style={{ marginBottom: '2rem' }}>
                    <div className="result-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/SVM/Linear.png" alt="Linear Boundary" style={{ width: '100%', borderRadius: '4px', marginBottom: '1rem' }} />
                        <h4 style={{ textAlign: 'center', color: 'var(--text-primary)', marginTop: 'auto' }}>Linear</h4>
                    </div>
                    <div className="result-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/SVM/Polynomial.png" alt="Polynomial Boundary" style={{ width: '100%', borderRadius: '4px', marginBottom: '1rem' }} />
                        <h4 style={{ textAlign: 'center', color: 'var(--text-primary)', marginTop: 'auto' }}>Polynomial</h4>
                    </div>
                    <div className="result-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/SVM/RBF.png" alt="RBF Boundary" style={{ width: '100%', borderRadius: '4px', marginBottom: '1rem' }} />
                        <h4 style={{ textAlign: 'center', color: 'var(--text-primary)', marginTop: 'auto' }}>RBF</h4>
                    </div>
                </div>
                <div className="text-content" style={{ marginBottom: '4rem' }}>
                    <p>These visualizations show how each kernel separates the data. The linear kernel produces a straight boundary, while polynomial and RBF kernels create more flexible, curved boundaries.</p>
                </div>

                {/* Summary */}
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Summary</h3>
                <div className="text-content">
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-secondary)' }}>
                        <li>Three kernels were tested: Linear, Polynomial, and RBF</li>
                        <li>Linear kernel achieved the highest accuracy (0.71)</li>
                        <li>Polynomial and RBF kernels performed slightly lower (0.67)</li>
                        <li>Cost tuning improved performance for RBF</li>
                        <li>The dataset appears to be mostly linearly separable</li>
                    </ul>
                </div>
            </section>

            {/* 4. Conclusion */}
            <section className="model-section" style={{ marginTop: '5rem' }}>
                <h2>4. Conclusion</h2>
                <div className="text-content">
                    <p style={{ marginBottom: '1rem' }}>
                        In this project, the Support Vector Machines were applied to analyze the influence of the weather on the severity of traffic accidents in California. According to the results, the linear model turned out to be the most accurate, which implies that the connection between the considered variables is mainly linear.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        It should be acknowledged that the algorithm allowed to predict the accident severity with an accuracy rate of approximately 70%, which indicates the presence of a connection between the discussed factors. Still, the results are rather unsatisfactory since the prediction precision level is not high enough to conclude that the weather alone plays a significant role in traffic accidents.
                    </p>
                    <p>
                        As a conclusion, it should be admitted that the use of machine learning models allows determining the dependencies that exist in the data sets. However, practical problems may be complicated due to multiple factors that need to be analyzed.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SVM;
