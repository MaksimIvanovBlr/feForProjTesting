import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const Budget = () => {
    const [realBalance, setRealBalance] = useState('')
    return (
        <div >

            <a href="..." >
                <p>Основной доход за месяц:6000 руб </p>
                <hr/>
            </a>


            <a href="..." >
                <p>Дней до зарплаты:10</p>
                <hr/>
            </a>

            <a href="..." >
                <p>На ежедневыне расходы до конца месяца:1000 руб(расчетный остаток)</p>
                <hr/>
            </a>


            <a href="..." >
                <p>Сумма не оплаченых платежей:10 руб</p>
                <hr/>
            </a>


            <a href="..." >
                <p>Резерв: 1000 руб</p>
                <hr/>
            </a>


            <a href="..." >
                <p>"Буфферные" деньги:1000 руб </p>
                <hr/>
            </a>


            <a href="..." >
                <p>Прогнозируемый остаток на карте:100 руб</p>
                <hr/>
            </a>


            <a href="..." >
                <p>Действительный баланс карты: 100 руб</p>
                <hr/>
            </a>




            <a href="..." >
                <p>Дополнительный неиспользованный доход: ...руб</p>
                <hr/>
            </a>


            <Form.Control
                className='mt-3'
                placeholder='реальный баланс карты...'
                value={realBalance}
                onChange={e => setRealBalance(e.target.value)}
                type='number'
            />
            <Button variant={'outline-success'}

            >
                ок
            </Button>
        </div>



    );
};

export default Budget;