declare module 'huncwot' {
  interface Request {
    params: {
      [name: string]: any
    }
  }

  type Response = string | { body: string } | Promise<string> | Promise<{ body: string }>;

  type Handler = (request: Request) => Response;

  interface Routes {
    DELETE?: {
      [name: string]: Handler
    },
    GET?: {
      [name: string]: Handler
    },
    HEAD?: {
      [name: string]: Handler
    },
    OPTIONS?: {
      [name: string]: Handler
    }
    PATCH?: {
      [name: string]: Handler
    },
    POST?: {
      [name: string]: Handler
    },
    PUT?: {
      [name: string]: Handler
    },
  }

  interface Payload {
    [key: string]: any
  }
  type Task = (input: Payload) => Promise<void>;
  type Queue = any;

  export { Handler, Routes, Request, Response, Payload, Task }
}

declare module 'huncwot/response' {
  import { Response } from 'huncwot';

  function OK(_: any): Response;

  export { OK };
}

declare module 'huncwot/background' {
  import { Task, Payload, Queue } from 'huncwot';

  interface ScheduleInput {
    task: Task
    payload?: Payload
    queue?: Queue
    runAt?: string
    maxAttempts?: number
  }

  function schedule(_: ScheduleInput): Promise<void>;
}