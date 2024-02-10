import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const Daily = () => {
    const [spent, setSpent] = useState('')
    return (

        <div>
            <a href="..." >
                <p>На счету:6000 руб </p>
                <hr/>
            </a>


            <a href="..." >
                <p>Резерв:10</p>
                <hr/>
            </a>

            <a href="..." >
                <p>Дней до ЗП</p>
                <hr/>
            </a>


            <a href="..." >
                <p>Буфферные деньги.остаток</p>
                <hr/>
            </a>


            <Form.Control
                className='mt-3'
                placeholder='потрачено...'
                value={spent}
                onChange={e => setSpent(e.target.value)}
                type='number'
            />
            <Button variant={'outline-success'}

            >
                ок
            </Button>

        </div>
    );
};

export default Daily;