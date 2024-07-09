import './Card.css';
import user from './assets/user.avif';

function Card() {
    return (
        <>
            <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.</p>
                
                <div className="author">
                    <img src={user} alt="Author" />
                    <div className="author_des">
                        <h3>Gladis Lennon</h3>
                        <p>Head of SEO</p>
                    </div>
                </div>
                </div>
        </>
    );
}

export default Card;