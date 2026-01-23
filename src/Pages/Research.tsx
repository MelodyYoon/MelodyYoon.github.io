import './Research.css';
import paper2022 from '../assets/2022_Paper.png';
import paper2023 from '../assets/2023_Paper.png';
import paper2024 from '../assets/2024_Paper.png';
import turbine from '../assets/turbine.png';


function Research() {
    return (
        <>
        <img className="turbineImage" src={turbine} alt="Wind Turbine" />
        <div className="researchIntro">
            I'm passionate about discovering 100% clean energy solutions through research. My work focuses on developing methodologies to optimize renewable energy capacities while addressing climate change challenges. Below are some of my published research papers in this field !
        </div>
        <div className="researchGrid">
            {/* 3rd Research Paper */}
            <div className="researchItem"> 
                <button className="imageButton" onClick={() => window.open('https://ieeexplore.ieee.org/document/10955906', '_blank')}>
                    <img className="researchImage" src={paper2024} alt="2024 Research Paper" />
                </button>
                <hr className="seperator" />
                <div className="descriptionShell">
                    <div className="researchTitle">"Energy Storage and Carbon Capture Peaker Plant Planning in Transitioning to Renewable Energies Against Weather Susceptibility"</div>
                    <div className="researchDescription">
                        Co-Author
                        <br />
                        Published: August 2024
                        <br />
                        Skills: Matlab, Simulation, Restful API
                        <br />
                        <br />
                        In this research, I developed a simulation method to minimize total generation cost and carbon dioxide generation by co-optimizing carbon capture and energy storage capacities accompanied by renewable energies.
                    </div>
                </div>
            </div>

            {/* 2nd Research Paper */}
            <div className="researchItem">
                <button className="imageButton" onClick ={() => window.open('https://ieeexplore.ieee.org/document/10274570', '_blank')}>
                    <img className="researchImage" src={paper2023} alt="2023 Research Paper" />
                </button>
                <hr className="seperator" />
                <div className="descriptionShell">
                    <div className="researchTitle">"Cost-Optimal Renewable Energy Capacity Planning toward 100% Green Energy in California Considering Climate Change"</div>
                    <div className="researchDescription">
                        First and Corresponding Author
                        <br />
                        Published: October 2023
                        <br />
                        Skills: Matlab, Data Analysis, Scenario Simulation
                        <br />
                        <br />
                        I proposed a methodology for renewable energy cost optimization towards 100% green energy that can save up to 1.18B$/year in California. By analyzing various scenarios, I identified optimal capacity mixes of solar, wind, and energy storage that minimize costs while meeting energy demand. 
                    </div>
                </div>
                
            </div>

            {/* 1st Research Paper */}
            <div className="researchItem">
                <button className="imageButton" onClick ={() => window.open('https://ieeexplore.ieee.org/document/9873414', '_blank')}>
                    <img className="researchImage" src={paper2022} alt="2022 Research Paper" />
                </button>
                <hr className="seperator" />
                <div className="descriptionShell">
                    <div className="researchTitle">"Optimal Capacity Planning in Renewable Energy Transition Considering Climate Change with a California Case Study"
                    </div>
                    <div className="researchDescription">
                        First and Corresponding Author
                        <br />
                        Published: September 2022
                        <br />
                        Skills: Matlab, Optimization Modeling, Data Analysis
                        <br />
                        <br />
                        I developed a capacity planning model to help California achieve 100% renewable energy by 2045, considering climate change impacts on solar and wind resources. The model optimizes the mix of renewable energy sources and energy storage solutions to minimize costs while ensuring reliability. Using historical weather data and projected climate scenarios, I analyzed how changing weather patterns affect renewable energy generation and system performance. The results provide insights into effective strategies for integrating renewables into the grid under future climate conditions.
                    </div>
                </div>
            </div>

            
        </div>
        </>

    )
} export default Research;