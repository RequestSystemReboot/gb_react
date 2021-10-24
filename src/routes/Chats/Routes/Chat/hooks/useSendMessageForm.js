import {useState} from "react";


export const useSendMessageForm = ({ onSend }) => {
    const [value, setValue] = useState('');

    const resetValue = () => setValue('');

    const onChange = setValue;

    const onSubmit = () => {
        if (value.length === 0) {
            return
        }
        onSend(value);
        resetValue()
    }

    return [
        value,
        {
            onChange,
            onSubmit
        }
    ]
}