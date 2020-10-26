import React from 'react';
import { Card, CardBody, Row, Col, Button, Media } from 'reactstrap';
import { BarChart2, CheckSquare, Users, Clock } from 'react-feather';
import profileImg from '../../assets/images/server-down.png';
import  {FacebookIcon, TwitterIcon, LinkedinIcon, TelegramIcon,  WhatsappIcon, FacebookShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
class UserBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: null
        }
    }
    
    render(){
    return (
        <div className="pl-10 pr-15 p-5">
            <h5>What is a covid x-ray scanner? </h5>
            <h5 style={{color: 'grey'}}>Covid x-ray scanner is a tool built using a pre-trained ResNet50 V2 Model. The model is trained on the data set of 7,084 chest X-rays images of covid positive, pneumonia, and normal chest x-ray images. </h5>
            <br></br>
            <h5>Can you consider this tool for medical advice? </h5>
            <h5 style={{color: 'grey'}}>No, this tool is built to lower the burden on the health infrastructure. And should not be used as medical advice.  For medical advice, we suggest you reach out to the nearest health specialist. </h5>
            <br></br>
            <h5>How accurate is this tool? </h5>
            <h5 style={{color: 'grey'}}>We achieved an accuracy of 93% during training and Testing. We used a dataset of 7,084 chest X-rays images containing 2,400 images of covid positive patients, 1,266 photos of pneumonia, and 3,418 images of normal x-ray images during the training. For Testing, we have used 600 Covid X-ray images, 317 normal x-ray images, and 855 pneumonia x-ray images. </h5>
            <br></br>
            <h5>Who has built this tool? </h5>
            <h5 style={{color: 'grey'}}>Ehraz Ahmed, a web security researcher from Mysore and his team at Aspirehive, has developed this tool.</h5>
            <br></br>
            <h5>Is this an open-source? </h5>
            <h5 style={{color: 'grey'}}>Yes, our entire source code is uploaded to a Github repository. .</h5>
            <br></br>
            <h5 ><a href="https://github.com/aspirehive/COVID">https://github.com/aspirehive/COVID</a></h5>
            </div>  
    );
    }
};

export default UserBox;
