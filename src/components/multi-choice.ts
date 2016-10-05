import { VueComponent, Prop, Watch } from 'vue-typescript'

class Choice {
    name:string;
    selected:boolean;

    constructor(name:string, selected:boolean){
        this.name = name;
        this.selected = false;
    }
}

@VueComponent({
    template: require('./navbar.html')
})
export class MultiChoice extends Vue {

    @Prop
    choices:Array<string> = []; //default value

    @Prop
    object:{default:string} = {default: 'Default object property!'}; //objects as default values don't need to be wrapped into functions

    links:Choice[] = []

    @Watch('$route.path')
    pathChanged(){
        console.log('Changed current path to: ' + this.$route.path);
    }

    ready(){
        console.log(this.object.default);
    }
} 