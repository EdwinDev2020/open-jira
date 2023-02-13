import { DragEvent, FC, useContext } from "react"
import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { UIContext } from "@/context/ui"

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext( UIContext );

    const onDragStart = ( event: DragEvent<HTMLDivElement> ) => {
        event.dataTransfer.setData('text', entry._id);
        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }

    return (
        <Card
            sx={{ marginBottom: 1, position: 'relative', zIndex: 999 }}
            // Eventos Drag
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        >
            <CardActionArea>
                <CardContent>
                    <Typography
                        sx={{ whiteSpace: 'pre-line' }}
                    >{ entry.description }</Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography
                        variant="body2"
                    >hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
