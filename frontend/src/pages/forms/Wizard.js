import React from 'react';

import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, CustomInput, Progress } from 'reactstrap';
import { AvRadioGroup, AvRadio, AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { Wizard, Steps, Step } from 'react-albus';

import PageTitle from '../../components/PageTitle';

const BasicWizard = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">Basic wizard</h4>
                <p className="sub-header">Example of Basic wizard</p>

                <Wizard>
                    <Steps>
                        <Step
                            id="login"
                            render={({ next }) => (
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleEmail" md={3}>
                                            Email
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="exampleEmail"
                                                placeholder="enter email"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="examplePassword" md={3}>
                                            Password
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="password"
                                                name="password"
                                                id="examplePassword"
                                                placeholder="password placeholder"
                                                defaultValue="12345"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="examplerePassword" md={3}>
                                            Re-Password
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="password"
                                                name="repassword"
                                                id="examplerePassword"
                                                placeholder="password"
                                                defaultValue="12345"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <ul className="list-inline wizard mb-0">
                                        <li className="next list-inline-item float-right">
                                            <Button onClick={next} color="success">
                                                Next
                                            </Button>
                                        </li>
                                    </ul>
                                </Form>
                            )}
                        />
                        <Step
                            id="gandalf"
                            render={({ next, previous }) => (
                                <Form>
                                    <FormGroup row>
                                        <Label for="fname" md={3}>
                                            First Name
                                        </Label>
                                        <Col md={9}>
                                            <Input type="text" name="fname" id="fname" placeholder="Enter first name" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="lname" md={3}>
                                            Last Name
                                        </Label>
                                        <Col md={9}>
                                            <Input type="text" name="lname" id="lname" placeholder="enter last name" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="phone" md={3}>
                                            Phone Number
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="enter phone number"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <ul className="list-inline wizard mb-0">
                                        <li className="previous list-inline-item">
                                            <Button onClick={previous} color="info">
                                                Previous
                                            </Button>
                                        </li>
                                        <li className="next list-inline-item float-right">
                                            <Button onClick={next} color="success">
                                                Next
                                            </Button>
                                        </li>
                                    </ul>
                                </Form>
                            )}
                        />
                        <Step
                            id="dumbledore"
                            render={({ previous }) => (
                                <Row>
                                    <Col sm={12}>
                                        <div className="text-center">
                                            <h2 className="mt-0">
                                                <i className="mdi mdi-check-all"></i>
                                            </h2>
                                            <h3 className="mt-0">Thank you !</h3>

                                            <p className="w-75 mb-2 mx-auto">
                                                Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
                                                aliquet.
                                            </p>

                                            <div className="mb-3">
                                                <CustomInput
                                                    type="checkbox"
                                                    id="exampleCustomCheckbox"
                                                    label="I agree with the Terms and Conditions"
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col sm={12}>
                                        <ul className="list-inline wizard mb-0">
                                            <li className="previous list-inline-item">
                                                <Button onClick={previous} color="info">
                                                    Previous
                                                </Button>
                                            </li>

                                            <li className="next list-inline-item float-right">
                                                <Button color="success">Submit</Button>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            )}
                        />
                    </Steps>
                </Wizard>
            </CardBody>
        </Card>
    );
};

