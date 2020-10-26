import React from 'react';
import { Row, Col, Card, CardBody, UncontrolledAlert } from 'reactstrap';
import axios from 'axios';
import PageTitle from '../../components/PageTitle';
import FileUploader from '../../components/FileUploader';

const FileUpload = () => {
    let status = false;
    return (
        <React.Fragment>
            {/* <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Forms', path: '/forms/upload' },
                            { label: 'File Upload', path: '/forms/upload', active: true },
                        ]}
                        title={'File Upload'}
                    />
                </Col>
            </Row> */}

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <h4 className="header-title mt-0 mb-1">File Upload</h4>
                            <p className="sub-header font-size-18">Upload x-ray image file in jpg, jpeg or png format only.</p>
                            {status===true?<UncontrolledAlert color={"danger"} >
                                        <strong>{"danger"} - </strong> A simple {"danger"} alert—check it out!
                                    </UncontrolledAlert>
                                    :
                                    <div></div>}
                            <FileUploader
                                onFileUpload={file => {
                                    console.log(file);
                                    let data = new FormData()
                                    data.append('file', file[0]);
                                    // axios.post(`${process.env.REACT_APP_SERVER}/upload`, data)
                                    // .then(res=>{
                                    //     console.log(res);
                                    // })
                                     fetch(
                                        `${process.env.REACT_APP_SERVER}/upload`,
                                        {
                                          method: 'post',
                                          body: data,
                                          headers: {
                                            'Accept': 'application/json'
                                          },
                                        }
                                      )
                                      .then(res=> res.json())
                                      .then(res=> {
                                          console.log(res);
                                          window.location.href = `/result/${res.result}`;
                                        })
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FileUpload;
