import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MangaCard = (props) => {
    const  manga  = props.manga;
//linking image for card view of mangas and setting it to show author and illustrator names
    return(
        <div className="card-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91Hk179d1CL.jpg alt=" />
            <div className="desc">
                <h2>
                    <Link to={`/show-manga/${manga._id}`}>
                        { manga.title }
                    </Link>
                </h2>
                <h3>{manga.author}</h3>
                <h3>{manga.Illustrator}</h3>
            </div>
        </div>
    )
};

export default MangaCard;