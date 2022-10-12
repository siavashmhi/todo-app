import React from 'react';
import Select from 'react-select';
import styles from './selectOption.module.css'

const options = [
    {value: 'All', label: 'All'},
    {value: 'completed', label: 'completed'},
    {value: 'uncompleted', label: 'uncompleted'}
]

const SelectOption = ({filterTodos, selectValue, setSelectValue}) => {
    const changeHandler = event => {
        setSelectValue(event.value)
        filterTodos(event.value)
    }

    return (
        <div>
            <Select
                value={selectValue}
                onChange={changeHandler}
                options={options}
                className={styles.select}
                placeholder={selectValue}
             />
        </div>
    );
};

export default SelectOption;