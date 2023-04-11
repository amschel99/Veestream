import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './usecases.css';

const UseCases = () => {
  return (
    <div className="use-cases">
      <Card  sx={{height:'auto', backgroundColor:'#29335c'}} className="use-case-card">
        <CardContent>
          <Typography sx={{color:'#FBBC05'}} variant="h6" component="h2">
        Here is how veestream can help you when building an e-commerce
          </Typography>
          <Typography  variant="body2" component="p">
With Veestream's all-in-one API solution, ecommerce businesses can easily upload, download, and manage files such as product images, videos, and descriptions with just few API calls. This makes it easier to keep track of product information and ensures that it is up to date across all channels.
 Veestream's advanced features like video thumbnail generation and progressive download can help ecommerce businesses improve website performance. Faster page load times and smooth streaming can result in better customer experiences and increased conversions.

 e-commerce businesses can  also add interactive product images and videos to their website, allowing customers to get a better sense of what they are buying. 
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{height:'auto', backgroundColor:'#29335c'}} className="use-case-card">
        <CardContent>
          <Typography variant="h6" component="h2">
            Video on Demand with Veestream
          </Typography>
          <Typography variant="body2" component="p">
          Veestream can be used to build Video on Demand (VOD) platforms by providing an all-in-one API solution that simplifies file management, video streaming, and delivery. Here are some ways that Veestream can be used to build VOD platforms:

File uploading and storage: Veestream's API allows for easy file uploading and storage. VOD platforms can use this feature to upload and store video files on Veestream's servers.

Video transcoding: Veestream can transcode videos into different formats, resolutions, and bitrates to ensure compatibility across devices and optimal streaming performance.

Video streaming: Veestream's API allows for efficient and smooth video streaming. By leveraging Veestream's video streaming capabilities, VOD platforms can provide high-quality video content to their users.

Metadata retrieval: Veestream's metadata retrieval feature can be used to automatically extract and store metadata about video content, such as title, description, and tags. This can make it easier to organize and search for videos on the platform.

Video thumbnails and GIFs: Veestream's API also allows for the generation of video thumbnails and GIFs. VOD platforms can use this feature to provide users with a preview of the video content and increase engagement.
          </Typography>
        </CardContent>
      </Card>
      <Card  sx={{height:'auto', backgroundColor:'#29335c'}} className="use-case-card">
        <CardContent>
          <Typography variant="h6" component="h2">
            eBook Selling Page with Veestream
          </Typography>
          <Typography variant="body2" component="p">
          File uploading and storage: With Veestream's API, you can easily upload and store ebook files on Veestream's servers. This means that you don't need to worry about managing your own servers or dealing with complex file storage systems.

File delivery: Veestream's API allows for easy and secure file delivery. When a customer purchases an ebook from your store, Veestream's API can be used to deliver the download url for the ebook .

File metadata: Veestream's API allows you to extract metadata about your ebooks, such as author, title, and description. This makes it easier to organize your ebook collection and provide customers with relevant information about each ebook.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{height:'auto', backgroundColor:'#29335c'}} className="use-case-card">
        <CardContent>
          <Typography variant="h6" component="h2">
            Embedding Media on Your Website
          </Typography>
          <Typography variant="body2" component="p">
          Veestream can be used to embed interactive media, such as videos and images, to a website by providing an all-in-one API solution that simplifies file management and delivery. Here's how you can use Veestream to embed interactive media to a website:

File uploading and storage: With Veestream's API, you can easily upload and store your media files on Veestream's servers. This means that you don't need to worry about managing your own servers or dealing with complex file storage systems.

Progressive download: Veestream's API allows for efficient and smooth progressive download of media files. By leveraging Veestream's progressive download capabilities, you can ensure that your media files are delivered to your website visitors in a fast and reliable manner.

Advanced features: Veestream's API also provides advanced features such as video thumbnail generation and metadata retrieval. These features can be used to enhance the appearance of your media files and provide additional information to your website visitors.

Embedding media: Once your media files are uploaded and stored on Veestream's servers, you can easily embed them into your website using HTML code. Veestream's API provides the necessary information and URLs to embed your media files in a responsive and customizable way.
          </Typography>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default UseCases;
