import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Value_Converter } from '../../../data';

import moment from'moment';


import { Link } from 'react-router-dom';
import { API_KEY } from '../../../data';

function Feed({ catagery }) {   
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catagery}&key=${API_KEY}`;
        const response = await fetch(videoListUrl);
        const result = await response.json();
        setData(result.items || []);
    }
    
    useEffect(() => {
        fetchData();
    }, [catagery]);

    return (
        <div className='feed'>
        {data.map((item) => (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='card' key={item.id}>
                <img src={item.snippet.thumbnails.medium.url} alt='Video thumbnail'/>
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>
    {Value_Converter(item.statistics.viewCount)} views  {moment(item.snippet.publishedAt).fromNow()}
</p>
            </Link>
        ))}
    </div>
    
    );
}

export default Feed;