const WizardWithProgressbar = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">Wizard with Progress bar</h4>
                <p className="sub-header">Example of wizard with progress bar</p>

                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment>
                            <Progress
                                animated
                                striped
                                color="success"
                                value={((steps.indexOf(step) + 1) / steps.length) * 100}
                                className="mb-3 progress-sm"
                            />

                            <Steps>
                                <Step
                                    id="login"
                                    render={({ next }) => (
                                        <Form>
                                            <FormGroup row>
                                                <Label for="exampleEmail1" md={3}>
                                                    Email
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        id="exampleEmail1"
                                                        placeholder="enter email"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="examplePassword1" md={3}>
                                                    Password
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="password"
                                                        name="password"
                                                        id="examplePassword1"
                                                        placeholder="password placeholder"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="examplerePassword1" md={3}>
                                                    Re-Password
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="password"
                                                        name="repassword"
                                                        id="examplerePassword1"
                                                        placeholder="password"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <ul className="list-inline wizard mb-0">
                                                <li className="next list-inline-item float-right">
                                                    <Button onClick={next} color="success">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Form>
                                    )}
                                />
                                <Step
                                    id="gandalf"
                                    render={({ next, previous }) => (
                                        <Form>
                                            <FormGroup row>
                                                <Label for="fname1" md={3}>
                                                    First Name
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="text"
                                                        name="fname"
                                                        id="fname1"
                                                        placeholder="Enter first name"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="lname1" md={3}>
                                                    Last Name
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="text"
                                                        name="lname"
                                                        id="lname1"
                                                        placeholder="enter last name"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="phone1" md={3}>
                                                    Phone Number
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="text"
                                                        name="phone"
                                                        id="phone1"
                                                        placeholder="enter phone number"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <ul className="list-inline wizard mb-0">
                                                <li className="previous list-inline-item">
                                                    <Button onClick={previous} color="info">
                                                        Previous
                                                    </Button>
                                                </li>
                                                <li className="next list-inline-item float-right">
                                                    <Button onClick={next} color="success">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Form>
                                    )}
                                />
                                <Step
                                    id="dumbledore"
                                    render={({ previous }) => (
                                        <Row>
                                            <Col sm={12}>
                                                <div className="text-center">
                                                    <h2 className="mt-0">
                                                        <i className="mdi mdi-check-all"></i>
                                                    </h2>
                                                    <h3 className="mt-0">Thank you !</h3>

                                                    <p className="w-75 mb-2 mx-auto">
                                                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                        dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                        mattis dictum aliquet.
                                                    </p>

                                                    <div className="mb-3">
                                                        <CustomInput
                                                            type="checkbox"
                                                            id="exampleCustomCheckbox1"
                                                            label="I agree with the Terms and Conditions"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col sm={12}>
                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} color="info">
                                                            Previous
                                                        </Button>
                                                    </li>

                                                    <li className="next list-inline-item float-right">
                                                        <Button color="success">Submit</Button>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    )}
                                />
                            </Steps>
                        </React.Fragment>
                    )}
                />
            </CardBody>
        </Card>
    );
};


class WizardWithFormValidation extends React.Component {
    
