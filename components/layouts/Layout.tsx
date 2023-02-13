import { FC } from "react";

import Head from "next/head"

import { Navbar, Sidebar } from "../ui";
import { Box } from "@mui/material";

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export const Layout: FC<Props> = ({ children, title = 'OpenJira' }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{ title }</title>
            </Head>
            <Navbar />
            <Sidebar />
            <Box sx={{ padding: '10px 20px' }}>
                { children }
            </Box>
        </Box>
    )
}