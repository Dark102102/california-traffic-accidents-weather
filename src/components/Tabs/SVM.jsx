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
        </div>
    );
};

export default SVM;
