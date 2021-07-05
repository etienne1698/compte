import React, { useState } from 'react';
import Menu from './Menu';
import OperationToValidates from './OperationToValidate';
import Contacts from './Contacts';
import Footer from './Footer';

function Home() {
    let creditTotal = 233.50;
    let detteTotal = 545524.1;
    const [buttonSelected, setButtonSelected] = useState('all');

    return (
        <div className='haveHeader haveFooter'>
            <Menu />
            <div className='padding'>
                <div className='line divGrey separate'>
                    <div>
                        <label className='green'>Credit</label>
                        <label className='red'>Dette</label>
                    </div>
                    <div className='left'>
                        <label className='green'>{creditTotal.toFixed(2) + ' €'}</label>
                        <label className='red'>{detteTotal.toFixed(2) + ' €'}</label>
                    </div>
                </div>
                <label>Operation à valider</label>
                <OperationToValidates />
                <label>Contacts</label>
                <div className='line'>
                    <button className={'autoSize' + (buttonSelected === 'all' ? ' button' : ' white')} onClick={() => setButtonSelected('all')}>Tout</button>
                    <button className={'autoSize' + (buttonSelected === 'credit' ? ' button' : ' white')} onClick={() => setButtonSelected('credit')}>Credit</button>
                    <button className={'autoSize' + (buttonSelected === 'debt' ? ' button' : ' white')} onClick={() => setButtonSelected('debt')}>Dette</button>
                </div>
                <Contacts/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;