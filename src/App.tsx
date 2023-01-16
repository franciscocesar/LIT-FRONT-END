import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from './routes'
import { PrimaryTheme } from "./themes/primary"

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={PrimaryTheme}>
          <AppRoutes />
          <CssBaseline />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
