interface IEdge {
  from: string;
  to: string;
  weight: number;
}

export class Edge implements IEdge {
  constructor(public from: string,
              public to: string, public weight: number) {
  }
}
