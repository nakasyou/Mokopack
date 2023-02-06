import Layer from "../layer.ts";
import build from "./build.ts";
class Moko{
  constructor(
    layers:{pre:Layer[], post:Layer[]}
  ){
    
  }
  async build(path: string): Promise<string>{
    return build(path);
  }
}


export default Moko;