import {Component} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Charts from '../Charts';
import LeftNav from '../LeftNav'
import './index.css'

const mockData = [

{id:1, name: "Dashboard"},

{id:2, name: "Inventory"},

{id:3, name: "Order"},

{id:4, name: "Returns"},

{id:5, name: "Customers"},

{id:6, name: "Shipping"},

{id:7, name: "Channel"},

{id:8, name: "Integrations"},

{id:9, name: "Calcluators",img:<IoIosArrowDown />},

{id:10, name: "Reports",img:<IoIosArrowDown />},

{id:11, name: "Account",img:<IoIosArrowDown />}
]
class Sidebar extends Component{
    state = {
        ListItem:mockData[0].name
    }
    onChangeColName = (name) =>{
        this.setState({ListItem:name})
    }
    render(){
        const {ListItem} = this.state
        return(
            <div className='bg-container'>
                <div className='left-nav'>
                    <ul className='unorder-ele'>
                        {mockData.map(each=>(
                            <LeftNav key = {each.id} 
                            mockData = {each} 
                            onChangeColName = {this.onChangeColName}
                            isActive = {ListItem===each.name}
                            />
                        ))}
                    </ul>
                </div>
                <div className='right-ele'>
                    <div className='header'>
                        <p className='hed-para'>{ListItem}</p>
                        <Charts/>
                    </div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}
export default Sidebar