import React from 'react';
import '../pages/style/Account.css';
import OtherClimbs from '../components/OtherClimbs';
import ImageUpload from '../components/ImageUpload';
import InputText from '../components/InputText';

const Account = () => {
    return (
        <div  className='space'>
            <h1>upload a climb</h1>
        

            <div className="parent">
    <div className="div1">
        <OtherClimbs/>
    </div>
    <div className="div2">
    <ImageUpload/>
    </div>


</div>

        </div>
    );
};

export default Account;
