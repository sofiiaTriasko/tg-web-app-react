import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [mail, setMail] = useState('');
    const { tg } = useTelegram();

    const onSendData = useCallback(
        () => {
            const data = {
                region,
                city,
                mail
            }
            tg.sendData(JSON.stringify(data))
        },
        [city,region,mail, tg],
    );


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
            return () => {
           tg.offEvent('mainButtonClicked', onSendData)
            }
    }, [onSendData, tg])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Відправити дані'
        })
    }, [tg.MainButton])

    useEffect(() => {
        if(!mail || !region || !city) {
            tg.MainButton.hide()
        }
    }, [city, mail, region, tg.MainButton])

    const onChangeRegion = (e) => {
        setRegion(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeMail = (e) => {
        setMail(e.target.value);
    }
    return (

        <div className={"form"}>
            <h3>Ввудіть ваші дані</h3>
            <input
                type="text"
                placeholder={'Область'}
                value={region}
                onChange={onChangeRegion}
            />
            <input
                type="text"
                placeholder={'Місто/село'}
                value={city}
                onChange={onChangeCity}
            />
            <input
                type="text"
                placeholder={'Відділення пошти'}
                value={mail}
                onChange={onChangeMail}
            />
        </div>
    );
};

export default Form;
