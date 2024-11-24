import React from 'react';
import { API_KEY, Value_Converter } from '../../data';
import './PlayVideo.css';
import moment from 'moment';

import { Link } from'react-router-dom';
import { useParams } from 'react-router-dom';


import Like from "../../assets/assets/like.png";
import dislike from "../../assets/assets/dislike.png";
import share from "../../assets/assets/share.png";
import save from "../../assets/assets/save.png";
import jack from "../../assets/assets/jack.png";
import user_profile from "../../assets/assets/user_profile.jpg";

function PlayVideo() {
    const { videoId } = useParams();
    const [apiData, setApiData] = React.useState(null);
    const [channelData, setChannelData] = React.useState(null);
    const [commentData, setCommentData] = React.useState(null);

    const fetchVedioData = async () => {
        const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetail_url)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data.items ? data.items[0] : null);
            })
            .catch((error) => console.error("Error fetching video data:", error));
    };
    const fetchOtherDetails = async () => {
        const channelDetail_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelDetail_url)
            .then((res) => res.json())
            .then((data) => {
                setChannelData(data.items ? data.items[0] : null);
            })
            .catch((error) => console.error("Error fetching channel data:", error));

            const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;
            await fetch(comments_url)
            .then((res) => res.json())
            .then((data) => {
                setCommentData(data.items? data.items : null);
                console.log(data);
            })
            .catch((error) => console.error("Error fetching comments:", error));
    };

    React.useEffect(() => {
        fetchVedioData();
    }, [videoId]);

    React.useEffect(() => {
        fetchOtherDetails();
    }, [apiData]);

    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="YouTube Video"
            ></iframe>

            <h2>{apiData ? apiData.snippet.title : "title here"}</h2>

            <div className='play-video-info'>
                <p>
                    {apiData ? Value_Converter(apiData.statistics.viewCount) : "16k"} views •{" "}
                    {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
                </p>

                <div>
                    <span><img src={Like} alt='' />{apiData ? Value_Converter(apiData.statistics.likeCount) : "125"}</span>
                    <span><img src={dislike} alt='' />{apiData ? Value_Converter(apiData.statistics.dislikeCount) : "0"}</span>
                    <span><img src={share} alt='' />Share</span>
                    <span><img src={save} alt='' />Save</span>
                </div>
            </div>

            <hr />

            <div className='publisher'>
                <img src={channelData ? channelData.snippet.thumbnails.default.url : jack} alt='' />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "channel title"}</p>
                    <p>{channelData ? Value_Converter(channelData.statistics.subscriberCount) : "0"} Subscribers</p>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "decription"}</p>
                
                <hr />
                <h3>{apiData ? Value_Converter(apiData.statistics.commentCount) : "0"} Comments</h3>
                {commentData && Array.isArray(commentData) && commentData.map((item, index) => (
    <div className="comment" key={index}>
        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
        <div>
            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className="comment-action">
                
                <span><img src={Like} alt='' />{item.snippet.topLevelComment.snippet.likeCount}</span>
                <span><img src={dislike} alt='' />{item.snippet.topLevelComment.snippet.dislikeCount}</span>
                

            </div>
        </div>
    </div>
))}


                {/* Additional comments repeated here */}
            </div>
        </div>
    );
}

export default PlayVideo;
