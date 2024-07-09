import './MainBody.css';
import Button from './Button';
import Image from './assets/body2.avif';

function MainBody() {
    return (
        <>
            <div className="main-container">
                <div className="main-text">
                    <h1>Let Us Find Your <br />
                    <span>Forever Food.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        <br />Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                        <Button title="Search Now" bgColor="red" color="white"/>
                        <Button title="Know More" bgColor="white" color="red"/>
                </div>
            </div>

            <div className="main-des">
                <div className="left">
                    <img src={Image} alt="" />
                </div>
                <div className="right">
                    <br /><br /><br /><br />
                    <h2>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Tempore, debitis.</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Aliquid, molestiae! Quidem est esse numquam odio deleniti, <br />
                        beatae, magni dolores provident quaerat totam eos, aperiam <br />
                        architecto eius quis quibusdam fugiat dicta.</p>
                    <br />
                    <Button title="Get In Touch" bgColor="indigo" color="white" />
                    <br /><br /><br /><br /><br />
                </div>
            </div>
        </>
    );
}

export default MainBody;