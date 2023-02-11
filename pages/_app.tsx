import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '@/themes';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={ darkTheme }>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
