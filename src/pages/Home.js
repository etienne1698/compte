import React, { useState } from 'react';
import Menu from '../components/Menu';
import OperationToValidates from '../components/OperationToValidate';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

function Home() {
    const BUTTON_NAMES = {
        ALL: 1,
        CREDIT: 2,
        DEBT: 3
    }

    let creditTotal = 233.50;
    let detteTotal = 545524.1;
    const [buttonSelected, setButtonSelected] = useState(BUTTON_NAMES.ALL);

    

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
                    <button className={'autoSize' + (buttonSelected === BUTTON_NAMES.ALL ? ' button' : ' white')} onClick={() => setButtonSelected(BUTTON_NAMES.ALL)}>Tout</button>
                    <button className={'autoSize' + (buttonSelected === BUTTON_NAMES.CREDIT ? ' button' : ' white')} onClick={() => setButtonSelected(BUTTON_NAMES.CREDIT)}>Credit</button>
                    <button className={'autoSize' + (buttonSelected === BUTTON_NAMES.DEBT ? ' button' : ' white')} onClick={() => setButtonSelected(BUTTON_NAMES.DEBT)}>Dette</button>
                </div>
                <Contacts/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;