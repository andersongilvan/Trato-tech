import { createSlice } from "@reduxjs/toolkit";

// Importações das miniaturas (thumbnails)
import automotivoThumb from '../../../public/assets/categorias/thumbnail/automotivo.png';
import eletronicosThumb from '../../../public/assets/categorias/thumbnail/eletronicos.png';
import escritorioThumb from '../../../public/assets/categorias/thumbnail/escritorio.png';
import jogosThumb from '../../../public/assets/categorias/thumbnail/jogos.png';
import somThumb from '../../../public/assets/categorias/thumbnail/som.png';

// Importações dos cabeçalhos (headers)
import automotivoHeader from '../../../public/assets/categorias/header/automotivo.png';
import eletronicosHeader from '../../../public/assets/categorias/header/eletronicos.png';
import escritorioHeader from '../../../public/assets/categorias/header/escritorio.png';
import jogosHeader from '../../../public/assets/categorias/header/jogos.png';
import somHeader from '../../../public/assets/categorias/header/som.png';


const estadoInicial = [{
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
    nome: 'Automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
    nome: 'Escritório',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: 'Tudo para o que escritório ficar incrível!'
},
{
    nome: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}];


const categoriasSlice = createSlice({
    initialState: estadoInicial,
    name: 'categorias'
})

export default categoriasSlice.reducer