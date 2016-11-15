import { Component } from '@angular/core';
import { Edge } from './edge';

@Component({
  moduleId: module.id,
  selector: 'rail-info',
  templateUrl: 'rail-info.component.html'
})
export class RailInfoComponent {
  edges: Edge[] = [];
  graph: any[] = ['AB5', 'BC4', 'CD8', 'DC8',
                  'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
  constructor() {
    for(let item of this.graph){
      let [_, f, t, w, __, ___] = item.match(/([A-Z])([A-Z])([\d+])/);
      this.addEdge(f, t, w);
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

  findEdge(from, to): Edge {
    return this.edges.find(i => (i.from === from) && (i.to === to));
  }
}
