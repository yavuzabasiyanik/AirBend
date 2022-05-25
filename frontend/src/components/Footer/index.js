
import './Footer.css';



const Footer = () => {

    return (
        <footer className='footer'>
            <div className='inside-footer'>

                <div className='grid-div-footer'>

                    <div className='same-4-div'>
                        <h3>
                            Contact Me
                        </h3>
                        <p className='bunch-of-ps'>Yavuz Abasiyanik</p>
                        <p className='bunch-of-ps'>abasiyanikyavuz@gmail.com</p>
                        <p className='bunch-of-ps'>(312)-607-5021</p>

                    </div>
                    <div className='same-4-div'>
                        <h3>
                            Projects
                        </h3>
                        <a className='bilgiseyar' href='https://genzon.herokuapp.com/' target='_blank' >
                            GenZon
                        </a>
                        <a className='bilgiseyar' href='https://memestagram-group-project.herokuapp.com/login' target='_blank' >
                            Memestagram
                        </a>
                        <a className='bilgiseyar' href='https://the-best-stuck-overflow.herokuapp.com/' target='_blank' >
                            Stuckoverflow
                        </a>
                        {/* https://genzon.herokuapp.com/ */}
                        {/* https://memestagram-group-project.herokuapp.com/login */}
                    </div>
                    <div className='same-4-div'>
                        <h3>
                            Technologies Used
                        </h3>
                        <p className='bunch-of-ps'>JavaScript</p>
                        <p className='bunch-of-ps'>React</p>
                        <p className='bunch-of-ps'>Redux</p>
                        <p className='bunch-of-ps'>Node.js</p>
                        <p className='bunch-of-ps'>express</p>
                        <p className='bunch-of-ps'>PostgreSQL</p>
                        <p className='bunch-of-ps'>Sequelize</p>
                        <p className='bunch-of-ps'>CSS</p>
                        <p className='bunch-of-ps'>HTML</p>
                        <p className='bunch-of-ps'>Git</p>
                        <p className='bunch-of-ps'>VS Code</p>


                    </div>
                    <div className='same-4-div'>
                        <h3>
                            About Me
                        </h3>

                        <a style={{marginTop:"-19px"}} target='_blank' href='https://github.com/yavuzabasiyanik'><i class="fa-brands fa-github fa-2xl"></i></a>
                        <a style={{marginTop:"-1px"}} target='_blank' href='https://www.linkedin.com/in/yavuz-abasiyanik-a4a86720a/'><i class="fa-brands fa-linkedin fa-2xl"></i></a>

                    </div>

                </div>
            </div>

        </footer>
    )

}



export default Footer;
