import mail from '../assets/Mail.png'
import logo from '../assets/linkedin.png'

export default function BodyContent () {
    return (
        <div className='all-content'>
            <section className='user-headers'>
                <h2>Ayomide Soniyi</h2>
                <h4>Software Engineer</h4>
                <p>www.myextras.tech</p>
            </section>

            <div className='btn-section'>
                <button type="button" className="email-btn">
                    <img src={mail} alt="Email logo" />
                    Email
                </button>

                <button type="button" className="linkedin-btn">
                    <img src={logo} alt="LinkedIn logo"/>
                    LinkedIn
                </button>
            </div>

            <article className='userInfo'>
                <h3>About</h3>
                <p>
                    I'm currently a software engineer from alx and will be specializing as a backend developer
                    and particularly into frontend from Scrimba. I love the view of how the whole web, frontend
                    and backend works and connects, hence why I love to get at least a touch of all. In general
                    I love to learn and add to my Knowlege.
                </p>
                <h3>Interests</h3>
                <p>Foodie, lover of cool musics, Table tennis, game fanatic, reading novels and learning in general.</p>
            </article>
        </div>
    );
}