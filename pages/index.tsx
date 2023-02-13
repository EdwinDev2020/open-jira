import { NextPage } from "next";

import { Card, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";

const HomePage: NextPage = () => {
    return (
        <Layout title="Home - OpenJira">
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={{ height: 'calc(100vh - 90px)' }}>
                        <CardHeader title="Pendientes" />
                        {/* Agregar una nueva entrada */}
                        <NewEntry />
                        <EntryList status="pending" />
                    </Card>
                </Grid>
                
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={{ height: 'calc(100vh - 90px)' }}>
                        <CardHeader title="En Progreso" />
                        <EntryList status="in-progress" />
                    </Card>
                </Grid>

                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={{ height: 'calc(100vh - 90px)' }}>
                        <CardHeader title="Completadas" />
                        <EntryList status="finished" />
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default HomePage