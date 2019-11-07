import {Dictionary} from '../../utils/handler';


const color = new Dictionary({name:'color',description:'color definition',dataList:new Map()})
				.addRow('Dark Grey','StoneGrey')
				.addRow('Dark Grey','Grey Cloud');
const size = new Dictionary({name:'size',description:'size definition',dataList:new Map()})
export default {
	dictionaries: [color,size]
};