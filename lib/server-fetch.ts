// NOTE: Import this only for server-side fetch() calls.
import setupFetch from '@zeit/fetch';

const serverFetch = setupFetch();

export default serverFetch;
