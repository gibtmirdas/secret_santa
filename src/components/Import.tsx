import React, { useState } from 'react';

type ImportProps = {
    imported: (persons: string[]) => void,
}

export default function Import({ imported }: ImportProps) {
    const [input, setinput] = useState('');

    const inputChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setinput(e.currentTarget.value);
    }

    const importInput = () => {
        const persons = input.split(',');
        imported(persons);
    }

    return <div className="import">
        <label title="csv format, ex: p1,p2,p3">
            add users:
            <div className='import__icon'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="12" height="12" viewBox="0 0 24 24"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg>
            </div>
        </label>
        <input placeholder="aaa,bbb,cccc" onChange={inputChanged}>
        </input>
        <button disabled={input.length === 0} onClick={importInput}>Import</button>
    </div >
}