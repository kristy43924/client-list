import React from 'react';
import {Table,TableBody, TableCell, TableRow} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateCustomer() {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        cname:"",
        cphone:"",
        cbirthday:"",
        cgender:"",
        caddr:""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    //폼 submit이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        insertCustomer();
        setFormData({
            cname:"",
            cphone:"",
            cbirthday:"",
            cgender:"",
            caddr:""
        })
    }
    //post전송 axios
    function insertCustomer(){
        axios.post("http://localhost:8080/addCustomer",formData)
        .then(function(res){
            console.log(res);
            navigate(-1);
        }).catch(function(err){
            console.log(err);
        })
    }
    return (
        <div>
            <h2>신규 고객 등록하기</h2>
            <form onSubmit={onSubmit}>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                이름
                            </TableCell>
                            <TableCell>
                                <input name='cname' type="text" value={formData.cname} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                연락처
                            </TableCell>
                            <TableCell>
                                <input name='cphone' type="text" value={formData.cphone} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                생년월일
                            </TableCell>
                            <TableCell>
                                <input name='cbirthday' type="date" value={formData.cbirthday} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                성별
                            </TableCell>
                            <TableCell>
                                여성<input name='cgender' type="radio" value="여성" onChange={onChange}/>
                                남성<input name='cgender' type="radio" value="남성" onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                주소
                            </TableCell>
                            <TableCell>
                                <input name='caddr' type="text" value={formData.caddr} onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                               <button type='submit'>등록</button>
                               <button type='reset'>삭제</button>
                            </TableCell>
                           
                        </TableRow>
                   
                    </TableBody>
                </Table>
            </form>
        </div>
    );
}

export default CreateCustomer;