import React, { Component } from 'react';
import {  Row, Col, Card, CardBody, Media, Button, DropdownMenu, DropdownItem, DropdownToggle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Flatpickr from 'react-flatpickr'
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag } from 'react-feather';
import classNames from 'classnames';
import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import OverviewWidget from '../../components/OverviewWidget';

import Statistics from './Statistics';
import RevenueChart from './RevenueChart';
import TargetChart from './TargetChart';
import SalesChart from './SalesChart';
import Orders from './Orders';
import Performers from './Performers';
import Tasks from './Tasks';
import Chat from './Chat';
import Upload from '../forms/FileUpload';
import Wizard from '../forms/Wizard';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            modal: false,
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()]
        };
        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    /**
     * Opens large modal
     */
    openModalWithSize = size => {
        this.setState({ size: size, className: null });
        this.toggle();
    };

    /**
     * Opens modal with custom class
     */
    openModalWithClass = className => {
        this.setState({ className: className, size: null });
        this.toggle();
    };


    render() {

        return (
            <React.Fragment>
                <div className="">
                    { /* preloader */}
                    {this.props.loading && <Loader />}

                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Dashboard</h4>
                        </Col>
                        {/* <Col sm={8} xl={6}>
                            <form className="form-inline float-sm-right mt-3 mt-sm-0">
                                <div className="form-group mb-sm-0 mr-2">
                                    <Flatpickr value={this.state.filterDate}
                                        onChange={date => { this.setState({ filterDate: date }) }} options={{ mode: "range" }}
                                        className="form-control" />
                                </div>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="primary" className="dropdown-toggle">
                                        <i className='uil uil-file-alt mr-1'></i>Download
                                            <i className="icon ml-1"><ChevronDown /></i>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Mail className="icon-dual icon-xs mr-2"></Mail>
                                            <span>Email</span>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Printer className="icon-dual icon-xs mr-2"></Printer>
                                            <span>Print</span>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <File className="icon-dual icon-xs mr-2"></File>
                                            <span>Re-Generate</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </form>
                        </Col> */}
                    </Row>
                        
                    {/* stats */}
                    <Statistics></Statistics>

                    {/* charts */}
                    <Row>
                        <Col xl={3}>
                        <Card  className={classNames('card-pricing')}>
                                        <CardBody className="p-4">
                                            <Media>
                                                <Media body>
                                                    <h5  className="mt-0 mb-2 font-size-22">Are you at risk?</h5>
                                                </Media>
                                            </Media>
                                            <ul className="card-pricing-features text-muted border-top pt-2 mt-2 pl-0 pb-4 list-unstyled">
                                              <p className="font-size-16" >Questions to ask yourself about the Coronavirus with an interective assessment and guidence on what to do if you're at a higher risk</p>
                                            </ul>

                                            <div className="mt-5 text-center">
                                                <Button  onClick={() => this.toggle()} className={classNames("btn", { "btn-soft-primary": true, 'btn-primary': false }, "px-sm-4")}><i className='uil uil-arrow-right mr-1'></i>Take the questionnaire</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                        </Col>

                        <Col xl={9}>
                            <Upload/>
                        </Col>
                     </Row>
                     <Modal
                                isOpen={this.state.modal}
                                toggle={this.toggle}
                                className={this.state.className}
                                size={this.state.size}>
                                <ModalHeader toggle={this.toggle}>Covid Survey</ModalHeader>
                                <ModalBody>
                                   <Wizard/>
                                </ModalBody>
                                {/* <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Do Something</Button>
                                    <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter> */}
                            </Modal>


                    {/* charts */}
                    {/*<Row>
                        <Col xl={5}>
                            <SalesChart />
                        </Col>
                        <Col xl={7}>
                            <Orders />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={4}>
                            <Performers />
                        </Col>
                        <Col xl={4}>
                            <Tasks />
                        </Col>
                        <Col xl={4}>
                            <Chat />
                        </Col>
                    </Row> */}
                </div>
            </React.Fragment>
        )
    }
}


export default Dashboard;