import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function RefreshToken({credentials}){
    const navigate = useNavigate();
    // const credentials = sessionStorage.getItem('Authorization');

    // if(!credentials){
    //     navigate('/')
    //     return;
    // }
    const handleRefresh = async event =>{
        const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`
        }
        };
        debugger
        try {
            const response = await axios.get('http://127.0.0.1:5000/user/login', config);
            debugger
            sessionStorage.setItem('Token', response['data']['token']);
            console.log(response.data.token);
            
        } catch (error) {
            alert('Current session is over, you need to log in again to continue');
            navigate('/login');
        }
    }
    handleRefresh();
}