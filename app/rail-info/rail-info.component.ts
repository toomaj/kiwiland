import { Component,OnInit } from '@angular/core';
import { Edge } from './edge';

@Component({
  moduleId: module.id,
  selector: 'rail-info',
  templateUrl: 'rail-info.component.html'
})
export class RailInfoComponent {
  distanceOutputs: any[] = [];
  edges: Edge[] = [];
  graph: any[] = ['AB5', 'BC4', 'CD8', 'DC8',
                  'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
  constructor() {
    for(let item of this.graph){
      let [_, f, t, w, __, ___] = item.match(/([A-Z])([A-Z])([\d+])/);
      this.addEdge(f, t, Number(w));
    }
  }

  addEdge(from, to, weight): void {
    let edge = this.findEdge(from, to);
    if(edge){
      edge.weight = weight;
      return;
    }
    this.edges.push(new Edge(from, to, weight));
  }

  routeDistnace(stops: any[]): any {
    let from, to, output: number = 0;
    while(([from, to] = [stops.shift(), stops[0]]) && (stops.length > 0)) {
      let edge = this.findEdge(from, to);
      if(!edge) return 'NO SUCH ROUTE';
      output += edge.weight;
    }
    return output;
  }

  findEdge(from, to): Edge {
    return this.edges.find(i => (i.from === from) && (i.to === to));
  }

  ngOnInit(): void {
    // a very rough assignment to have visual in development
    let paths = [['A', 'B', 'C'], ['A', 'D'], ['A', 'D', 'C'],
                 ['A', 'E', 'B', 'C', 'D'], ['A', 'E', 'D']];
    let count = 0;
    for(let p of paths) {
      let output = `Output #${count+=1}, Distance of: ${p}`;
      let h = {text: output, value: this.routeDistnace(p)};
      this.distanceOutputs.push(h);
    }
  }
}
