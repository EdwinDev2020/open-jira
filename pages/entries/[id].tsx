import { ChangeEvent, useState } from "react";
import { Layout } from "@/components/layouts";
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material";
import { EntryStatus } from "@/interfaces";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const validStatus: EntryStatus[] = [ 'pending', "in-progress", "finished" ];

export const EntryPage = () => {

    const [inputValue, setInputValue] = useState('');
    const [status, setstatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const onInputValueChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value );
    }

    const onStatusChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        setstatus( event.target.value as EntryStatus );
    }

    const onSave = () => {
        console.log( { inputValue, status } )
    }

    return (
        <Layout title="...">
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                    <Card>
                        <CardHeader
                            title={`Entrada: ${ inputValue }`}
                            subheader={`Creada hace: ... minutos`}
                        />
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                autoFocus
                                multiline
                                label="Nueva entrada"
                                value={ inputValue }
                                onChange={ onInputValueChange }
                                helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
                                onBlur={ () => setTouched( true )}
                                error={ inputValue.length <= 0 && touched }
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={ status }
                                    onChange={ onStatusChange }
                                >
                                    {
                                        validStatus.map( option => (
                                            <FormControlLabel
                                                key={ option }
                                                value={ option }
                                                control={ <Radio /> }
                                                label={ capitalize(option) }
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={ <SaveOutlinedIcon /> }
                                variant="contained"
                                fullWidth
                                color="secondary"
                                onClick={ onSave }
                                disabled={ inputValue.length <= 0 }
                            >
                                Guardar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                }}
                color='error'
            >
                <DeleteOutlinedIcon />
            </IconButton>

        </Layout>
    )
}

export default EntryPage;