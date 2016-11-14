interface IGraph {
  from: string;
  to: string;
  weight: number;
}

export class Graph implements IGraph {
  constructor(public from: string,
              public to: string, public weight: number) {
  }
}
