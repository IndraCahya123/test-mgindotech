import { useHistory } from 'react-router-dom';

import Logo from '../Assets/jumbotron.svg';

function LandingPage() {
    const history = useHistory();

    return (
        <div className="landing-wrapper" style={{
            height: "100vh",
            width: "100%",
            backgroundColor: '#e1f5f0',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="landing-content" style={{
                width: "95%",
                margin: "0 auto",
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <div className="landing-text" style={{
                    width: "530px",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <span style={{
                        fontSize: 40,
                    }}>Looking For a Great Photo, Let Us Help You</span>
                    <button type="button" onClick={() => history.push('/galleries')}>Start Browse</button>
                </div>
                <img
                    src={Logo}
                    alt="Landing Page Image"
                    height="40%"
                    width="40%"
                />
            </div>
        </div>
    )
}

export default LandingPage
