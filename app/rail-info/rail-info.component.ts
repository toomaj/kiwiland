import { Component } from '@angular/core';
import { Graph } from './graph';

@Component({
  moduleId: module.id,
  selector: 'rail-info',
  templateUrl: 'rail-info.component.html'
})
export class RailInfoComponent {
  paths: Graph[] = [];
  graph_items: any[] = ['AB5', 'BC4', 'CD8', 'DC8',
                        'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
  constructor() {
    for(let item of this.graph_items){
      this.paths.push(this.createPath(item));
    }
  }

  createPath(item: string): Graph {
    let props: any[] = item.match(/([A-Z])([A-Z])([\d+])/);
    return new Graph(props[1], props[2], props[3]);
  }
}
