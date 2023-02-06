export default class Layer{
  options: object;
  constructor(options: object){
    this.options=options;
  }
  process(){
    
  }
  _compile(script: string): string{
    return process(script,this.options);
  }
}