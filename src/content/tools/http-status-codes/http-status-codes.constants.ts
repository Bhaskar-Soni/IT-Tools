import { translate as t } from '@/plugins/i18n.plugin';

export const codesByCategories: {
  category: string
  codes: {
    code: number
    name: string
    description: string
    type: 'HTTP' | 'WebDav'
  }[]
}[] = [
  {
    category: '1xx informational response',
    codes: [
      {
        code: 100,
        name: 'Continue',
        description: 'Waiting for the client to emit the body of the request.',
        type: 'HTTP',
      },
      {
        code: 101,
        name: 'Switching Protocols',
        description: 'The server has agreed to change protocol.',
        type: 'HTTP',
      },
      {
        code: 102,
        name: 'Processing',
        description: '>-',
        type: 'WebDav',
      },
      {
        code: 103,
        name: 'Early Hints',
        description: 'The server returns some response headers before final HTTP message.',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '2xx success',
    codes: [
      {
        code: 200,
        name: 'OK',
        description: 'Standard response for successful HTTP requests.',
        type: 'HTTP',
      },
      {
        code: 201,
        name: 'Created',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 202,
        name: 'Accepted',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 203,
        name: 'Non-Authoritative Information',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 204,
        name: 'No Content',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 205,
        name: 'Reset Content',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 206,
        name: 'Partial Content',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 207,
        name: 'Multi-Status',
        description:
          '>-',
        type: 'WebDav',
      },
      {
        code: 208,
        name: 'Already Reported',
        description:
          '>-',
        type: 'WebDav',
      },
      {
        code: 226,
        name: 'IM Used',
        description:
          '>-',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '3xx redirection',
    codes: [
      {
        code: 300,
        name: 'Multiple Choices',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 301,
        name: 'Moved Permanently',
        description: 'This and all future requests should be directed to the given URI.',
        type: 'HTTP',
      },
      {
        code: 302,
        name: 'Found',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 303,
        name: 'See Other',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 304,
        name: 'Not Modified',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 305,
        name: 'Use Proxy',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 306,
        name: 'Switch Proxy',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 307,
        name: 'Temporary Redirect',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 308,
        name: 'Permanent Redirect',
        description: '>-',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '4xx client error',
    codes: [
      {
        code: 400,
        name: 'Bad Request',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 401,
        name: 'Unauthorized',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 402,
        name: 'Payment Required',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 403,
        name: 'Forbidden',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 404,
        name: 'Not Found',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 405,
        name: 'Method Not Allowed',
        description: 'A request method is not supported for the requested resource.',
        type: 'HTTP',
      },
      {
        code: 406,
        name: 'Not Acceptable',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 407,
        name: 'Proxy Authentication Required',
        description: 'The client must first authenticate itself with the proxy.',
        type: 'HTTP',
      },
      {
        code: 408,
        name: 'Request Timeout',
        description: 'The server timed out waiting for the request.',
        type: 'HTTP',
      },
      {
        code: 409,
        name: 'Conflict',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 410,
        name: 'Gone',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 411,
        name: 'Length Required',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 412,
        name: 'Precondition Failed',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 413,
        name: 'Payload Too Large',
        description: 'The request is larger than the server is willing or able to process.',
        type: 'HTTP',
      },
      {
        code: 414,
        name: 'URI Too Long',
        description: 'The URI provided was too long for the server to process.',
        type: 'HTTP',
      },
      {
        code: 415,
        name: 'Unsupported Media Type',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 416,
        name: 'Range Not Satisfiable',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 417,
        name: 'Expectation Failed',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 418,
        name: 'I\\\'m a teapot',
        description: 'The server refuses the attempt to brew coffee with a teapot.',
        type: 'HTTP',
      },
      {
        code: 421,
        name: 'Misdirected Request',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 422,
        name: 'Unprocessable Entity',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 423,
        name: 'Locked',
        description: 'The resource that is being accessed is locked.',
        type: 'HTTP',
      },
      {
        code: 424,
        name: 'Failed Dependency',
        description: 'The request failed due to failure of a previous request.',
        type: 'HTTP',
      },
      {
        code: 425,
        name: 'Too Early',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 426,
        name: 'Upgrade Required',
        description: 'The client should switch to a different protocol such as TLS/1.0.',
        type: 'HTTP',
      },
      {
        code: 428,
        name: 'Precondition Required',
        description: 'The origin server requires the request to be conditional.',
        type: 'HTTP',
      },
      {
        code: 429,
        name: 'Too Many Requests',
        description: 'The user has sent too many requests in a given amount of time.',
        type: 'HTTP',
      },
      {
        code: 431,
        name: 'Request Header Fields Too Large',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 451,
        name: 'Unavailable For Legal Reasons',
        description:
          '>-',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '5xx server error',
    codes: [
      {
        code: 500,
        name: 'Internal Server Error',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 501,
        name: 'Not Implemented',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 502,
        name: 'Bad Gateway',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 503,
        name: 'Service Unavailable',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 504,
        name: 'Gateway Timeout',
        description:
          '>-',
        type: 'HTTP',
      },
      {
        code: 505,
        name: 'HTTP Version Not Supported',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 506,
        name: 'Variant Also Negotiates',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 507,
        name: 'Insufficient Storage',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 508,
        name: 'Loop Detected',
        description: 'The server detected an infinite loop while processing the request.',
        type: 'HTTP',
      },
      {
        code: 510,
        name: 'Not Extended',
        description: '>-',
        type: 'HTTP',
      },
      {
        code: 511,
        name: 'Network Authentication Required',
        description: 'The client needs to authenticate to gain network access.',
        type: 'HTTP',
      },
    ],
  },
];
