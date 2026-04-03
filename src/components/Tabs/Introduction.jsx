const Introduction = () => {
    return (
        <div className="tab-content fade-in">
            <header className="tab-header">
                <h1>Traffic Accidents and Weather Conditions in California</h1>
                <div className="title-divider"></div>
                <p className="page-subtitle">Exploring how environmental conditions relate to roadway safety</p>
            </header>

            <div className="content-block">
                <p>
                    Weather conditions have a major impact on road safety, which is determined based on the behavior of drivers, the performance of the vehicle, and the flow of traffic. California is commonly known for its pleasant and favorable climatic conditions. However, the state is subject to adverse climatic conditions such as heavy rainfall, fog, strong winds, and poor visibility. These adverse climatic conditions, which are less common, have a major impact on the driving experience, especially in regions that are not used to such adverse climatic conditions. In such conditions, the driver is likely to experience difficulties in driving on the road. Modern vehicles are equipped with various driver-assistance systems, which brings into question the impact of environmental conditions on the driving experience. It is, therefore, critical to understand the relationship that exists between weather conditions and accidents that occur on the road. This is particularly critical in regions such as California, which is characterized by diverse climatic conditions.
                </p>
            </div>

            <div className="visual-block">
                <div className="content-divider"></div>
                <div className="image-container">
                    <img
                        src="/adverse_driving_conditions_1769667493674.png"
                        alt="Adverse driving conditions with rain and traffic"
                        className="styled-image"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>
                <p className="image-caption">Figure 1: Representation of adverse weather conditions affecting visibility and road safety.</p>
            </div>

            <div className="content-block">
                <p>
                    In most cases, traffic accidents are not caused by just one factor, but they are also affected by various combinations of environmental, human, and situational factors. Weather factors, such as reduced visibility, changes in temperature, wind, and precipitation, can also contribute to the risk factors on the road. California, being a state with heavy traffic, long distances, and varying topography, is no exception to the effects of moderate changes in weather, which can significantly affect road safety. Various studies and reports on road safety have demonstrated the correlation between accidents and bad weather, depending on the circumstances and the location. This helps understand the circumstances under which accidents can occur. By understanding traffic accidents and weather factors, the impact of environmental factors on road safety can be better comprehended, and this can be beneficial in the future.
                </p>
            </div>

            <div className="visual-block">
                <div className="content-divider"></div>
                <div className="image-container">
                    <img
                        src="/ARM/fog crash.png"
                        alt="Fog causing visibility issues leading to crash"
                        className="styled-image"
                    />
                </div>
            </div>

            <div className="content-block">
                <p>
                    Understanding the relationship that exists between the conditions of the weather and the occurrence of traffic accidents within California is essential not only for identifying the risk factors associated with the occurrence of accidents within the state, but also for ensuring that the prevention strategies for these accidents are enhanced. The fact that California has a large population and extensive highway systems means that the conditions under which people drive within the state are quite complex. Therefore, understanding the relationship that exists between the conditions of the weather and the occurrence of accidents within the state would enable the identification of the various patterns that exist within the state regarding the occurrence of accidents. Additionally, as the technologies used for vehicles become more sophisticated, the importance of understanding the influence of the conditions of the weather becomes more pronounced for the evaluation of the efficiency of these technologies. Therefore, the exploration of the relationship that exists between the conditions of the weather and the occurrence of accidents within California would enable a better understanding of the various factors that influence the conditions of the weather and the occurrence of accidents within the state.
                </p>
            </div>

            <div className="content-block">
                <p>
                    Understanding these patterns is particularly significant in terms of contemporary transportation systems and reliance on technology-assisted driving. As vehicles are becoming increasingly sophisticated with driver-assistance systems and automation technologies, it is particularly significant to assess their performance in terms of environmental factors. Weather-related factors such as wind, visibility, and temperatures may affect not just drivers but also these technologies. By analyzing accident data with reference to weather-related factors, this project aims to offer significant insights that can contribute to safe driving practices, environmental awareness, and development of robust technologies for transportation systems in California.
                </p>
            </div>

            <section className="research-questions">
                <h2>Research Questions</h2>
                <ol>
                    <li>How do different weather conditions relate to the frequency of traffic accidents in California?</li>
                    <li>Is accident severity associated with changes in visibility during adverse weather conditions?</li>
                    <li>How do temperature variations relate to traffic accident severity across California?</li>
                    <li>What relationship exists between wind speed and the severity of traffic accidents?</li>
                    <li>Are certain weather conditions more commonly associated with traffic accidents than others?</li>
                    <li>How does the time of day interact with weather conditions to influence accident occurrence?</li>
                    <li>Do traffic accidents occurring under reduced visibility conditions tend to have higher severity levels?</li>
                    <li>How do weather-related factors collectively contribute to patterns in traffic accidents across California?</li>
                    <li>Are there observable clusters of traffic accidents based on weather and environmental conditions?</li>
                    <li>Can weather-related variables help explain differences in accident severity across regions and conditions in California?</li>
                </ol>
            </section>
        </div>
    );
};

export default Introduction;
