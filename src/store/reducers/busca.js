import { createSlice } from "@reduxjs/toolkit";


const valorInicial = ''

const buscaSlice = createSlice({
    initialState: valorInicial,
    name: 'busca',
    reducers: {
        mudarBusca : (state, { payload }) => payload,
        resetarBusca: () => valorInicial
    }
})

export const { mudarBusca, resetarBusca } = buscaSlice.actions

export default buscaSlice.reducer