const ModelLayout = ({ title }) => {
    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>{title}</h1>
            </header>

            {/* 1) Overview */}
            <section className="model-section">
                <h2>1. Overview</h2>
                <p className="placeholder-text">[Placeholder text explaining the {title} model/method conceptually]</p>
            </section>

            {/* 2) Data */}
            <section className="model-section">
                <h2>2. Data</h2>
                <div className="visual-block">
                    <div className="placeholder-image">Placeholder image for prepared dataset</div>
                </div>
                <div className="link-group">
                    <a href="#" className="data-link">[Raw Data Link]</a>
                    <a href="#" className="data-link primary">[Clean Data Link]</a>
                </div>
            </section>

            {/* 3) Code */}
            <section className="model-section">
                <h2>3. Code</h2>
                <a href="#" className="code-link">[GitHub Code Repository]</a>
                <div className="code-metadata">
                    <p><strong>Language:</strong> Python</p>
                    <p><strong>Core Packages:</strong> [Placeholder]</p>
                </div>
            </section>

            {/* 4) Results */}
            <section className="model-section">
                <h2>4. Results</h2>
                <div className="visual-block">
                    <div className="placeholder-image">Placeholder image for results visualization</div>
                </div>
                <p className="placeholder-text">[Placeholder explanation text]</p>
            </section>
        </div>
    );
};

export default ModelLayout;
