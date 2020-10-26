import React from 'react';
import { Card, CardBody, Row, Col, Media, Button } from 'reactstrap';
import { BarChart2, CheckSquare, Users, Clock} from 'react-feather';
// import profileImg from '../../assets/images/server-down.png';
import  {FacebookIcon, TwitterIcon, LinkedinIcon, TelegramIcon,  WhatsappIcon, FacebookShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
class UserBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: null
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        fetch(`${process.env.REACT_APP_SERVER}/getResult/${this.props.match.params.id}`)
        .then(response=> response.json())
        .then(res=>{
            console.log(res);
            this.setState({data: res});
        })
    }
    render(){
        if(this.state.data===null){
            return <div></div>
        }
        let values = this.state.data.result;
        let obj = values.result;
        // let val = Object.keys(obj).map(function(key) {
        //      return obj[key];
        // });
        let covid, normal, pnuemonia;
        console.log(obj.length);
        if(obj.length===99){
            covid=obj.substring(11, 16);
            normal=obj.substring(44, 49);
            pnuemonia=obj.substring(78, 83);
            console.log(covid);
            console.log(normal);
            console.log(pnuemonia);
        }
        if(obj.length===98){
            covid=obj.substring(11, 15);
            normal=obj.substring(43, 48);
            pnuemonia=obj.substring(77, 82);
            console.log(covid);
            console.log(normal);
            console.log(pnuemonia);
        }
    return (
        
        <Card style={{
            display: "flex",
            alignItems: "center",
          }} 
          className=" p-3 mb-4 mb-xl-0">
            <Row>
            <Col xl={12} xs={12}>
        <img style={{maxHeight:"400px", maxWidth:"400px"}} className="card-img-top img-fluid" src={`data:${values.extension};base64, ${values.image}`} alt="" />
            </Col>
         </Row>
        <CardBody  >
        <Row  >
                <Col xl={12} xs={12}>
                    <Card  >
                        <CardBody   className="p-0 m-10" >
                        {window.screen.width<500?
                                (
                            <Row   className="py-1">
                                
                                    <Col xl={1} xs={1}></Col>
                             <Col xl={5} xs={5}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                        <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-primary icon-lg mr-2"></BarChart2>
                                        <Media body >
                                            <h4 className="mt-0 mb-0 font-size-13">{covid>pnuemonia?covid:pnuemonia}%</h4>
                                            <span className="text-muted font-size-13">Covid</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col>
                                <Col xl={5} xs={5}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                    <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-danger icon-lg mr-2"></BarChart2>
                                        <Media body>
                                            <h4 className="mt-0 mb-0 font-size-13">{normal}%</h4>
                                            <span className="text-muted font-size-13">Normal</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col>
                                <Col xl={1} xs={1}></Col>
                                {/* <Col xl={4} xs={4}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                    <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-info icon-lg mr-2"></BarChart2>
                                        <Media body>
                                            <h4 className="mt-0 mb-0 font-size-13">{pnuemonia}</h4>
                                            <span className="text-muted font-size-13">Pneumonia</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col>  */}
                                {/* <Col xl={6} xs={6}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                         <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-success icon-lg mr-4"></BarChart2>
                                        <Media body>
                                            <h4 className="mt-0 mb-0">{2}</h4>
                                            <span className="text-muted font-size-13">Cold</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col> */}
                                </Row>
                                )
                                :(
                                    <Row   className="py-1">
                                    <Col xl={3} xs={3}></Col>
                             <Col xl={3} xs={3}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                        <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-primary icon-lg mr-2"></BarChart2>
                                        <Media body >
                                            <h4 className="mt-0 mb-0 font-size-13">{covid>pnuemonia?covid:pnuemonia}%</h4>
                                            <span className="text-muted font-size-13">Covid</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col>
                                <Col xl={3} xs={3}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                    <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-danger icon-lg mr-2"></BarChart2>
                                        <Media body>
                                            <h4 className="mt-0 mb-0 font-size-13">{normal}%</h4>
                                            <span className="text-muted font-size-13">Normal</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col>
                                <Col xl={3} xs={3}></Col>
                                {/* <Col xl={4} xs={4}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                    <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-info icon-lg mr-2"></BarChart2>
                                        <Media body>
                                            <h4 className="mt-0 mb-0 font-size-13">{pnuemonia}</h4>
                                            <span className="text-muted font-size-13">Pneumonia</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col>  */}
                                {/* <Col xl={6} xs={6}>
                                    <Media style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                                         <div style={{display: 'flex', justifyContent: 'inline'}}>
                                        <BarChart2 className="align-self-center icon-dual-success icon-lg mr-4"></BarChart2>
                                        <Media body>
                                            <h4 className="mt-0 mb-0">{2}</h4>
                                            <span className="text-muted font-size-13">Cold</span>
                                        </Media>
                                        </div>
                                    </Media>
                                </Col> */}
                                </Row>
                                )}
                                {window.screen.width>500?
                                (
                                <Row>
                                <Col xl={2} xs={2}>
                                    </Col>
                                    <Col xl={8} xs={8}>
                                    
                                {(covid>45||pnuemonia>45)?
                                (<Button className="width-lg" color={"danger"} key={1} >Your covid result is positive. You need to go to a hospital as early as possible.
                                The virus that causes COVID-19 spreads easily through physical contact from person to person. This is why it is important to reduce the ways people come in close contact with one another. An effective way to do this is to stay home as much as possible and avoid crowded, public places where it is difficult to keep a safe space between people.</Button>)
                                :(<Button className="width-lg" color={"success"} key={2} >Your covid result is negative. You can also contact to a doctor for more clearance.
                                The virus that causes COVID-19 spreads easily through physical contact from person to person. This is why it is important to reduce the ways people come in close contact with one another. An effective way to do this is to stay home as much as possible and avoid crowded, public places where it is difficult to keep a safe space between people.</Button>)
                            }
                            </Col>
                            <Col xl={2} xs={2}>
                                    </Col>
                                </Row>
                                )
                            :
                            (
                                
                                <Row>
                                
                                    <Col xl={12} xs={12}>
                                    
                                {(covid>45||pnuemonia>45)?
                                (<Button className="width-lg" color={"danger"} key={1} >Your covid result is positive. You need to go to a hospital as early as possible.
                                The virus that causes COVID-19 spreads easily through physical contact from person to person. This is why it is important to reduce the ways people come in close contact with one another. An effective way to do this is to stay home as much as possible and avoid crowded, public places where it is difficult to keep a safe space between people.</Button>)
                                :(<Button className="width-lg" color={"success"} key={2} >Your covid result is negative. You can also contact to a doctor for more clearance.
                                The virus that causes COVID-19 spreads easily through physical contact from person to person. This is why it is important to reduce the ways people come in close contact with one another. An effective way to do this is to stay home as much as possible and avoid crowded, public places where it is difficult to keep a safe space between people.</Button>)
                            }
                            </Col>
                                </Row>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <FacebookShareButton
                                url={document.URL}
                                //quote="ok"
                                //imageUrl={profileImg}
                                >
                                <FacebookIcon size={32} round={true} />
                              </FacebookShareButton>
                
                <TelegramShareButton
                                url={document.URL}
                                //quote="ok"
                                >
                                <TelegramIcon size={32} round={true} />
                              </TelegramShareButton>
                              <TwitterShareButton
                                //title="hello"
                                url={document.URL}
                                >
                                <TwitterIcon size={32} round={true} />
                              </TwitterShareButton>
                              <LinkedinShareButton
                                url={document.URL}
                                //quote="ok"
                                >
                                <LinkedinIcon size={32} round={true} />
                              </LinkedinShareButton>
                              <WhatsappShareButton
                                url={document.URL}
                                //quote="ok"
                                >
                                <WhatsappIcon size={32} round={true} />
                              </WhatsappShareButton>
                              </Col>
            </Row>
        </CardBody>
    </Card>
    
    );
    }
};

export default UserBox;

