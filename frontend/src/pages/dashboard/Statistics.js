// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Row, Col } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import StatisticsWidget from '../../components/StatisticsWidget';


// const options = {
//     chart: {
//         height: 120,
//         type: 'donut',
//         toolbar: {
//             show: false,
//         },
//         parentHeightOffset: 0,
//     },
//     colors: ["#5369f8", "#43d39e"],
//     grid: {
//         borderColor: '#f1f3fa',
//         padding: {
//             left: 0,
//             right: 0,
//         },
//     },
//     plotOptions: {
//         pie: {
//             donut: {
//                 size: '70%',
//             },
//             expandOnClick: false
//         }
//     },
//     legend: {
//         show: true,
//         position: 'right',
//         horizontalAlign: 'left',
//         itemMargin: {
//             horizontal: 6,
//             vertical: 3
//         }
//     },
//     labels: ['Clothes 44k', 'Smartphons 55k'],
//     responsive: [{
//         breakpoint: 480,
//         options: {
            
//             legend: {
//                 position: 'bottom'
//             }
//         }
//     }],
//     tooltip: {
//         y: {
//             formatter: function(value) { return value + "k" }
//         },
//     }
// };

// const tdata = [1.5658, 98.4342];

class Statistics extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: null,
            chart1: null,
            chart2: null
        }
    }
    
    componentDidMount(){
       fetch(`${process.env.REACT_APP_SERVER}/getInfo`)
       .then(response=> response.json())
       .then(response=>{
           console.log(response);
           this.setState({data: response});
           this.setState({
                chart1: {
                    option: {
                        chart: {
                            height: 120,
                            type: 'donut',
                            toolbar: {
                                show: false,
                            },
                            parentHeightOffset: 0,
                        },
                        colors: ["#5369f8", "#43d39e"],
                        grid: {
                            borderColor: '#f1f3fa',
                            padding: {
                                left: 0,
                                right: 0,
                            },
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    size: '70%',
                                },
                                expandOnClick: false
                            }
                        },
                        legend: {
                            show: true,
                            position: 'right',
                            horizontalAlign: 'left',
                            itemMargin: {
                                horizontal: 6,
                                vertical: 3
                            }
                        },
                         labels: ['fatality rate', 'non-fatality'],
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }],
                        tooltip: {
                            y: {
                                formatter: function(value) { return value + "k" }
                            },
                        }
                    },
                    
                data: [parseInt(response[0].FR), 100-response[0].FR]
                    
                }
           });
          // console.log(this.state.data);
          this.setState({
            chart2: {
                option: {
                    chart: {
                        height: 120,
                        type: 'donut',
                        toolbar: {
                            show: false,
                        },
                        parentHeightOffset: 0,
                    },
                    colors: ["#5369f8", "#43d39e"],
                    grid: {
                        borderColor: '#f1f3fa',
                        padding: {
                            left: 0,
                            right: 0,
                        },
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                size: '70%',
                            },
                            expandOnClick: false
                        }
                    },
                    legend: {
                        show: true,
                        position: 'right',
                        horizontalAlign: 'left',
                        itemMargin: {
                            horizontal: 6,
                            vertical: 3
                        }
                    },
                     labels: ['recovery rate', 'non-recovery'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }],
                    tooltip: {
                        y: {
                            formatter: function(value) { return value + "k" }
                        },
                    }
                },
                
            data: [parseInt(response[0].PR), 100-response[0].PR]
                
            }
       });
       })
    }
    render(){
        
        if(this.state.data==null){
            return<div></div>
        }
        if(this.state.chart1==null){
            return<div></div>
        }
        if(this.state.chart2==null){
            return<div></div>
        }
        const data = this.state.data[0];
        ///console.log(this.state.chart1.option)
        const options = this.state.chart1.option;
        const tdata = this.state.chart1.data;
        const options2 = this.state.chart1.option;
        const tdata2 = this.state.chart1.data;
        console.log(data);
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={3}>
                    <StatisticsWidget description="Confirmed" title={data.totalConfirmed} icon={FeatherIcon.BarChart2} iconClass="icon-dual-primary"></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                <StatisticsWidget description="Active" title={data.activeCases} icon={FeatherIcon.BarChart2} iconClass="icon-dual-danger"></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                <StatisticsWidget description="Recovered" title={data.activeCases} icon={FeatherIcon.BarChart2} iconClass="icon-dual-success"></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                <StatisticsWidget description="Deceased" title={data.totalDeaths} icon={FeatherIcon.BarChart2} iconClass="icon-dual-warning"></StatisticsWidget>
                </Col>
            </Row>
            <Row>
            <Col md={6} xl={3}>
                <StatisticsWidget description="Total Critical" title={data.totalCritical} icon={FeatherIcon.BarChart2} iconClass="icon-dual-secondary"></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                <StatisticsWidget description="Daily Cases Confirmed" title={data.dailyConfirmed} icon={FeatherIcon.BarChart2} iconClass="icon-dual-info"></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                <StatisticsWidget description="Fatality Rate" title={data.FR} icon={FeatherIcon.BarChart2} iconClass="icon-dual-info"></StatisticsWidget>
                </Col>
                <Col md={6} xl={3}>
                <StatisticsWidget description="Recovery Rate" title={data.PR} icon={FeatherIcon.BarChart2} iconClass="icon-dual-info"></StatisticsWidget>
                </Col>
            </Row>

        </React.Fragment>
    );
                    }
};

export default Statistics;
