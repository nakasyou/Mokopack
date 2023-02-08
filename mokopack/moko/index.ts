import {options} from "./options.ts";
import build from "./build/index.ts";

class Moko{
  options:options;
  constructor(options:options){
    this.options=options;
  }
  build(input: string){
    build(input,this.options)
  }
  buildFile(from: string,dist: string){
    
  }
}
export default Moko;