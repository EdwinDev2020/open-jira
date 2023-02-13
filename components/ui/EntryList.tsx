import { FC, useContext, useMemo, DragEvent } from "react"
import { EntriesContext } from "@/context/entries"
import { List, Paper } from "@mui/material"
import { EntryCard } from "./"
import { EntryStatus } from "@/interfaces"
import { UIContext } from "@/context/ui"
import { url } from "inspector"

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext( EntriesContext );
    const { isDragging, endDragging } = useContext( UIContext )

    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ]);

    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
        const id = event.dataTransfer.getData('text');
        
        const entry = entries.find( e => e._id === id )!;
        entry.status = status;
        updateEntry( entry );
        endDragging();
    }

    return (
        // TODO: Drop pendiente
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            style={{
                border: isDragging ? '1px dashed #19857b' : '1px dashed transparent',
                transition: 'all .3s'
            }}
        >
            <Paper sx={{
                height: "calc(100vh - 200px)",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                    width: "4px",
                    bgcolor: "#454545",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#4a148c",
                    border: "7px none #fffff",
                    borderRadius: "10px",
                },
                backgroundColor: 'transparent',
                paddingX: 1
            }}>
                <List
                    sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}
                >
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard
                                key={ entry._id }
                                entry={ entry}
                            />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
