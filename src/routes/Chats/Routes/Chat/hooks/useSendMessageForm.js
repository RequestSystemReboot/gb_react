import {useState} from "react";


export const useSendMessageForm = ({ onSend, chat_id }) => {
    const [value, setValue] = useState('');

    const resetValue = () => setValue('');

    const onChange = (event) => setValue(event.target.value);

    const onSubmit = () => {
        if (value.length === 0) {
            return
        }
        onSend(value, chat_id);
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