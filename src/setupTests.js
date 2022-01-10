import Enzyme from 'enzyme' // Libreria Enzyme
import Adapter from '@wojtekmaj/enzyme-adapter-react-17' // Adaptador  de React 17 Temporal
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() }); // Configuramos el adaptador de React v-17
// Recordemos que Enzyme aun no esta disponible para la version 17 de React

expect.addSnapshotSerializer( createSerializer({ mode: 'deep' })); // Nos servira para crear snapshots de nuestra app