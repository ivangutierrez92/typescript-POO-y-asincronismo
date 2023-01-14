export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

/* const driver: Driver = {
  database: '',
  password: '',
  port: 23,
}; */

class PostgressDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {}
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {}
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {}
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {}
}
