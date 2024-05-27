import { createSlice } from "@reduxjs/toolkit";


const valorInicial = []

const carrinhoSlice = createSlice({
    initialState: valorInicial,
    name: 'carrinho',
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const itemExist = state.some(item => item.id === payload)
            if (!itemExist) {
                return [...state, { id: payload, quantidade: 1 }]
            } else {
                return state.filter(item => item.id !== payload)
            }
        },
        mudarQuantidade: (state, { payload }) => {
            state = state.map((itemNoCarrinho) => {
                if (itemNoCarrinho.id === payload.id) {
                    itemNoCarrinho.quantidade += payload.quantidade
                }
                return itemNoCarrinho
            })
        }, 
        resetarCarrinho : () => valorInicial,
    }
})

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer