const Video = require("../models/Video");
const { v4: uuidv4 } = require('uuid');


class VideoController {
    async index(req, res){
        try{
            const videos = await Video.find();
            return res.status(200).json(videos);
        }catch(err){
            return res.status(500).json(err.message)
        }
    }

    async store(req, res){
        const {title, link} = req.body;

        if(!title || !link)
            return res.status(400).json({Error: "Missing title or link"});

        const video = new Video({
            _id : uuidv4(),
            title,
            link, 
            liked: false
        });

        try{
            await video.save();
            return res.status(201).json({message: "Video added seccess!"});
        }catch(err){
            return res.status(400).json({error: err.message });
        }
    }

    async update(req, res){
        const {title, link} = req.body;

        if(!title && !link)
            return res.status(400).json({error: "You must inform a new title or a new link"});
        
        if(title) res.video.title = title;
        if(link) res.video.link = link;
        
        try{
            await res.video.save();
            return res.status(200).json({ message: "Video updated sucessfully!" });
        }catch(err){
            return res.status(500).json({error: err.message });
        }
    }

    async delete(req, res){
        try{
            await res.video.remove();
            return res.status(200).json({ message: "Video deleted sucessfully!" });
        }catch(err){
            return res.status(500).json({error: err.message });
        }
    }
    async updateLike(req, res){
        res.video.liked = !res.video.liked;

        try{
            await res.video.save();
            return res.status(200).json({ message: `Video ${res.video.liked ? "liked" : "unliked"} sucessfuly` });
        }catch(err){
            return res.status(500).json({error: err.message });
        }
    }
}

module.exports = new VideoController();