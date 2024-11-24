import React, { useState, useEffect } from 'react';
 import './Recomended.css';
 import { useParams } from'react-router-dom'; // Assuming useParams hook is used for retrieving parameters from the URL
import moment from 'moment';
import { API_KEY } from '../../data'; // Ensure the API_KEY is correctly exported from this file
import { Link } from 'react-router-dom';
 import { Value_Converter } from '../../data'; // Ensure the Value_Converter is correctly exported from this file


function Recomended() {
    const { categoryId } = useParams(); // Assuming categoryId is passed as a parameter in the URL

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const response = await fetch(videoList_url);
        const data = await response.json();
        setApiData(data.items || []);
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className="recomended">
            <div className="recomended-videos">
                {apiData.map((item) => (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="video-card">
                        <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                        <div className="video-info">
                            <h3>{item.snippet.title}</h3>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{Value_Converter(item.statistics.viewCount)} views • {moment(item.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Recomended;
