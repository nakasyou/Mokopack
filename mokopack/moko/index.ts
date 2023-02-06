import {layersType} from "../layer.ts";
import build from "./build.ts";
class Moko{
  layers:layersType;
  constructor(
    layers:layerType
  ){
    this.layers=layers;
  }
  async build(path: string): Promise<string>{
    return build({path:path,layers:layers});
  }
}


export default Moko;