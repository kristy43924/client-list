import React,{useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import axios from 'axios';
import {Table,TableBody, TableRow, TableCell} from '@material-ui/core';

function UpdateCustomer(props) {
    const param =useParams();
    const navigate=useNavigate();
    const {id} =param; //실제로 파람에 아이디만 담겨 있음
    const [gender,setgender]=useState("");
    const onChange =(e)=>{
        customer[0].cgender=e.target.value;
        setgender(e.target.value); //화면에 다시 그려주는곳
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        insertCustomer(e.target);
        //이전화면으로 이동
        navigate(-1);
    }
    function insertCustomer(form){
        axios.put(`http://localhost:8080/editCustomer/${id}`,{
            cname:form.cname.value,
            cphone:form.cphone.value,
            cbirthday:form.cbirthday.value,
            cgender:form.cgender.value,
            caddr:form.caddr.value
        })
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    }
    async function getCustomer(){
        const response =await axios.get(
            `http://localhost:8080/customer/${id}`
        )
        return response.data;
    }
    const datastate = useAsync(getCustomer);
    const{loading,error,data:customer}=datastate;
    if(loading)return <div>로딩중..</div>;
    if(error)return <div>페이지를 나타낼수 없습니다</div>;
    if(!customer)return null;
    return (
        <div>
            <h2>고객 정보 수정</h2>
            <form onSubmit={onSubmit}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>고객명</TableCell>
                            <TableCell><input name="cname" defaultValue={customer[0].cname}/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>연락처</TableCell>
                            <TableCell><input name="cphone" defaultValue={customer[0].cphone}/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>생년월일</TableCell>
                            <TableCell><input name="cbirthday" type="text" defaultValue={customer[0].cbirthday}/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>성별</TableCell>
                            <TableCell>
                                여성<input name="cgender" checked={customer[0].cgender==="여성"?true:false} type="radio" value="여성" onChange={onChange}/>
                                남성<input name="cgender" checked={customer[0].cgender==="남성"?true:false} type="radio" value="남성"  onChange={onChange}/>
                            </TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell>주소</TableCell>
                            <TableCell><input name="caddr" type="text" defaultValue={customer[0].caddr}/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                               <button type='submit'>수정</button>
                               <button >고객리스트</button>
                            </TableCell>
                           
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
}

export default UpdateCustomer;