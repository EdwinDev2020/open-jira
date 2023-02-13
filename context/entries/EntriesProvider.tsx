import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '@/interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];
}

interface Props {
    children?: JSX.Element | JSX.Element[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'pending: Aute quis laboris ad minim minim consequat veniam aliquip do ex in laborum.',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'in-progress: Mollit aliqua velit aliqua incididunt.',
            status: 'in-progress',
            createAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'finished: Consequat eu incididunt occaecat do incididunt ipsum id anim labore quis.',
            status: 'finished',
            createAt: Date.now() - 100000,
        },
    ],
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
    
    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
    }

    const updateEntry = ( entry: Entry ) => {
        dispatch({ type: '[Entry] Update-Entry', payload: entry });
    }

    return (
        <EntriesContext.Provider
            value={{
                ...state,

                // Methods
                addNewEntry,
                updateEntry
            }}
        >
            { children }
        </EntriesContext.Provider>
    )
}
