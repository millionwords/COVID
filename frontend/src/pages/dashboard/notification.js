import React from 'react';


const Activity = (item) => {
    console.log(new Date(item.timestamp));
    let date;
    try{
        date = new Date(item.timestamp*1000)+"";
        date = date.substring(0, 25)
    }
    catch(err){
        console.log(err);
        date = item.timestamp;
    }
    return <div className="pb-4">
        {/* <div className="media">
            <div className="event-date text-center mr-4">
                <div className="bg-soft-primary p-1 rounded text-primary font-size-14">{date}</div>
            </div>
            <div className="media-body">
                <h6 className="font-size-15 mt-0 mb-1">{item.update}</h6>
            </div>
        </div> */}
        <div  className="media">
            <div style={{width: '100%'}} className="event-date mr-4">
                <div className="font-size-14">{date}</div>
                <h6 className="font-size-15 mt-0 mb-1">{item.update}</h6>
            </div>
        </div>
    </div>
}
const activities = [
    { id: 1, title: 'Designing Shreyu Admin', description: 'Shreyu Admin - A responsive admin and dashboard template', date: '02 hours ago' },
    { id: 2, title: 'UX and UI for Ubold Admin', description: 'Ubold Admin - A responsive admin and dashboard template', date: '21 hours ago' },
    { id: 3, title: 'UX and UI for Hyper Admin', description: 'Hyper Admin - A responsive admin and dashboard template', date: '22 hours ago' },
]
class Activities extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: null
        }
    }
    componentDidMount(){
        fetch(`${process.env.REACT_APP_SERVER}/getUpdates`)
        .then(response=> response.json())
        .then(response=>{
            console.log(response);
            this.setState({data: response});
            // this.state.data.map(item=>{
            //     console.log(item);
            // })
        })
    }
    render(){
        if(this.state.data===null){
            return <div></div>
        }
        const data = this.state.data;
    return (
        <React.Fragment>
            <div className="left-timeline mt-3 mb-3 pl-4">
                <ul className="list-unstyled events mb-0">
                    {data.slice(0).reverse().map((item, idx) => {
                        return <li className="event-list" key={idx}>
                            <Activity {...item} />
                        </li>
                    })}
                </ul>
            </div>

            
        </React.Fragment>
    );
  }
};

export default Activities;
