import './Home.css';
import headshot from '../assets/headshot.png';

function Home() {
    return (
        <>
            <img className="headshot" src={headshot} alt="Headshot" />
            <div className="homeIntro">
                Hi ! I'm Melody Yoon{", "} a 2nd year Computer Science student at UCLA. I love creating products and continuously developing with my users' feedback. Outside of coding, I enjoy being a cellist and barista. 
                <br />
                <br />
                Feel free to reach out! Always open to chat {":)"}
            </div>
            <div className="contacts">
                <button className="linkedinButton" onClick={() => window.open('https://www.linkedin.com/in/melody-yoon-b5a128310', '_blank')}>Linkedin</button>
                <div className="email">✉ meyoon@g.ucla.edu</div>
            </div>

            
        </>
    )
} export default Home;