    render(){
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">Please complete the questions below.</h4>

                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment>
                            <Progress
                                animated
                                striped
                                color="success"
                                value={((steps.indexOf(step) + 1) / steps.length) * 100}
                                className="mb-3 progress-sm"
                            />
                            {window.localStorage.getItem("isSumbitted")===true?(
                                <Step
                                id="dumbledore"
                                render={({ previous }) => (
                                    <Row>
                                        <Col sm={12}>
                                            <div className="text-center">
                                                <h2 className="mt-0">
                                                    <i className="mdi mdi-check-all"></i>
                                                </h2>
                                                <h3 className="mt-0">Thank you !</h3>

                                                <p className="w-75 mb-2 mx-auto">
                                                Thank you so much for taking the time out of your day to complete our short survey. We appreciate it so much, as your feedback will directly help us to improve our design bundles for the Design Cuts community. We make notes of every single response that we receive, and your feedback really makes a difference.
                                                </p>

                                                {/* <div className="mb-3">
                                                    <CustomInput
                                                        type="checkbox"
                                                        id="exampleCustomCheckbox2"
                                                        label="I agree with the Terms and Conditions"
                                                    />
                                                </div> */}
                                            </div>
                                        </Col>

                                        {/* <Col sm={12}>
                                            <ul className="list-inline wizard mb-0">
                                                <li className="previous list-inline-item">
                                                    <Button onClick={previous} color="info">
                                                        Previous
                                                    </Button>
                                                </li>

                                                <li className="next list-inline-item float-right">
                                                    <Button color="success">Submit</Button>
                                                </li>
                                            </ul>
                                        </Col> */}
                                    </Row>
                                )}
                            />
                            )
                            :
                            (
                            <Steps>
                                <Step
                                    id="login"
                                    render={({ next }) => (
                                        <AvForm
                                            onValidSubmit={(event, values) => {
                                                console.log(values);
                                                window.localStorage.setItem("survey1", JSON.stringify(values));
                                                next();
                                            }}>
                                            <AvField name="full_name"  validate={{pattern: {value: '^[A-Za-z ]+$'}}} label={<h6>Full name</h6>} type="text" required />
                                            <AvField name="email" label={<h6>Email</h6>} type="email" required />
                                            <AvField name="age" max={120} label={<h6>Age</h6>} type="number" required />
                                            <AvField name="location" label={<h6>Location</h6>} type="text" required />
                                            <AvField name="phone" label={<h6>Contact Number</h6>} type="tel" required />
                                            
                                           
                                            
                                            <ul className="list-inline wizard mb-0">
                                                <li className="next list-inline-item float-right">
                                                    <Button  color="success" type="submit">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </AvForm>
                                    )}
                                />
                                <Step
                                    id="gandalf"
                                    render={({ next, previous }) => (
                                        <AvForm
                                            onValidSubmit={(event, values) => {
                                                window.localStorage.setItem("survey2", JSON.stringify(values));
                                                let obj = {
                                                    survey1: JSON.parse(window.localStorage.getItem("survey1")),
                                                    survey2: JSON.parse(window.localStorage.getItem("survey2"))
                                                }
                                                console.log(obj);
                                                fetch(`${process.env.REACT_APP_SERVER}/survey`, {
                                                    body: JSON.stringify(obj),
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        "Accept": 'application/json'
                                                      },
                                                    method: "post"
                                                })
                                                .then(res=>res.json())
                                                .then(res=>{
                                                    console.log(res);
                                                    window.localStorage.setItem("isSubmitted", true);
                                                    next();
                                                })
                                            }}>
                                             <AvRadioGroup name="question1" label={<h5>Have you come into close contact (within 6 feet) with someone who has a laboratory-confirmed COVID – 19 diagnosis in the past 14 days?</h5>} required>
                                                <AvRadio customInput label="Yes" value="yes" />
                                                <AvRadio customInput label="No" value="no" />
                                            </AvRadioGroup>
                                            <AvRadioGroup name="question2" label={<h5>Do you have any of the following:  fever or chills, cough, shortness of breath or difficulty breathing, body aches, headache, the new loss of taste or smell, sore throat?</h5>} required>
                                                <AvRadio customInput label="Yes" value="yes" />
                                                <AvRadio customInput label="No" value="no" />
                                            </AvRadioGroup>
                                            <AvRadioGroup  name="question3" label={<h5>Do you have Any Previous Health Diseases?</h5>} required>
                                                <AvRadio id="yes" onChange={handleYes} customInput label="Yes" value="yes" />
                                                <AvRadio id="no" onChange={handleNo} customInput label="No" value="no" />
                                            </AvRadioGroup>
                                            <div  id="select" hidden>
                                            <AvField  type="select" name="question4" label={<h5>Select a Health Disease</h5>}>
                                                <option>Heart disease</option>
                                                <option>Stroke</option>
                                                <option>Respiratory Infections</option>
                                                <option>Chronic Obstructive Pulmonary Disease</option>
                                                <option>Diabetes</option>
                                                <option>Tuberculosis</option>
                                                <option>Cirrhosis</option>
                                            </AvField>
                                            </div>
                                            <ul className="list-inline wizard mb-0">
                                                <li className="previous list-inline-item">
                                                    <Button onClick={previous} color="info">
                                                        Previous
                                                    </Button>
                                                </li>
                                                <li className="next list-inline-item float-right">
                                                    <Button color="success" type="submit">
                                                        Submit
                                                    </Button>
                                                </li>
                                            </ul>
                                        </AvForm>
                                    )}
                                />
                                <Step
                                    id="dumbledore"
                                    render={({ previous }) => (
                                        <Row>
                                            <Col sm={12}>
                                                <div className="text-center">
                                                    <h2 className="mt-0">
                                                        <i className="mdi mdi-check-all"></i>
                                                    </h2>
                                                    <h3 className="mt-0">Thank you !</h3>

                                                    <p className="w-75 mb-2 mx-auto">
                                                    Thank you so much for taking the time out of your day to complete our short survey. We appreciate it so much, as your feedback will directly help us to improve our design bundles for the Design Cuts community. We make notes of every single response that we receive, and your feedback really makes a difference.
                                                    </p>

                                                    {/* <div className="mb-3">
                                                        <CustomInput
                                                            type="checkbox"
                                                            id="exampleCustomCheckbox2"
                                                            label="I agree with the Terms and Conditions"
                                                        />
                                                    </div> */}
                                                </div>
                                            </Col>

                                            {/* <Col sm={12}>
                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} color="info">
                                                            Previous
                                                        </Button>
                                                    </li>

                                                    <li className="next list-inline-item float-right">
                                                        <Button color="success">Submit</Button>
                                                    </li>
                                                </ul>
                                            </Col> */}
                                        </Row>
                                    )}
                                />
                            </Steps>
                            
                            )}  

                            
                        </React.Fragment>
                    )}
                />
            </CardBody>
        </Card>
    );
};
}
const handleYes = () =>{
    document.getElementById("select").removeAttribute("hidden");
}
const handleNo = () =>{
    document.getElementById("select").setAttribute("hidden", true);
}
// const onNext = () =>{
//     document.getElementById("select").style.display = "none";
// }

const FormWizard = () => {
    return (
        <React.Fragment>
            {/* <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Forms', path: '/forms/wizard' },
                            { label: 'Form Wizard', path: '/forms/wizard', active: true },
                        ]}
                        title={'Form Wizard'}
                    />
                </Col>
            </Row> */}

            {/* <Row>
                <Col xl={6}>
                    <BasicWizard />
                </Col>

                <Col xl={6}>
                    <WizardWithProgressbar />
                </Col>
            </Row> */}

            <Row>
                <Col lg={12}>
                    <WizardWithFormValidation />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormWizard;
